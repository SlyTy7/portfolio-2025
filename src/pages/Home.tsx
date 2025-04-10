// pages/Home.jsx
// HeroBanner with name "Tyler West", tagline, CTA to Projects
import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box textAlign="center" py={6}>
      <Typography variant="h3" gutterBottom>
        Tyler West
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Frontend Developer | Crafting clean, responsive UIs with React
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={RouterLink} 
        to="/projects" 
        sx={{ mt: 3 }}
      >
        View My Work
      </Button>
    </Box>
  );
}