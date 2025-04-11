import {
	Box,
	Typography,
	TextField,
	Button,
	Paper,
	IconButton,
	Tooltip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import mapImage from "../assets/map.png";

export default function Contact() {
	return (
		<Box>
			<Box
				sx={{
					gap: 2,
					mb: 2,
				}}
			>
				<Typography variant="h4" gutterBottom>
					Contact
				</Typography>

				<Typography
					variant="body1"
					color="text.secondary"
					sx={{ mb: 2 }}
				>
					Thanks for stopping by! If you're interested in working
					together, want to chat about frontend development, or just
					want to say hi, I'd love to hear from you. I'm currently
					open to new opportunities and collaborations—especially
					those focused on clean UI, delightful UX, and
					performance-first builds.
				</Typography>

				<Typography
					variant="body1"
					color="text.secondary"
					sx={{ mb: 2 }}
				>
					Feel free to use the form below or reach out through any of
					the links here. I'm most active on GitHub and LinkedIn, but
					I also respond to good old-fashioned email. My résumé is
					always up to date as well.
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 2,
					mb: 8,
				}}
			>
				<Tooltip title="Send an Email">
					<Button
						startIcon={<EmailIcon />}
						variant="outlined"
						color="primary"
						component="a"
						href="mailto:tylerwest.dev@gmail.com"
					>
						Email
					</Button>
				</Tooltip>

				<Tooltip title="GitHub Profile">
					<Button
						startIcon={<GitHubIcon />}
						variant="outlined"
						color="primary"
						component="a"
						href="https://github.com/SlyTy7"
						target="_blank"
						rel="noopener"
					>
						GitHub
					</Button>
				</Tooltip>

				<Tooltip title="LinkedIn Profile">
					<Button
						startIcon={<LinkedInIcon />}
						variant="outlined"
						color="primary"
						component="a"
						href="https://www.linkedin.com/in/tylerjwest/"
						target="_blank"
						rel="noopener"
					>
						LinkedIn
					</Button>
				</Tooltip>

				<Tooltip title="View Résumé">
					<Button
						startIcon={<DescriptionIcon />}
						variant="outlined"
						color="primary"
						component="a"
						href="/tyler-west-resume.pdf"
						target="_blank"
						rel="noopener"
					>
						Resume
					</Button>
				</Tooltip>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: {
						xs: "column",
						md: "row",
					},
					gap: 4,
					mb: 4,
				}}
			>
				<Box
					component="form"
					noValidate
					autoComplete="off"
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						flex: 1,
					}}
				>
					<TextField label="Name" variant="outlined" fullWidth />
					<TextField label="Email" variant="outlined" fullWidth />
					<TextField
						label="Message"
						variant="outlined"
						multiline
						rows={4}
						fullWidth
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ alignSelf: "flex-start" }}
					>
						Send Message
					</Button>
				</Box>

				<Paper
					elevation={3}
					sx={{
						height: { xs: 300, sm: 400 },
						overflow: "hidden",
						borderRadius: 2,
						flex: 1,
					}}
				>
					<Box
						component="img"
						src={mapImage}
						alt="Map centered on San Francisco"
						sx={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</Paper>
			</Box>
		</Box>
	);
}
