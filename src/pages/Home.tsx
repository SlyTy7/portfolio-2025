import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import "../css/Home.css";


export default function Home() {
	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				minHeight: "calc(100vh - 80px)",
				overflow: "hidden",
			}}
		>
			{/* Full-width background image */}
			<Box className="hero-background" />

			{/* Centered content container */}
			<Container
				sx={{
					position: "relative",
					zIndex: 1,
					minHeight: "calc(100vh - 80px)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Typography variant="h3" gutterBottom>
					Tyler West
				</Typography>
				<Typography variant="h6" color="text.secondary" gutterBottom>
					Frontend Software Developer
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
			</Container>
		</Box>
	);
}
