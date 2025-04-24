import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { blogDb } from "../lib/firebase";
import { Typography, CircularProgress, Box, Grid } from "@mui/material";

type BlogPost = {
  headlines: string;
  html: string; // HTML content
  date: string;
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const q = query(collection(blogDb, "posts"), where("date", "==", slug));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        setPost(doc.data() as BlogPost);
      }

      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) return <Box><CircularProgress /></Box>;
  if (!post) return <Box><Typography variant="h4">Post not found</Typography></Box>;

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{mb: 4}} dangerouslySetInnerHTML={{ __html: post.html }}></Box>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        { post.date }
      </Typography>
    </Box>
  );
}
