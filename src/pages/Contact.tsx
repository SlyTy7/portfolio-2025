import { Box, Typography, Link, TextField, Button, Paper } from "@mui/material";
import mapImage from "../assets/map.png";


export default function Contact() {
  return (
    <Box sx={{ mx: "auto", p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        Feel free to reach out to me via email or connect with me on LinkedIn.
      </Typography>

      <Typography variant="body1">
        Email: <Link href="mailto:tylerwest.dev@gmail.com" color="primary">tylerwest.dev@gmail.com</Link>
      </Typography>

      <Typography variant="body1" mb={4}>
        LinkedIn: <Link href="https://www.linkedin.com/in/tylerjwest/" target="_blank" rel="noopener" color="primary">linkedin.com/in/tylerjwest</Link>
      </Typography>

      <Typography variant="h6" gutterBottom>
        Or send me a quick message:
      </Typography>

      <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
        <Button variant="contained" color="primary" sx={{ alignSelf: "flex-start" }}>
          Send Message
        </Button>
      </Box>

      <Paper elevation={3} sx={{ height: 400, overflow: "hidden", borderRadius: 2 }}>
        <Box
          component="img"
          src={mapImage}
          alt="Map centered on San Francisco"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Paper>
    </Box>
  );
}
