import HeroComponent from "../Components/HeroComponent";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Projects from "./Projects";
import Services from "./Services";
import Tech from "./Tech";

const Home = () => {
	return (
		<div>
			<HeroComponent />
			<About />
			<Tech />
			<Services />
			<Projects />
			<Blogs />
			<Contact />
		</div>
	);
};

export default Home;
