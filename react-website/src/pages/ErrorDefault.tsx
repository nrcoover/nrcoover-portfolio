import SideNavigation from "../components/side-navigation/SideNavigation";
import { PATHS } from "../constants/paths";

import { NavLink } from "react-router-dom";
import ImageWrapper from "../components/common/wrappers/image-wrapper/ImageWrapper";
import { providePathRoot } from "../helpers/assetHelper";

import globalClasses from "../global.module.css";
import classes from "./styles/ErrorDefault.module.css";

const ErrorDefault = () => {
	return (
		<>
			<main className={`${classes.errorDefault} ${classes.error}`}>
				<SideNavigation />
				<h1>"DANGER, WILL ROBINSON!</h1>
				<h2>Uh oh! Looks like an error occurred!</h2>
				<ImageWrapper maxWidth={"40rem"}>
					<img
						className={classes.errorImage}
						src={providePathRoot("images/defaults/ai-image_cosmic-death.png")}
						alt="A black pug stares sadly at you..."
					/>
				</ImageWrapper>
				<p>
					Despite searching the vastness of the universe, the page you requested
					has been lost to oblivion!
				</p>
				<NavLink
					to={PATHS.Portfolio.Root}
					className={({ isActive }) =>
						isActive
							? `${classes.active} ${globalClasses.iconContainer}`
							: globalClasses.iconContainer
					}
					end
				>
					<button>Return to the known universe</button>
				</NavLink>
			</main>
		</>
	);
};

export default ErrorDefault;
