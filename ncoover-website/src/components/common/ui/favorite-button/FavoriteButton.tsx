import { useContext } from "react";
import { iconUi } from "../../../../constants/iconTypes";
import { FavoritesContext } from "../../../../store/favorites-context/FavoritesContext";
import type { Project } from "../../../../typings/index.d.ts";
import Icon from "../../icon/Icon";

import type { AbsoluteLocationKey } from "../../../../constants/styles.ts";
import classes from "./FavoriteButton.module.css";
import { getAbsoluteStyles } from "../../../../helpers/stylesHelpers.ts";

interface FavoriteButtonProps {
	project: Project | undefined;
	maxWidth?: string;
	maxHeight?: string;
	absoluteLocations?: AbsoluteLocationKey[];
	margin?: string;
}

const FavoriteButton = ({
	project,
	maxWidth = "3rem",
	maxHeight = maxWidth,
	absoluteLocations = [],
	margin = "0",
}: FavoriteButtonProps) => {
	const { favoriteProjectsIds, addFavorite, removeFavorite } =
		useContext(FavoritesContext);

	const absoluteStyles = getAbsoluteStyles(absoluteLocations);

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
		addFavorite(project);
	};

	const handleRemoveFavorite = () => {
		if (!project) {
			return;
		}
		removeFavorite(project.id);
	};

	return (
		<div className={classes.favoriteButton} style={{ ...absoluteStyles }}>
			<button
				type="button"
				onClick={isFavoriteProject ? handleRemoveFavorite : handleAddFavorite}
				disabled={!project}
				style={{ margin: margin }}
			>
				<Icon
					source={isFavoriteProject ? iconUi.Favorite : iconUi.FavoriteOutline}
					className={classes.link}
					style={{ ...sizingStyles }}
				/>
			</button>
		</div>
	);
};

export default FavoriteButton;
