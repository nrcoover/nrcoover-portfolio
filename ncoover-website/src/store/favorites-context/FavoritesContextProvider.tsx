import { useState } from "react";
import type { Project } from "../../components/portfolio/project-card/ProjectCard";
import { FavoritesContext } from "./FavoritesContext";

interface FavoritesContextProviderProps {
	children: React.ReactNode;
}

const FavoritesContextProvider = ({
	children,
}: FavoritesContextProviderProps) => {
	const [favoriteProjects, setFavoriteProjects] = useState<Project[]>([]);

	const favoriteProjectsIds = favoriteProjects
		.filter((p) => p.isFavorite)
		.map((p) => p.id);

	const addFavorite = (project: Project) => {
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
	};

	const removeFavorite = (id: number) => {
		setFavoriteProjects((favorites) =>
			favorites
				.map((favorite) =>
					favorite.id === id ? { ...favorite, isFavorite: false } : favorite
				)
				.filter((favorite) => favorite.id !== id)
		);
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
