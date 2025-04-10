// components/Footer.jsx
// Simple Box with your name and social links
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Tyler West
      </Typography>
      <Box mt={1}>
        <Link href="https://github.com/SlyTy7" target="_blank" rel="noopener" color="inherit" sx={{ mx: 1 }}>
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/tylerjwest/" target="_blank" rel="noopener" color="inherit" sx={{ mx: 1 }}>
          LinkedIn
        </Link>
      </Box>
    </Box>
  );
}