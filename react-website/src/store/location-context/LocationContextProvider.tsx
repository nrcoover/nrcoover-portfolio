import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LocationContext } from "./LocationContext";

interface LocationContextProviderProps {
	children: React.ReactNode;
}

const LocationContextProvider = ({
	children,
}: LocationContextProviderProps) => {
	const location = useLocation();
	const [locationPath, setLocationPath] = useState("");

	useEffect(() => {
		setLocationPath(location.pathname);
	}, [location.pathname]);

	const contextValue = {
		locationPath,
	};

	return (
		<LocationContext.Provider value={contextValue}>
			{children}
		</LocationContext.Provider>
	);
};

export default LocationContextProvider;
