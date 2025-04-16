import {
	Grid,
	Typography,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CardHeader,
} from "@mui/material";

import "../css/Projects.css";

// Define the types for the project object
interface Project {
	title: string;
	description: string;
	tech: string[];
	image: string;
	date: string;
	github?: string;
	live?: string;
}

// Sample projects with correct type annotations
const projects: Project[] = [
	{
		title: "Portfolio Redesign",
		description:
			"A sleek and modern redesign of my personal portfolio using React and Material UI.",
		tech: ["React", "Material UI", "Vite", "Git", "GitHub"],
		image: "/projects/portfolio.png",
		github: "https://github.com/SlyTy7/portfolio-2025",
		live: "https://www.tylerwest.dev",
		date: "April 11th, 2025",
	},
	{
		title: "Clock.js",
		description:
			"A minimalist digital clock built with vanilla JavaScript, HTML, and CSS.",
		tech: ["HTML", "CSS", "JavaScript"],
		image: "/projects/clock.png",
		github: "https://github.com/SlyTy7/clock",
		live: "https://slyty7.github.io/clock/",
		date: "April 15th, 2025",
	},
	{
		title: "Landing Page",
		description:
			"A high-converting marketing landing page built with accessibility and performance in mind.",
		tech: ["HTML", "CSS", "JavaScript"],
		image: "https://placehold.co/400x200?text=Landing+Page",
		live: "https://landing-page-demo.com",
		date: "April 10th, 2025",
	},
	{
		title: "E-commerce Store",
		description:
			"A basic online store frontend with product filtering and a shopping cart.",
		tech: ["React", "Redux", "Stripe"],
		image: "https://placehold.co/400x200?text=E-commerce+Store",
		github: "https://github.com/yourusername/ecommerce-store",
		live: "https://ecommerce-demo.com",
		date: "April 10th, 2025",
	},
	{
		title: "Blog Platform",
		description:
			"A minimal blogging platform with Markdown support and content management.",
		tech: ["Next.js", "Tailwind CSS", "MDX"],
		image: "https://placehold.co/400x200?text=Blog+Platform",
		github: "https://github.com/yourusername/blog-platform",
		live: "https://blog-platform-demo.com",
		date: "April 10th, 2025",
	},
	{
		title: "Weather App",
		description:
			"A weather forecast app using OpenWeather API and geolocation.",
		tech: ["React", "Axios", "API Integration"],
		image: "https://placehold.co/400x200?text=Weather+App",
		live: "https://weather-demo.com",
		date: "April 10th, 2025",
	},
	{
		title: "Chat App",
		description: "A real-time chat application built with Firebase.",
		tech: ["React", "Firebase", "Material UI"],
		image: "https://placehold.co/400x200?text=Chat+App",
		github: "https://github.com/yourusername/chat-app",
		date: "April 10th, 2025",
	},
	{
		title: "Task Manager",
		description: "A simple to-do app with drag-and-drop task management.",
		tech: ["React", "Dnd Kit", "Local Storage"],
		image: "https://placehold.co/400x200?text=Task+Manager",
		github: "https://github.com/yourusername/task-manager",
		live: "https://task-manager-demo.com",
		date: "April 10th, 2025",
	},
	{
		title: "Finance Tracker",
		description:
			"Track income and expenses with visual graphs and monthly summaries.",
		tech: ["React", "Chart.js", "Context API"],
		image: "https://placehold.co/400x200?text=Finance+Tracker",
		date: "April 10th, 2025",
	},
];

// Updated ProjectCard to conditionally show buttons
function ProjectCard({
	title,
	description,
	tech,
	image,
	github,
	live,
	date,
}: Project) {
	return (
		<Card elevation={4} square={false} className={"project-card"}>
			<CardHeader title={title} subheader={date} />
			<CardMedia component="img" alt={title} height="200" image={image} />
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
				<Box mt={1}>
					{tech.map((t: string, i: number) => (
						<Box
							key={i}
							component="span"
							sx={{
								mr: 1,
								px: 1,
								py: 0.5,
								borderRadius: 1,
								bgcolor: "slategrey",
								color: "white",
								fontSize: 11,
							}}
						>
							{t}
						</Box>
					))}
				</Box>
			</CardContent>
			{(github || live) && (
				<CardActions disableSpacing={false}>
					{github && (
						<Button
							variant="outlined"
							size="small"
							color="primary"
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								fontSize: 12,
							}}
						>
							See The Code
						</Button>
					)}
					{live && (
						<Button
							variant="contained"
							size="small"
							color="primary"
							href={live}
							target="_blank"
							rel="noopener noreferrer"
							sx={{
								fontSize: 12,
							}}
						>
							View It Live
						</Button>
					)}
				</CardActions>
			)}
		</Card>
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
					<Grid size={{ xs: 12, md: 4 }} key={index} component="div">
						<ProjectCard {...project} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
