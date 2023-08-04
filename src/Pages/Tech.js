import React from "react";
import { techData } from "../data/data";

const Tech = () => {
	return (
		<section className="min-h-[90vh] flex flex-col items-center Tech">
			<p
				className="text-2xl sm:text-3xl text-green-500 md:text-4xl font-bold  py-[50px]"
				data-aos="fade-down-right"
			>
				Tools and Technologies
			</p>
			<div className="flex flex-wrap gap-8 p-4 justify-center md:w-[70%]">
				{techData.map((item, idx) => (
					<div
						key={idx}
						className=" flex flex-col justify-between bg-[#212222] p-4 w-[150px] lg:w-[180px] rounded-lg pt-5 pb-2 shadow-md shadow-black"
					>
						<img className="w-full" src={item.src} alt="" />
						<p className="text-lg font-bold text-center p-4">{item.name}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Tech;
