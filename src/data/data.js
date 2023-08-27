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
		url: "/project",
		text: "Projects",
	},
	{
		url: "/tech",
		text: "Tech",
	},
	{
		url: "/service",
		text: "Services",
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
		cover: "../publicImages/projects/books-tracker.png",
		name: "Brand",
		category: "React Js",
		title: "Books Tracker",
		githubLink: "https://github.com/aman3113/machine-coding-round-1",
		liveLink: "https://books-tracker-aman3113.vercel.app/",
	},
	{
		id: 2,
		cover: "../publicImages/projects/food-order.png",
		name: "Brand",
		category: "React Js",
		title: "Food Ordering Page",
		githubLink: "https://github.com/aman3113/machine-coding-round-6",
		liveLink: "https://restaurant-app-ten-silk.vercel.app/",
	},
	{
		id: 3,
		cover: "../publicImages/projects/todo.png",
		name: "Brand",
		category: "React Js",
		title: "Todo Sol",
		githubLink: "https://github.com/aman3113/todo-sol",
		liveLink: "https://todo-sol.vercel.app/",
	},
	{
		id: 4,
		cover: "../publicImages/projects/shopallure.png",
		name: "Brand",
		category: "Full Stack",
		title: "Shopallure-ecommerce",
		githubLink:
			"https://github.com/aman3113/ShopAllure-EStore/tree/main/shopallure",
		liveLink: "https://shopallure-ecommerce.vercel.app/",
	},
	{
		id: 5,
		cover: "../publicImages/projects/PawPalace.png",
		name: "Brand",
		category: "Full Stack",
		title: "Pawpalace-social media",
		githubLink: "https://github.com/aman3113/PAwPalace/tree/main/pawpalace",
		liveLink: "https://pawpalace.vercel.app/",
	},
	{
		id: 6,
		cover: "../publicImages/projects/IMDB.png",
		name: "Brand",
		category: "Full Stack",
		title: "Movie Watchlist",
		githubLink: "https://github.com/aman3113/machine-coding-round-11",
		liveLink: "https://movie-watchlist-jet-theta.vercel.app/",
	},
	{
		id: 7,
		cover: "../publicImages/projects/color-scheme-generator.png",
		name: "Brand",
		category: "Vanilla Js",
		title: "Color Scheme Generator",
		githubLink: "https://github.com/aman3113/Color-scheme-generator",
		liveLink: "https://color-scheme-generator-aman.netlify.app/",
	},
	{
		id: 8,
		cover: "../publicImages/projects/countries-api.png",
		name: "Brand",
		category: "Vanilla Js",
		title: "Find Countries",
		githubLink: "https://github.com/aman3113/Where-in-world-Rest-countries-Api",
		liveLink: "https://neighbouring-countries.vercel.app/",
	},
	{
		id: 9,
		cover: "../publicImages/projects/Movie Watchlist JS.png",
		name: "Brand",
		category: "Vanilla Js",
		title: "Movie Search",
		githubLink: "https://github.com/aman3113/Movie-Watchlist-IMDB-API",
		liveLink: "https://movie-watchlist-imdb-api.vercel.app/",
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
