import React from "react";
import profile from "../Images/profileimage.png";

const About = () => {
	return (
		<section className="min-h-[90vh] sm:flex items-center">
			<div className="sm:w-[50%]  py-[50px] p-6">
				<p
					className="text-2xl sm:text-3xl text-green-500 md:text-4xl font-bold  py-[50px]"
					data-aos="fade-down-right"
				>
					About Me
				</p>
				<p data-aos="fade-up-right">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
					nesciunt aliquid voluptatum reiciendis adipisci optio quidem cum
					officiis ipsam laborum? Laborum dolorem minima sapiente ullam
					praesentium dolore repellat possimus minus?
				</p>
			</div>
			<div className="p-2 sm:w-[50%]">
				<img
					data-aos="fade-left"
					src={profile}
					alt=""
					className=" mx-auto w-[300px] md:w-[400px] max-w-[90vw]"
				/>
			</div>
		</section>
	);
};

export default About;
