import { iconDev, type IconSource } from "../constants/iconTypes";
import { CATEGORY_TAGS_MAP } from "../utility/mapping/tagCategoryMapping";

// tags are lowercased, so attributes should be too
export const tagToIconMap: Record<string, IconSource> = {
	bootstrap: iconDev.Bootstrap,
	csharp: iconDev.CSharp,
	css: iconDev.Css,
	html: iconDev.Html,
	html5: iconDev.Html5,
	javascript: iconDev.JavaScript,
	pythong: iconDev.Python,
	react: iconDev.React,
	sass: iconDev.Sass,
	scss: iconDev.Scss,
	typescript: iconDev.TypeScript,
};

export function getCategoryForTag(tag: string): string | null {
	for (const [category, tags] of Object.entries(CATEGORY_TAGS_MAP)) {
		if (tags.includes(tag)) {
			return category;
		}
	}
	return null;
}
