import { createContext } from "react";

interface LocationContextProps {
	locationPath: string;
}

export const LocationContext = createContext<LocationContextProps>({
	locationPath: "",
});
