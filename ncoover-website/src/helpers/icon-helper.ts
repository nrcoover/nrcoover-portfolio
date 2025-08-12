export const getIconName = (icon: string) => {
	const indexOffset = 1;
	const stringArray = icon.split(".");
	const lastItem = stringArray.length - indexOffset;
	return stringArray[lastItem];
};
