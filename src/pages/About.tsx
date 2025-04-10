// pages/About.jsx
// Bio section, skills list using MUI Chips
import { Box, Typography, Chip, Stack } from "@mui/material";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Material UI",
  "Vite",
  "Git",
  "Figma"
];

export default function About() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        I'm a frontend developer with a passion for building intuitive and responsive user interfaces. I enjoy transforming complex problems into elegant, user-friendly solutions using modern web technologies.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />
        ))}
      </Stack>
    </Box>
  );
}


