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

import { NavLink } from "react-router-dom";
import globalClasses from "../global.module.css";
import ImageWrapper from "../components/common/wrappers/image-wrapper/ImageWrapper.tsx";
import UserSettings from "../components/portfolio/modals/user-settings/UserSettings.tsx";
import { providePathRoot } from "../helpers/assetHelper.ts";
import {
	filterFeaturedProjects,
	filterNewArrivalProjects,
	filterProjects,
	getProjects,
} from "../helpers/projectHelper.ts";
import classes from "./styles/Portfolio.module.css";

const Portfolio = () => {
	const { loginModal } = useContext(AuthUserContext);
	const { locationPath } = useContext(LocationContext);
	const { favoriteProjects } = useContext(FavoritesContext);
	const { previewModal, setSelectedProject, selectedProject } = useContext(
		ProjectPreviewContext
	);

	const isFavoritesPage = locationPath === PATHS.Portfolio.Favorites;

	const [projects] = useState<Project[]>(getProjects());

	useEffect(() => {
		if (isFavoritesPage) {
			setSelectedProject(favoriteProjects[0]);
		}
	}, [favoriteProjects, isFavoritesPage, setSelectedProject]);

	const featuredProjects = filterFeaturedProjects(projects);
	const newArrivalProjects = filterNewArrivalProjects(projects);

	const sharedPortfolioContent = (
		<>
			<ProjectPreview ref={previewModal} project={selectedProject} />
			<HeroBanner />
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
					<>
						<div className={classes.sadPug}>
							<h1>FAVORITES</h1>
							<h3>no favorites to see here</h3>
							<ImageWrapper maxWidth={"25rem"}>
								<img
									className={classes.sadPugImage}
									src={providePathRoot(
										"images/defaults/quiter-pug-medium_pexels-charles-1851164.jpg"
									)}
									alt="A black pug stares sadly at you..."
								/>
							</ImageWrapper>
							<p>
								<i>
									You are greeted by a sad pug. His eyes stare desparingly into
									yours. He knows your sorrow. You lack a favorite project,
									which makes your sadness the extreme compared to his dismal
									existance. Quick! Make haste! Return to the projects page and
									rid yourself of this bleak, favorite-lacking reality!
								</i>
							</p>
							<NavLink
								to={PATHS.Portfolio.Root}
								className={({ isActive }) =>
									isActive
										? `${classes.active} ${globalClasses.iconContainer}`
										: globalClasses.iconContainer
								}
								end
							>
								<button>Return to Portfolio</button>
							</NavLink>
						</div>
					</>
					// TODO: Finish filling out this part with button to return to portfolio
				)}
				<ProjectPreview ref={undefined} project={selectedProject} />
			</>
		),
	};

	const mainContent = contentMap[locationPath] ?? <ErrorDefault />;

	return (
		<>
			<main className={classes.portfolio}>
				<LoginForm ref={loginModal} />
				<UserSettings />
				<SideNavigation />
				{mainContent}
			</main>
		</>
	);
};

export default Portfolio;
