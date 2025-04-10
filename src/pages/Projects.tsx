import { Grid, Typography, Box } from "@mui/material";

// Define the types for the project object
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

// Sample projects with correct type annotations
const projects: Project[] = [
  {
    title: "Portfolio Redesign",
    description: "A sleek and modern redesign of my personal portfolio using React and Material UI.",
    tech: ["React", "Material UI", "Vite"],
    image: "https://via.placeholder.com/400x200?text=Portfolio+Redesign",
  },
  {
    title: "Dashboard App",
    description: "A responsive admin dashboard with charting and theming capabilities.",
    tech: ["React", "Recharts", "MUI"],
    image: "https://via.placeholder.com/400x200?text=Dashboard+App",
  },
  {
    title: "Landing Page",
    description: "A high-converting marketing landing page built with accessibility and performance in mind.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://via.placeholder.com/400x200?text=Landing+Page",
  }
];

// Add type annotations for ProjectCard props
function ProjectCard({ title, description, tech, image }: Project) {
  return (
    <Box borderRadius={2} boxShadow={3} overflow="hidden">
      <img src={image} alt={title} width="100%" />
      <Box p={2}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Box mt={1}>
          {tech.map((t: string, i: number) => (
            <Box key={i} component="span" sx={{ mr: 1, px: 1, py: 0.5, borderRadius: 1, bgcolor: 'primary.dark', color: 'white', fontSize: 12 }}>
              {t}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default function Projects() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index} component="div">
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
