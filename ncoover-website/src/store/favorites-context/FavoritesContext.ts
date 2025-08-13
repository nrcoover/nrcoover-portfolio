import { createContext } from "react";
import type { Project } from "../../components/portfolio/project-card/ProjectCard.tsx";

interface FavoritesContextProps {
	favoriteProjects: Project[];
	favoriteProjectsIds: number[];
	addFavorite: (project: Project) => void;
	removeFavorite: (id: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
	favoriteProjects: [],
	favoriteProjectsIds: [],
	addFavorite: () => {},
	removeFavorite: () => {},
});
