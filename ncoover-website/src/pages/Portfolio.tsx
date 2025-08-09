import { Link } from "react-router-dom";
import "./styles/Portfolio.module.css";

import { useContext, useState } from "react";
import Carousel from "../components/portfolio/carousel/Carousel";
import HeroBanner from "../components/portfolio/hero-banner/HeroBanner";
import ProjectPreview from "../components/portfolio/modals/project-preview/ProjectPreview";
import type { Project } from "../components/portfolio/project-card/ProjectCard";
import SideNavigation from "../components/side-navigation/SideNavigation";
import CATEGORIES_ARRAY from "../constants/projectCategories";
import DUMMY_PROJECTS_JSON from "../data/DUMMY_PROJECTS";
import { createProjectPath } from "../helpers/paths-helper";
import { ProjectPreviewContext } from "../store/project-preview-context/ProjectPreviewContext";

// TODO: Replace with real data
// TODO: Real data will require a Category array as projects may belong to multiple categoreis.
// const DUMMY_PROJECTS: Project[] = [
// 	{
// 		title: "Featured Project",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.featured],
// 	},
// 	{
// 		title: "New Arrival Project",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.newArrivals, CATEGORIES.featured],
// 	},
// 	{
// 		title: "Mini Game Project",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.miniGames, CATEGORIES.featured],
// 	},
// 	{
// 		title: "Featured Project 2",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.featured],
// 	},
// 	{
// 		title: "New Arrival Project 2",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.newArrivals, CATEGORIES.featured],
// 	},
// 	{
// 		title: "Mini Game Project 2",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.miniGames, CATEGORIES.featured],
// 	},
// 	{
// 		title: "Featured Project 3",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.featured],
// 	},
// 	{
// 		title: "New Arrival Project 3",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.newArrivals, CATEGORIES.featured],
// 	},
// 	{
// 		title: "Mini Game Project 3",
// 		coverArtPath:
// 			"./../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
// 		description: "Testing this thing.",
// 		categories: [CATEGORIES.miniGames, CATEGORIES.featured],
// 	},
// ];

const filterProjects = (category: string, projects: Project[]): Project[] => {
	const primaryProjects = projects
		.filter((project) => {
			const primaryTag = project.tagData.primaryTag;
			return primaryTag === category;
		})
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
		);

	const secondaryProjects = projects
		.filter((project) => {
			const primaryTag = project.tagData.primaryTag;
			const tags = project.tagData.otherTags;
			return tags.includes(category) && primaryTag !== category;
		})
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
		);

	console.log([...primaryProjects, ...secondaryProjects]);

	return [...primaryProjects, ...secondaryProjects];
};

const Portfolio = () => {
	const { previewModal } = useContext(ProjectPreviewContext);

	const dummy_projects = JSON.parse(DUMMY_PROJECTS_JSON);
	const [projects] = useState<Project[]>(dummy_projects);

	console.log();
	console.log(dummy_projects);

	return (
		<main>
			<ProjectPreview ref={previewModal} />
			<SideNavigation />
			<HeroBanner />
			{CATEGORIES_ARRAY &&
				CATEGORIES_ARRAY.map((category) => {
					const filteredProjects = filterProjects(category, projects);
					if (filteredProjects.length > 0) {
						return <Carousel title={category} projects={filteredProjects} />;
					}
				})}
			<div>
				<h2>Dummy Projects Debug List</h2>
				<ul>
					{projects &&
						projects.map((project) => (
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
