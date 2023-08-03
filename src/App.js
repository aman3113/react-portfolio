import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return <div className="font-bold text-center">Hii Aman</div>;
}

export default App;
