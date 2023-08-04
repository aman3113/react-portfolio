import webDesignAnimation from "../Images/web_design_animation.json";
import webResponsiveAnimation from "../Images/web_app_animation.json";
import webAppAnimation from "../Images/webAppDevelopment.json";
export const navlinkData = [
	{
		url: "/",
		text: "Home",
	},
	{
		url: "/about",
		text: "About",
	},
	{
		url: "/tech",
		text: "Tech",
	},
	{
		url: "/service",
		text: "Services",
	},
	{
		url: "/project",
		text: "Portfolio",
	},
	{
		url: "/testimonial",
		text: "Testimonials",
	},
	{
		url: "/blog",
		text: "Blog",
	},
	{
		url: "/contact",
		text: "Contact",
	},
];

export const techData = [
	{
		name: "HTML",
		src: "../publicImages/tech/html.png",
	},
	{
		name: "CSS",
		src: "./publicImages/tech/css.png",
	},
	{
		name: "JavaScript",
		src: "./publicImages/tech/js.png",
	},
	{
		name: "React",
		src: "./publicImages/tech/react.png",
	},
	{
		name: "Tailwind",
		src: "./publicImages/tech/tailwind.png",
	},
	{
		name: "Git",
		src: "/publicImages/tech/git.png",
	},
];

export const serviceData = [
	{
		id: 1,
		animation: webDesignAnimation,
		title: "Web Design",
		description:
			"Designing captivating user interfaces that impress the users with stunning visuals, intuitive navigation, responsive layouts and ease of use.",
	},
	{
		id: 2,
		animation: webAppAnimation,
		title: "Web App Development",
		description:
			"Turning ideas into innovative web solutions that drive results ensuring seamless functionality, scalability and user satisfaction.",
	},
	{
		id: 1,
		animation: webResponsiveAnimation,
		title: "Responsive Layouts",
		description:
			"Designing captivating user interfaces that impress the users with stunning visuals, intuitive navigation, responsive layouts and ease of use.",
	},
];
