import HeroComponent from "../Components/HeroComponent";
import About from "./About";
import Tech from "./Tech";

const Home = () => {
	return (
		<div>
			<HeroComponent />
			<About />
			<Tech />
		</div>
	);
};

export default Home;
