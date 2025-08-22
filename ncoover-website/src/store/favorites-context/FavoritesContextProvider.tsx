import { useContext, useState } from "react";
import type { Project } from "../../components/portfolio/project-card/ProjectCard";
import { FavoritesContext } from "./FavoritesContext";
import { AuthUserContext } from "../auth-user-context/AuthUserContext";

interface FavoritesContextProviderProps {
	children: React.ReactNode;
}

const FavoritesContextProvider = ({
	children,
}: FavoritesContextProviderProps) => {
	const { isLoggedIn, getUserFavoritesById, updateUserFavorites } =
		useContext(AuthUserContext);
	const [favoriteProjects, setFavoriteProjects] = useState<Project[]>(
		isLoggedIn ? getUserFavoritesById() : []
	);

	const favoriteProjectsIds = favoriteProjects
		.filter((p) => p.isFavorite)
		.map((p) => p.id);

	const addFavorite = (project: Project) => {
		if (isLoggedIn) {
			const favorites = getUserFavoritesById();
			const newFavorites = [project, ...favorites];
			updateUserFavorites(newFavorites);
		} else {
			setFavoriteProjects((favorites) => {
				const exists = favorites.find((favorite) => favorite.id === project.id);
				if (exists) {
					return favorites.map((favorite) =>
						favorite.id === project.id
							? { ...favorite, isFavorite: true }
							: favorite
					);
				}
				return [...favorites, { ...project, isFavorite: true }];
			});
		}
	};

	const removeFavorite = (id: number) => {
		if (isLoggedIn) {
			const favorites = getUserFavoritesById();
			const newFavorites = [
				...favorites
					.map((favorite) =>
						favorite.id === id ? { ...favorite, isFavorite: false } : favorite
					)
					.filter((favorite) => favorite.id !== id),
			];
			updateUserFavorites(newFavorites);
		} else {
			setFavoriteProjects((favorites) =>
				favorites
					.map((favorite) =>
						favorite.id === id ? { ...favorite, isFavorite: false } : favorite
					)
					.filter((favorite) => favorite.id !== id)
			);
		}
	};

	const contextValue = {
		favoriteProjects,
		favoriteProjectsIds,
		addFavorite,
		removeFavorite,
	};

	return (
		<FavoritesContext.Provider value={contextValue}>
			{children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContextProvider;
