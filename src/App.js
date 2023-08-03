import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Tech from "./Pages/Tech";
import Testimonial from "./Pages/Testimonial";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			// styles for the `body`
			body: {
				bg: "#2f3030",
				color: "white",
			},
		},
	},
});

function App() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="p-2 min-h-screen">
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/blog" element={<Blogs />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/project" element={<Projects />} />
						<Route path="/service" element={<Services />} />
						<Route path="/tech" element={<Tech />} />
						<Route path="/testimonial" element={<Testimonial />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</ChakraProvider>
		</div>
	);
}

export default App;
