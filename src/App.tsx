import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Container, Paper, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00897b',
    },
    secondary: {
      main: '#651fff',
    },
    background: {
      default: '#121212',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Paper elevation={8}>
          <Navbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
          <Footer />
        </Paper>
      </Router>
    </ThemeProvider>
  );
}





