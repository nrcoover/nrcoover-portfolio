const createPath = (root: string, subpath?: string) => {
	if (subpath === undefined) {
		return `${root}`;
	}
	return `${root}/${subpath}`;
};

const ROOTS = {
	HOME: "/",
	PORTFOLIO: "portfolio",
	ABOUT_ME: "about-me",
	CONTACT: "contact",
};

export const PATHS = {
	Home: "/",
	Portfolio: {
		Root: createPath(ROOTS.PORTFOLIO),
		ProjectOne: createPath(ROOTS.PORTFOLIO, "ProjectOne"),
	},
	AboutMe: ROOTS.ABOUT_ME,
	Contact: ROOTS.CONTACT,
} as const;

export type PathKeys = typeof PATHS;
