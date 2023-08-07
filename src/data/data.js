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
		text: "Projects",
	},
	// {
	// 	url: "/testimonial",
	// 	text: "Testimonials",
	// },
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
			"Designing captivating user interfaces that impress the users with stunning visuals, intuitive navigation and ease of use.",
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
			"One stop for all your devices. Code that handles mobile devices to tablets to your laptop and monitor screens.",
	},
];

export const projectsData = [
	{
		id: 1,
		cover: "../publicImages/port/port1.jpg",
		name: "Brand",
		category: "Full Stack",
		title: "Brex Logo",
	},
	{
		id: 2,
		cover: "../publicImages/port/port2.jpg",
		name: "Brand",
		category: "React Js",
		title: "Brex Logo",
	},
	{
		id: 3,
		cover: "../publicImages/port/port3.jpg",
		name: "Brand",
		category: "Vanilla Js",
		title: "Brex Logo",
	},
	{
		id: 4,
		cover: "../publicImages/port/port4.jpg",
		name: "Brand",
		category: "React Js",
		title: "Brex Logo",
	},
	{
		id: 5,
		cover: "../publicImages/port/port5.jpg",
		name: "Brand",
		category: "Full Stack",
		title: "Brex Logo",
	},
	{
		id: 6,
		cover: "../publicImages/port/port6.jpg",
		name: "Brand",
		category: "Vanilla Js",
		title: "Brex Logo",
	},
	{
		id: 7,
		cover: "../publicImages/port/port6.jpg",
		name: "Brand",
		category: "React Js",
		title: "Brex Logo",
	},
	{
		id: 8,
		cover: "../publicImages/port/port6.jpg",
		name: "Brand",
		category: "Vanilla Js",
		title: "Brex Logo",
	},
	{
		id: 9,
		cover: "../publicImages/port/port6.jpg",
		name: "Brand",
		category: "Full Stack",
		title: "Brex Logo",
	},
];

export const blogData = [
	{
		id: 1,
		title: "Master These Awesome",
		date: "Jun 27, 2022",
		author: "Dorian Gray",
		desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
		cover: "./publicImages/blog/b1.png",
	},
	{
		id: 2,
		title: "Best Design Items to Appeal",
		date: "Jun 27, 2022",
		author: "Dorian Gray",
		desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
		cover: "../publicImages/blog/b2.png",
	},
	{
		id: 3,
		title: "The 20 Best Lightroom Presets",
		date: "Jun 27, 2022",
		author: "Dorian Gray",
		desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
		cover: "../publicImages/blog/b3.png",
	},
];
