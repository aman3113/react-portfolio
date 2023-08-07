import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="bg-gr bg-[#212222] p-[50px] flex flex-col gap-3 items-center  w-full">
			<div className="text-green-500 flex gap-5 items-center justify-center">
				<a
					href="www.linkedin.com/in/antilaman3113"
					className="hover:text-yellow-500 hover:scale-110"
				>
					<BsLinkedin size={25} />
				</a>
				<a
					href="https://twitter.com/AntilAman3113"
					className="hover:text-yellow-500 hover:scale-110"
				>
					<BsTwitter size={25} />
				</a>
				<a
					href="https://github.com/aman3113"
					className="hover:text-yellow-500 hover:scale-110"
				>
					<BsGithub size={25} />
				</a>
			</div>
			<p>No Copyright @2023</p>
		</footer>
	);
};

export default Footer;
