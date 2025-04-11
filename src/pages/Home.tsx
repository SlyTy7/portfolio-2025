import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

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
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "calc(100vh - 80px)",
					backgroundImage: `url(/home-background.jpg)`,
					filter: "grayscale(100%)",
					backgroundSize: "cover",
					backgroundPosition: "center -80px",
					opacity: 0.16,
					zIndex: 0,
				}}
			/>

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
					mt: -6,
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
