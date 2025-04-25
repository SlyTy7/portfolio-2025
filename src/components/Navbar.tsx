import {
	AppBar,
	Toolbar,
	Container,
	Avatar,
	IconButton,
	Tooltip,
	Button,
	Box,
	useTheme,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import headshot from "../assets/tyler-west-headshot.jpg";

const pages = [
	{ label: "Projects", to: "/projects" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
	{ label: "Blog", to: "/blog" },
];

export default function Navbar() {
	const theme = useTheme();
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<AppBar position="sticky" enableColorOnDark>
			<Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
				<Toolbar disableGutters sx={{ minHeight: "72px" }}>
					{/* Logo / Home Button */}
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

					{/* Desktop Nav */}
					<Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
						{pages.map((page) => (
							<Button
								key={page.to}
								color="inherit"
								component={RouterLink}
								to={page.to}
							>
								{page.label}
							</Button>
						))}
					</Box>

					{/* Mobile Nav */}
					<Box sx={{ display: { xs: "flex", sm: "none" } }}>
						<IconButton
							size="large"
							aria-label="open drawer"
							onClick={toggleDrawer}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor="top"
							open={drawerOpen}
							onClose={toggleDrawer}
							sx={{ zIndex: 1000 }}
							slotProps={{
								paper: {
									sx: {
										mt: "85px",
										width: "100%",
										backgroundColor: theme.palette.background.default,
									},
								}
							}}
						>
							<List>
								{pages.map((page) => (
									<ListItem key={page.to} disablePadding>
										<ListItemButton
											component={RouterLink}
											to={page.to}
											onClick={toggleDrawer}
										>
											<ListItemText primary={page.label} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</Drawer>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
