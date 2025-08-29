import { useContext, useEffect, useState, type JSX } from "react";
import Carousel from "../components/portfolio/carousel/Carousel";
import HeroBanner from "../components/portfolio/hero-banner/HeroBanner";
import ProjectPreview from "../components/portfolio/modals/project-preview/ProjectPreview";
import SideNavigation from "../components/side-navigation/SideNavigation";
import CATEGORIES_ARRAY, { CATEGORIES } from "../constants/projectCategories";
import { ProjectPreviewContext } from "../store/project-preview-context/ProjectPreviewContext";
import type { Project } from "../typings/index.d.ts";

import LoginForm from "../components/portfolio/forms/login-form/LoginForm";
import { PATHS } from "../constants/paths";
import { AuthUserContext } from "../store/auth-user-context/AuthUserContext";
import { FavoritesContext } from "../store/favorites-context/FavoritesContext";
import { LocationContext } from "../store/location-context/LocationContext";
import ErrorDefault from "./ErrorDefault";

import PROJECTS_JSON from "../data/projects";

import UserSettings from "../components/portfolio/modals/user-settings/UserSettings.tsx";
import {
	getCategoryForTag,
	getTagsForCategory,
} from "../helpers/tagMappingHelpers.ts";
import classes from "./styles/Portfolio.module.css";

const filterProjects = (category: string, projects: Project[]): Project[] => {
	const primaryProjects = projects
		.filter((project) => {
			const primaryTag = project.tagData.primaryTag;
			return getCategoryForTag(primaryTag) === category;
		})
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();

	const categoryTags = getTagsForCategory(category) ?? [];

	const secondaryProjects = projects
		.filter((project) => {
			const primaryTag = project.tagData.primaryTag;
			const otherTags = project.tagData.otherTags;

			// Only include projects where an "otherTag" belongs to this category
			// but the primaryTag is NOT part of this category
			return (
				otherTags.some((tag) => categoryTags.includes(tag)) &&
				getCategoryForTag(primaryTag) !== category
			);
		})
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();

	return [...primaryProjects, ...secondaryProjects];
};

const Portfolio = () => {
	const { loginModal } = useContext(AuthUserContext);
	const { locationPath } = useContext(LocationContext);
	const { favoriteProjects } = useContext(FavoritesContext);
	const { previewModal, setSelectedProject, selectedProject } = useContext(
		ProjectPreviewContext
	);

	const isFavoritesPage = locationPath === PATHS.Portfolio.Favorites;

	const projectsData = JSON.parse(PROJECTS_JSON);

	const [projects] = useState<Project[]>(projectsData);

	useEffect(() => {
		if (isFavoritesPage) {
			setSelectedProject(favoriteProjects[0]);
		}
	}, [favoriteProjects, isFavoritesPage, setSelectedProject]);

	const featuredProjects = projects
		.filter((project) => project.isFeatured)
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();

	const today = new Date();
	const timespanInDays = 1300; //TODO: adjust to reasonable number of days (1300 is not "new" lol)

	const pastDateSetup = new Date(today);
	pastDateSetup.setDate(pastDateSetup.getDate() - timespanInDays);

	const newArrivalCutOff: Date = pastDateSetup;
	const newArrivalProjects = projects
		.filter((project) => new Date(project.dateUpdated) > newArrivalCutOff)
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();

	const sharedPortfolioContent = (
		<>
			<ProjectPreview ref={previewModal} project={selectedProject} />
			<HeroBanner />
			<UserSettings />
			{favoriteProjects.length > 0 && (
				<Carousel title={CATEGORIES.favorites} projects={favoriteProjects} />
			)}
			{featuredProjects.length > 0 && (
				<Carousel title={CATEGORIES.featured} projects={featuredProjects} />
			)}
			{newArrivalProjects.length > 0 && (
				<Carousel
					title={CATEGORIES.newArrivals}
					projects={newArrivalProjects}
				/>
			)}
			{CATEGORIES_ARRAY &&
				CATEGORIES_ARRAY.map((category) => {
					const filteredProjects = filterProjects(category, projects);
					if (filteredProjects.length > 0) {
						return (
							<Carousel
								key={category}
								title={category}
								projects={filteredProjects}
							/>
						);
					}
				})}
		</>
	);

	const contentMap: Record<string, JSX.Element> = {
		[PATHS.Portfolio.Root]: sharedPortfolioContent,
		[PATHS.Portfolio.AlreadyHere]: sharedPortfolioContent,
		[PATHS.Portfolio.Favorites]: (
			<>
				{favoriteProjects.length > 0 ? (
					<Carousel title={"Favorites"} projects={favoriteProjects} />
				) : (
					<>no favorites to see here...</>
					// TODO: Finish filling out this part with button to return to portfolio
				)}
				<ProjectPreview ref={undefined} project={selectedProject} />
			</>
		),
	};

	const mainContent = contentMap[locationPath] ?? <ErrorDefault />;

	return (
		<>
			{locationPath.toString()}
			<main className={classes.portfolio}>
				<LoginForm ref={loginModal} />
				<SideNavigation />
				{mainContent}
			</main>
		</>
	);
};

export default Portfolio;
