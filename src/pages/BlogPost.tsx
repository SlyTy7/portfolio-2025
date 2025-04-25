import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { blogDb } from "../lib/firebase";
import { Typography, Box, Grid } from "@mui/material";

type BlogPost = {
	headline: string | null;
	content: string;
	date: string;
};

const extractHtml = (html: string): { headline: string | null; content: string } => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(html, "text/html");
	const h1 = doc.querySelector("h1");
	let headline = null;

	if (h1) {
		headline = h1.textContent;
		h1.remove();
	}

  const content = doc.body.innerHTML;

	return { headline, content };
}

export default function BlogPost() {
	const { slug } = useParams<{ slug: string }>();
	const [post, setPost] = useState<BlogPost | null>(null);

	useEffect(() => {
		const fetchPost = async () => {
			const q = query(
				collection(blogDb, "posts"),
				where("date", "==", slug)
			);
			const snapshot = await getDocs(q);

			if (!snapshot.empty) {
        
				const doc = snapshot.docs[0];
        const rawData = doc.data();
				const { headline, content } = extractHtml(rawData.html);
        const date = rawData.date;

        const data: BlogPost = {
					headline,
					content,
					date,
				};

				setPost(data);
			}
		};

		fetchPost();
	}, [slug]);

	if (!post)
		return (
			<Box>
				<Typography variant="h4">Post not found</Typography>
			</Box>
		);

	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				{post.headline}
			</Typography>
      <Typography variant="subtitle1" sx={{ fontSize: '.8rem' }}>
        <strong>{post.date}</strong>
      </Typography>
			<Grid container spacing={4}>
        <Box
          sx={{ my: 4 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></Box>
      </Grid>
		</Box>
	);
}
