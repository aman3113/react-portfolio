import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="bg-gr bg-[#212222] p-[50px] flex flex-col gap-3 items-center absolute bottom-0 w-full">
			<div className="text-green-500 flex gap-2 items-center justify-center">
				<a href="www.linkedin.com/in/antilaman3113">
					<BsLinkedin />
				</a>
				<a href="https://twitter.com/AntilAman3113">
					<BsTwitter />
				</a>
				<a href="https://github.com/aman3113">
					<BsGithub />
				</a>
			</div>
			<p>No Copyright @2023</p>
		</footer>
	);
};

export default Footer;
