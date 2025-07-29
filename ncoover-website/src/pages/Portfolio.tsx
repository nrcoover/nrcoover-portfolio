import { Link } from "react-router-dom";
import "./styles/Portfolio.module.css";

import HeroBanner from "../components/portfolio/hero-banner/HeroBanner";
import SideNavigation from "../components/side-navigation/SideNavigation";
import { createProjectPath } from "../helpers/paths-helper";
import Carousel from "../components/portfolio/carousel/Carousel";
import type { Project } from "../components/portfolio/project-card/ProjectCard";

// TODO: Extract to Constants folder
const CATEGORIES = {
	featured: "Featured",
	newArrivals: "New Arrivals",
	miniGames: "Mini Games",
	ai: "A. I.",
	react: "React",
	typeScript: "TypeScript",
	cSharp: "C#",
	javaScript: "Vanilla JavaScript",
	simpleWeb: "HTML & CSS",
};

const CATEGORIES_ARRAY = [
	CATEGORIES.featured,
	CATEGORIES.newArrivals,
	CATEGORIES.miniGames,
	CATEGORIES.ai,
	CATEGORIES.react,
	CATEGORIES.typeScript,
	CATEGORIES.cSharp,
	CATEGORIES.javaScript,
	CATEGORIES.simpleWeb,
];

// TODO: Replace with real data
// TODO: Real data will require a Category array as projects may belong to multiple categoreis.
const DUMMY_PROJECTS: Project[] = [
	{
		title: "Featured Project",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.featured],
	},
	{
		title: "New Arrival Project",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.newArrivals, CATEGORIES.featured],
	},
	{
		title: "Mini Game Project",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.miniGames, CATEGORIES.featured],
	},
	{
		title: "Featured Project 2",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.featured],
	},
	{
		title: "New Arrival Project 2",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.newArrivals, CATEGORIES.featured],
	},
	{
		title: "Mini Game Project 2",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.miniGames, CATEGORIES.featured],
	},
	{
		title: "Featured Project 3",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.featured],
	},
	{
		title: "New Arrival Project 3",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.newArrivals, CATEGORIES.featured],
	},
	{
		title: "Mini Game Project 3",
		coverArtPath:
			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
		description: "Testing this thing.",
		categories: [CATEGORIES.miniGames, CATEGORIES.featured],
	},
];

const filterProjects = (category: string): Project[] => {
	return DUMMY_PROJECTS.filter((project) => {
		return project.categories.includes(category);
	});
};

const Portfolio = () => {
	return (
		<main>
			<SideNavigation />
			<HeroBanner />
			{CATEGORIES_ARRAY &&
				CATEGORIES_ARRAY.map((category) => {
					const projects = filterProjects(category);
					if (projects.length > 0) {
						return <Carousel title={category} items={projects} />;
					}
				})}
			<div>
				<h2>Dummy Project</h2>
				<ul>
					{DUMMY_PROJECTS &&
						DUMMY_PROJECTS.map((project) => (
							<li key={project.title}>
								<Link to={createProjectPath(project.title)}>
									{project.title}
								</Link>
							</li>
						))}
				</ul>
			</div>
			<div>
				<h2>Genres</h2>
				<ol>
					<li>Featured</li>
					<li>New Arrivals</li>
					<li>Mini Games</li>
					<li>AI</li>
					<li>React</li>
					<li>TypeScript</li>
					<li>C#</li>
					<li>Vanilla JavaScript</li>
					<li>HTML & CSS</li>
				</ol>
			</div>
		</main>
	);
};

export default Portfolio;
