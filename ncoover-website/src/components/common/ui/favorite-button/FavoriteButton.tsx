import { useContext } from "react";
import { iconUi } from "../../../../constants/iconTypes";
import { FavoritesContext } from "../../../../store/favorites-context/FavoritesContext";
import type { Project } from "../../../portfolio/project-card/ProjectCard";
import Icon from "../../icon/Icon";

import classes from "./FavoriteButton.module.css";

interface FavoriteButtonProps {
	project: Project | undefined;
	maxWidth?: string;
	maxHeight?: string;
	padding?: string;
}

const FavoriteButton = ({
	project,
	maxWidth = "3rem",
	maxHeight = maxWidth,
	padding = "0",
}: FavoriteButtonProps) => {
	const { favoriteProjectsIds, addFavorite, removeFavorite } =
		useContext(FavoritesContext);

	const sizingStyles = {
		maxHeight,
		maxWidth,
	};

	const isFavoriteProject =
		!!project && favoriteProjectsIds.includes(project.id);

	const handleAddFavorite = () => {
		if (!project) {
			return;
		}
		console.log(project.id);
		addFavorite(project);
	};

	const handleRemoveFavorite = () => {
		if (!project) {
			return;
		}
		console.log("Item removed");
		removeFavorite(project.id);
	};

	return (
		<div className={classes.favoriteButton}>
			<button
				type="button"
				onClick={isFavoriteProject ? handleRemoveFavorite : handleAddFavorite}
				disabled={!project}
				style={{ padding: padding }}
			>
				<Icon
					source={isFavoriteProject ? iconUi.Favorite : iconUi.FavoriteOutline}
					className={classes.link}
					style={sizingStyles}
				/>
			</button>
		</div>
	);
};

export default FavoriteButton;
