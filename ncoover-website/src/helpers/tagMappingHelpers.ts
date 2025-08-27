import { iconDev, iconUi, type IconSource } from "../constants/iconTypes";
import { CATEGORY_TAGS_MAP } from "../utility/mapping/tagCategoryMapping";

export const tagToIconMap: Record<string, IconSource> = {
	React: iconDev.React,
	Favorite: iconUi.Favorite,
	Home: iconUi.Home,
};

export function getCategoryForTag(tag: string): string | null {
	for (const [category, tags] of Object.entries(CATEGORY_TAGS_MAP)) {
		if (tags.includes(tag)) {
			return category;
		}
	}
	return null;
}
