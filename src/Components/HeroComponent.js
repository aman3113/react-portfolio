import React from "react";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import animationData from "../Images/home-lottie.json";

const HeroComponent = () => {
	return (
		<section className="min-h-[90vh] Home">
			<div className="md:flex-row flex flex-col-reverse w-full min-h-[90vh] items-center">
				<div className="md:w-[50%]">
					<Lottie
						data-aos="fade-left"
						className="mx-auto"
						animationData={JSON.parse(JSON.stringify(animationData))}
						style={{ width: "80%", maxWidth: "400px" }}
					/>
				</div>
				<div className="md:w-[50%] flex flex-col gap-4 items-center py-[50px] px-2 md:items-start">
					<p
						className="text-xl md:text-2xl font-bold"
						data-aos="fade-down-right"
					>
						HELLO I'M
					</p>
					<h1
						className="text-green-500 text-3xl sm:text-5xl md:text-7xl font-bold"
						data-aos="fade-right"
					>
						<Typewriter
							options={{
								strings: ["AMAN ANTIL", "WEB DEVELOPER", "UI/UX DESIGNER"],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>
					<p
						className="text-sm text-center md:text-base md:text-left"
						data-aos="fade-up-right"
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
						maxime rerum odit provident sit omnis delectus reiciendis, excepturi
						assumenda modi sequi, quos rem sint esse enim? Nesciunt ex eius
						incidunt.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroComponent;
