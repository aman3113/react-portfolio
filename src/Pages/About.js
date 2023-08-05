import React from "react";
import profile from "../Images/profileimage.png";

const About = () => {
	return (
		<section className="min-h-[90vh] sm:flex items-center">
			<div className="sm:w-[50%]  py-[50px] p-6">
				<p
					className="text-3xl text-green-500 md:text-5xl font-bold text-center sm:text-right  py-[50px] sm:pt-0"
					data-aos="fade-down-right"
				>
					About Me
				</p>
				<p data-aos="fade-up-right" className="pl-3">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
					nesciunt aliquid voluptatum reiciendis adipisci optio quidem cum
					officiis ipsam laborum? Laborum dolorem minima sapiente ullam
					praesentium dolore repellat possimus minus? Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Enim voluptas possimus harum quam
					voluptatibus nulla sint sunt quibusdam, quas commodi quos tempora
					fugit eius accusantium quod ex magni qui? Suscipit.
				</p>
			</div>
			<div className="p-2 sm:w-[50%]">
				<img
					data-aos="fade-up"
					src={profile}
					alt=""
					className=" mx-auto w-[300px] md:w-[400px] max-w-[90vw]"
				/>
			</div>
		</section>
	);
};

export default About;
