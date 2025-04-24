import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { blogDb } from "../lib/firebase";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

type BlogPost = {
	id: string;
	createdAt: {seconds: number};
	headlines: string;
	date: string;
};

export default function Blog() {
	const [posts, setPosts] = useState<BlogPost[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const snapshot = await getDocs(collection(blogDb, "posts"));

			const data = snapshot.docs.map((doc) => ({				
				id: doc.id,
				...doc.data(),
			})) as BlogPost[];

			// sort by createdAt
			const sorted = data.sort(
				(a, b) => b.createdAt.seconds - a.createdAt.seconds
			);

			setPosts(sorted);
		};

		fetchPosts();
	}, []);

	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				Blog
			</Typography>

			<Grid container spacing={4}>
				{posts.map((post, index) => (
					<Grid
						size={{ xs: 12, sm: 6, md: 4 }}
						key={index}
						component="div"
					>
						<Card>
							<CardContent>
								<Typography variant="h6">
									{post.headlines}
								</Typography>
								<Typography variant="body1" className="mt-2">
									{post.date}
								</Typography>
								{/* Add link to full post */}
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
