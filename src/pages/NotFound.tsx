// src/pages/NotFound.tsx
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	const handleGoHome = () => {
		navigate("/");
	};

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
					backgroundPosition: "center",
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
				}}
			>
				<Typography variant="h2" component="h1" sx={{ fontWeight: 400 }} gutterBottom>
					404
				</Typography>
				<Typography variant="h5" component="h2" gutterBottom>
					Page not found
				</Typography>
				<Typography variant="body1" sx={{ mb: 4 }}>
					The page you’re looking for doesn’t exist or has been moved.
				</Typography>
				<Button
					variant="contained"
					color="primary"
					onClick={handleGoHome}
				>
					Go back home
				</Button>
			</Container>
		</Box>
	);
}
