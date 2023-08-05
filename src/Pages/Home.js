import HeroComponent from "../Components/HeroComponent";
import About from "./About";
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
		</div>
	);
};

export default Home;
