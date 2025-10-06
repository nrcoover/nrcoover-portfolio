import { PATHS } from "../constants/paths";

const sanitizePath = (path: string): string => {
	return path
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "") // remove invalid characters
		.replace(/\s+/g, "-") //-------- replace whitespace with hyphen
		.replace(/-+/g, "-") //--------- collapse multiple hyphens
		.replace(/^-+|-+$/g, ""); //---- trim hyphens from start/end
};

const navifyProjectName = (title: string): string => {
	return sanitizePath(title);
};

export const createProjectPath = (title: string): string => {
	return `${makePathAbsolute(PATHS.Portfolio.Root)}/${navifyProjectName(title)}`;
};

export const makePathAbsolute = (path: string): string => {
	return `/${sanitizePath(path)}`;
};

export const makePathRelative = (path: string): string => {
	return `${sanitizePath(path)}`;
};
