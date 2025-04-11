// pages/About.jsx
// Bio section, skills list using MUI Chips
import { Box, Typography, Chip, Stack, Divider } from "@mui/material";

const skills = [
	"React",
	"JavaScript",
	"TypeScript",
	"HTML",
	"CSS",
	"Material UI",
	"Vite",
	"Git",
	"Figma",
];

export default function About() {
	return (
		<Box className={"about-container"}>
			<Typography variant="h4" gutterBottom sx={{ mt: 4, mb: 1 }}>
				About Me
			</Typography>
			<Typography
				variant="body1"
				color="text.secondary"
				component={"p"}
				sx={{ mb: 2 }}
			>
				I'm a frontend developer with 7 years of professional experience
				building responsive, user-friendly web interfaces. I specialize
				in JavaScript, React, HTML, and CSS, and have strong experience
				working with HubSpot for custom development and integration.
			</Typography>
			<Typography
				variant="body1"
				color="text.secondary"
				component={"p"}
				sx={{ mb: 2 }}
			>
				I enjoy turning complex ideas into intuitive user experiences
				and take pride in writing clean, maintainable code. Whether
				collaborating with a team or working independently, I'm driven
				by creating interfaces that are both functional and visually
				engaging
			</Typography>


			<Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 1 }}>
				Career Timeline
			</Typography>
			<Stack spacing={2}>
				<Box>
					<Typography variant="subtitle1">
						<strong>Senior Frontend Developer</strong> – Spring EQ
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Remote · Mar 2023 – Present
					</Typography>
					<Typography variant="body2" sx={{ mt: 0.5 }}>
						Developed custom integrations between HubSpot and
						Comergence, managing 100K+ daily API calls. Created
						CI/CD pipelines and collaborated with UX to deliver
						seamless web app interfaces.
					</Typography>
				</Box>
        <Divider/>
				<Box>
					<Typography variant="subtitle1">
						<strong>Owner & Frontend Developer</strong> – Gold Robot
					</Typography>
					<Typography variant="body2" color="text.secondary">
						San Francisco, CA · Jul 2020 – Mar 2023
					</Typography>
					<Typography variant="body2" sx={{ mt: 0.5 }}>
						Designed and published HubSpot assets to the
						marketplace. Built custom themes and modules for client
						projects, offering scalable solutions and personalized
						user experiences.
					</Typography>
				</Box>
        <Divider/>

				<Box>
					<Typography variant="subtitle1">
						<strong>Frontend Developer</strong> – The Pedowitz Group
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Remote · Dec 2021 – Jan 2023
					</Typography>
					<Typography variant="body2" sx={{ mt: 0.5 }}>
						Developed tailored HubSpot modules and themes,
						collaborating closely with clients on UX/UI and content
						strategy for marketing-focused solutions.
					</Typography>
				</Box>
        <Divider/>

				<Box>
					<Typography variant="subtitle1">
						<strong>Frontend Developer</strong> – SmartBug Media
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Remote · Jun 2020 – Nov 2021
					</Typography>
					<Typography variant="body2" sx={{ mt: 0.5 }}>
						Migrated client sites from WordPress to HubSpot, led UX
						audits, and built reusable template systems to
						accelerate delivery timelines.
					</Typography>
				</Box>
        <Divider/>

				<Box>
					<Typography variant="subtitle1">
						<strong>Frontend Developer</strong> – SpotOn Inc.
					</Typography>
					<Typography variant="body2" color="text.secondary">
						San Francisco, CA · Jul 2018 – May 2020
					</Typography>
					<Typography variant="body2" sx={{ mt: 0.5 }}>
						Created internal dashboards and marketing tools.
						Collaborated with in-house teams to build
						conversion-focused landing pages and maintain analytics
						visibility.
					</Typography>
				</Box>
			</Stack>

      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 1 }}>
				Skills
			</Typography>
			<Stack direction="row" spacing={0} sx={{ gap: 1 }} flexWrap="wrap">
				{skills.map((skill, index) => (
					<Chip
						key={index}
						label={skill}
						color="primary"
						variant="outlined"
					/>
				))}
			</Stack>

		</Box>
	);
}
