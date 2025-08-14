import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/portfolio/carousel/Carousel";
import HeroBanner from "../components/portfolio/hero-banner/HeroBanner";
import ProjectPreview from "../components/portfolio/modals/project-preview/ProjectPreview";
import type { Project } from "../components/portfolio/project-card/ProjectCard";
import SideNavigation from "../components/side-navigation/SideNavigation";
import CATEGORIES_ARRAY from "../constants/projectCategories";
import DUMMY_PROJECTS_JSON from "../data/DUMMY_PROJECTS";
import { createProjectPath } from "../helpers/paths-helper";
import { ProjectPreviewContext } from "../store/project-preview-context/ProjectPreviewContext";

import LoginForm from "../components/portfolio/forms/login-form/LoginForm";
import { AuthUserContext } from "../store/auth-user-context/AuthUserContext";
import { FavoritesContext } from "../store/favorites-context/FavoritesContext";
import classes from "./styles/Portfolio.module.css";

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

	return [...primaryProjects, ...secondaryProjects];
};

const Portfolio = () => {
	const { loginModal } = useContext(AuthUserContext);
	const { previewModal, selectedProject } = useContext(ProjectPreviewContext);
	const { favoriteProjects } = useContext(FavoritesContext);

	const dummy_projects = JSON.parse(DUMMY_PROJECTS_JSON);
	const [projects] = useState<Project[]>(dummy_projects);

	return (
		<main className={classes.portfolio}>
			<ProjectPreview ref={previewModal} project={selectedProject} />
			<LoginForm ref={loginModal} />
			<SideNavigation />
			<HeroBanner />
			{favoriteProjects.length > 0 && (
				<Carousel title={"Favorites"} projects={favoriteProjects} />
			)}
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
