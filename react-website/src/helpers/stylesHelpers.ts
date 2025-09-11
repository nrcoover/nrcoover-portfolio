import {
	absoluteLocation,
	type AbsoluteLocationKey,
} from "../constants/styles";

export const getAbsoluteStyles = (absoluteLocations: AbsoluteLocationKey[]) => {
	return absoluteLocations.reduce((acc, key) => {
		return { ...acc, ...absoluteLocation[key] };
	}, {});
};
