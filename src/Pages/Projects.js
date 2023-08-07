import React, { useState } from "react";
import { projectsData } from "../data/data";

const Projects = () => {
	const [projectType, setProjectType] = useState("Full Stack");

	const projectArr = projectsData.filter(
		(item) => item.category === projectType
	);

	function handleProjectType(e) {
		setProjectType(e.target.textContent);
	}
	return (
		<section className="min-h-[90vh] p-4 pb-8 Project">
			<p
				className="text-3xl text-green-500 md:text-4xl font-bold text-center py-[40px]"
				data-aos="fade-down"
			>
				My Projects
			</p>
			<div
				className="flex gap-5 justify-center  flex-wrap mb-5"
				data-aos="fade-up"
			>
				<div
					onClick={handleProjectType}
					className={`px-5 py-2 rounded-3xl ${
						projectType === "Full Stack" &&
						"border-2 border-yellow-500 animate-bounce"
					} cursor-pointer text-sm sm:text-xl`}
				>
					Full Stack
				</div>
				<div
					onClick={handleProjectType}
					className={`px-5 py-2 rounded-3xl ${
						projectType === "React Js" &&
						"border-2 border-yellow-500 animate-bounce"
					} cursor-pointer text-sm sm:text-xl`}
				>
					React Js
				</div>
				<div
					onClick={handleProjectType}
					className={`px-5 py-2 rounded-3xl ${
						projectType === "Vanilla Js" &&
						"border-2 border-yellow-500 animate-bounce"
					} cursor-pointer text-sm sm:text-xl`}
				>
					Vanilla Js
				</div>
			</div>
			<div className="flex gap-6 flex-wrap justify-center">
				{projectArr.map((item) => (
					<div
						key={item.id}
						className="bg-[#212222] p-2 rounded-md shadow-md shadow-black w-[70%] max-w-[400px] md:max-w-[350px] relative group"
						data-aos="flip-right"
						data-aos-duration="1500"
					>
						<img src={item.cover} className="w-full" alt="" />
						<div className=" absolute top-0 bottom-0 left-0 right-0 bg-green-300 bg-opacity-70 opacity-0 text-black group-hover:opacity-100 transition ease-in duration-500 flex items-center justify-center">
							<div>
								<h3 className="font-bold text-xl">{item.title}</h3>
								<span className="font-semibold">{item.name}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
