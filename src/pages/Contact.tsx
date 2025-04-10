// pages/Contact.jsx
// Message about how to reach you
import { Box, Typography, Link } from "@mui/material";

export default function Contact() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Feel free to reach out to me via email or connect with me on LinkedIn.
      </Typography>
      <Typography variant="body1">
        Email: <Link href="mailto:tylerwest.dev@gmail.com" color="primary">tylerwest.dev@gmail.com</Link>
      </Typography>
      <Typography variant="body1">
        LinkedIn: <Link href="https://www.linkedin.com/in/tylerjwest/" target="_blank" rel="noopener" color="primary">linkedin.com/in/tylerjwest</Link>
      </Typography>
    </Box>
  );
}