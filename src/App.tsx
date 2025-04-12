import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
	CssBaseline,
	Container,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#006157",
		},
		secondary: {
			main: "#651fff",
		},
		background: {
			default: "#121212",
		},
	},
});

export default function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/projects"
						element={
							<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
								<Projects />
							</Container>
						}
					/>
					<Route
						path="/about"
						element={
							<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
								<About />
							</Container>
						}
					/>
					<Route
						path="/contact"
						element={
							<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
								<Contact />
							</Container>
						}
					/>

					<Route path="*" element={<NotFound />} />

				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	);
}
