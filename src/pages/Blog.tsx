import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { blogDb } from "../lib/firebase";
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

type BlogPost = {
	id: string;
	createdAt: { seconds: number };
	headline: string | null;
	date: string;
	content: string | null;
};

const extractHtml = (html: string): { headline: string | null; content: string | null } => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, "text/html");
	const h1 = doc.querySelector("h1");
	const p = doc.querySelector("p:first-of-type");
	let headline = null;
	let content = null;

	if (h1) {
		headline = h1.textContent;
	}

	if (p) {
		content = p.textContent;
		content = content && content.replace(/(.{125})..+/, "$1…");
	}

	return { headline, content };
}

export default function Blog() {
	const [posts, setPosts] = useState<BlogPost[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const snapshot = await getDocs(collection(blogDb, "posts"));

			const data = snapshot.docs.map((doc) => {
				const rawData = doc.data();
				const { headline, content } = extractHtml(rawData.html);

				return {
					id: doc.id,
					headline,
					content,
					...rawData,
				};
			}) as BlogPost[];

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
								<Typography variant="subtitle1" sx={{ fontSize: '.8rem' }}>
									<strong>{post.date}</strong>
								</Typography>
								<Typography variant="h6" sx={{ mb: 1 }}>{post.headline}</Typography>
								<Typography variant="body2" color="text.secondary">{post.content}</Typography>
								<Button
									variant="contained"
									size="small"
									color="primary"
									component={Link}
									to={`/blog/${post.date}`}
									sx={{ fontSize: 12, mt: 4 }}
								>
									Read More
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
