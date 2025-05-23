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

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

// Define the types for the project object
interface Project {
	title: string;
	description: string;
	tech: string[];
	image: string;
	date: string;
	timestamp: number;
	github?: string;
	live?: string;
}

const mapFirestoreDocToProject = (doc: any): Project => {
	const createdAt = new Date(doc.createdAt);

	return {
		title: doc.displayName || doc.name,
		description: doc.description,
		tech: (doc.topics || []).filter(
			(topic: string) => topic !== "portfolio-project"
		),
		image: doc.screenshot || doc.socialPreview,
		date: createdAt.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
		}),
		timestamp: doc.createdAtTimestamp,
		github: doc.githubUrl,
		live: doc.liveUrl,
	};
};

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
			<CardMedia
				component="img"
				alt={title}
				height="200"
				image={image}
				onError={(e) => {
					const target = e.target as HTMLImageElement;
					target.onerror = null; // Prevent infinite loop if fallback also fails
					target.src = "/projects/github-placeholder.png";
				}}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
				<Box mt={1} sx={{ display: "flex", flexWrap: "wrap" }}>
					{tech.map((t: string, i: number) => (
						<Box
							key={i}
							component="span"
							sx={{
								mr: 1,
								mb: 1,
								px: 1,
								py: 0.5,
								borderRadius: 1,
								bgcolor: "#525866",
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
					{github && (
						<Button
							color="inherit"
							size="small"
							variant="text"
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
				</CardActions>
			)}
		</Card>
	);
}

export default function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const fetchProjects = async () => {
			const snapshot = await getDocs(collection(db, "projects"));
			const fetchedProjects = snapshot.docs
				.map((doc) => mapFirestoreDocToProject(doc.data()))
				.sort((a, b) => b.timestamp - a.timestamp);

			setProjects(fetchedProjects);
		};

		fetchProjects().catch(console.error);
	}, []);

	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				Projects
			</Typography>
			<Grid container spacing={4}>
				{projects.map((project, index) => (
					<Grid
						size={{ xs: 12, sm: 6, md: 4 }}
						key={index}
						component="div"
					>
						<ProjectCard {...project} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
