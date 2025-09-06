import { createContext } from "react";
import type { Project } from "../../typings/index.d";

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
