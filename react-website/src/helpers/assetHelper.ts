export const providePathRoot = (path: string | undefined) => {
	if (path === undefined) {
		return;
	}
	return `${import.meta.env.BASE_URL}${path}`;
};
