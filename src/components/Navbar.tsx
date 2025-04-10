// Placeholder pages and components (to be implemented):

// components/Navbar.jsx
// MUI AppBar with links to Home, Projects, About, Contact
import {
	AppBar,
	Toolbar,
	Container,
	Typography,
	Button,
	Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
	return (
		<AppBar position="static" enableColorOnDark>
			<Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
				<Toolbar disableGutters={true}>
					<Typography
						variant="h6"
						component={RouterLink}
						to="/"
						sx={{
							flexGrow: 1,
							textDecoration: "none",
							color: "inherit",
						}}
					>
						Tyler West
					</Typography>
					<Box>
						<Button
							color="inherit"
							component={RouterLink}
							to="/projects"
						>
							Projects
						</Button>
						<Button
							color="inherit"
							component={RouterLink}
							to="/about"
						>
							About
						</Button>
						<Button
							color="inherit"
							component={RouterLink}
							to="/contact"
						>
							Contact
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
