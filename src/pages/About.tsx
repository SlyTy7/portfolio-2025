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
      <Typography variant="body1" color="text.secondary" component={"p"} sx={{ mb: 2 }}>
      I'm a frontend developer with 7 years of professional experience building responsive, user-friendly web interfaces. I specialize in JavaScript, React, HTML, and CSS, and have strong experience working with HubSpot for custom development and integration.
      </Typography>
      <Typography variant="body1" color="text.secondary" component={"p"} sx={{ mb: 2 }}>
      I enjoy turning complex ideas into intuitive user experiences and take pride in writing clean, maintainable code. Whether collaborating with a team or working independently, I'm driven by creating interfaces that are both functional and visually engaging
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


