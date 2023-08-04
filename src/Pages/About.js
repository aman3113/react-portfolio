import React from "react";
import profile from "../Images/profileimage.png";

const About = () => {
	return (
		<section className="min-h-[90vh] sm:flex items-center">
			<div className="sm:w-[50%]  py-[50px] p-6">
				<p
					className="text-xl text-green-500 md:text-3xl font-bold pb-4"
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
