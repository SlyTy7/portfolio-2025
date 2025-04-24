import {
	AppBar,
	Toolbar,
	Container,
	Avatar,
	IconButton,
	Tooltip,
	Button,
	Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import headshot from "../assets/tyler-west-headshot.jpg";

export default function Navbar() {
	return (
		<AppBar position="sticky" enableColorOnDark>
			<Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
				<Toolbar disableGutters={true}>
					<Box sx={{ flexGrow: 1 }}>
						<Tooltip title="Go Home">
							<IconButton
								component={RouterLink}
								to="/"
								sx={{ p: 0 }}
							>
								<Avatar alt="Tyler West" src={headshot} />
							</IconButton>
						</Tooltip>
					</Box>
					<Box sx={{}}>
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
						<Button
							color="inherit"
							component={RouterLink}
							to="/blog"
						>
							Blog
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
