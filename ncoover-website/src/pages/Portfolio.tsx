import { Link } from "react-router-dom";
import "./styles/Portfolio.module.css";

import HeroBanner from "../components/portfolio/hero-banner/HeroBanner";
import SideNavigation from "../components/side-navigation/SideNavigation";
import { createProjectPath } from "../helpers/paths-helper";

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

// TODO: Replace with real data
// TODO: Real data will require a Category array as projects may belong to multiple categoreis.
const DUMMY_PROJECTS = [
	{ id: 1, title: "Featured Project", category: CATEGORIES.featured },
	{ id: 2, title: "New Arrival Project", category: CATEGORIES.newArrivals },
	{ id: 3, title: "Mini Game Project", category: CATEGORIES.miniGames },
];

const Portfolio = () => {
	return (
		<main>
			<SideNavigation />
			<HeroBanner />

			<div>
				<h2>Dummy Project</h2>
				<ul>
					{DUMMY_PROJECTS &&
						DUMMY_PROJECTS.map((project) => (
							<li key={project.id}>
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
