import HeroComponent from "../Components/HeroComponent";
import About from "./About";
import Services from "./Services";
import Tech from "./Tech";

const Home = () => {
	return (
		<div>
			<HeroComponent />
			<About />
			<Tech />
			<Services />
		</div>
	);
};

export default Home;
