// components/Footer.jsx
// Simple Box with your name and social links
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary" sx={{ mp: 1 }}>
        © Copyright {new Date().getFullYear()}. All Rights Reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Built and designed by Tyler West.
      </Typography>
    </Box>
  );
}