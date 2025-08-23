import { useContext, useEffect, useState } from "react";
import type { Project } from "../../components/portfolio/project-card/ProjectCard";
import { AuthUserContext } from "../auth-user-context/AuthUserContext";
import { FavoritesContext } from "./FavoritesContext";

interface FavoritesContextProviderProps {
	children: React.ReactNode;
}

const FavoritesContextProvider = ({
	children,
}: FavoritesContextProviderProps) => {
	const { isLoggedIn, getUserFavoritesById, updateUserFavorites, user } =
		useContext(AuthUserContext);

	const [favoriteProjects, setFavoriteProjects] = useState<Project[]>([]);

	// Sync favorites when user logs in/out
	useEffect(() => {
		if (isLoggedIn) {
			setFavoriteProjects(getUserFavoritesById());
		} else {
			setFavoriteProjects([]);
		}
	}, [getUserFavoritesById, isLoggedIn, user]);

	const favoriteProjectsIds = favoriteProjects
		.filter((p) => p.isFavorite)
		.map((p) => p.id);

	const addFavorite = (project: Project) => {
		setFavoriteProjects((favorites) => {
			const exists = favorites.find((f) => f.id === project.id);
			const updated = exists
				? favorites.map((f) =>
						f.id === project.id ? { ...f, isFavorite: true } : f
					)
				: [{ ...project, isFavorite: true }, ...favorites];

			if (isLoggedIn) {
				updateUserFavorites(updated);
			}
			return updated;
		});
	};

	const removeFavorite = (id: number) => {
		setFavoriteProjects((favorites) => {
			const updated = favorites
				.map((f) => (f.id === id ? { ...f, isFavorite: false } : f))
				.filter((f) => f.id !== id);

			if (isLoggedIn) {
				updateUserFavorites(updated);
			}
			return updated;
		});
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
