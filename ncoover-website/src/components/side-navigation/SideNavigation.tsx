import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/paths";

import { useContext } from "react";
import { iconUi } from "../../constants/iconTypes";
import globalClasses from "../../global.module.css";
import { AuthUserContext } from "../../store/auth-user-context/AuthUserContext";
import { LocationContext } from "../../store/location-context/LocationContext";
import { SettingsContext } from "../../store/settings-context/SettingsContext";
import Icon from "../common/icon/Icon";
import Separator from "../common/separator/Separator";
import classes from "./SideNavigation.module.css";

const SideNavigation = () => {
	const { locationPath } = useContext(LocationContext);
	const { isLoggedIn, openLoginModal } = useContext(AuthUserContext);
	const { openSettingsModal } = useContext(SettingsContext);

	const handleOpenLoginFormModal = () => {
		openLoginModal();
	};

	const handleOpenSettingsModal = () => {
		openSettingsModal();
	};

	const isTrue = true;

	return (
		<div className={classes.navigationWrapper}>
			<nav className={classes.sideNavigation}>
				<ul className={classes.list}>
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Home}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						>
							<Icon source={iconUi.Home} />
							{isTrue && <>home</>}
						</NavLink>
					</li>
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={
								locationPath === PATHS.Portfolio.Root
									? PATHS.Portfolio.AlreadyHere
									: PATHS.Portfolio.Root
							}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						>
							<Icon source={iconUi.Folder} />
							{isTrue && <>portfolio</>}
						</NavLink>
					</li>
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.AboutMe}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						>
							<Icon source={iconUi.Info} />
							{isTrue && <>about me</>}
						</NavLink>
					</li>
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Contact}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						>
							<Icon source={iconUi.Contact} />
							{isTrue && <>contact</>}
						</NavLink>
					</li>
				</ul>
				<Separator width={"60%"} margin={"4rem"} />
				<ul className={classes.list}>
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Home}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						>
							<Icon source={iconUi.Search} />
							{isTrue && <>search</>}
						</NavLink>
					</li>
					{isLoggedIn ? (
						<li className={globalClasses.iconContainer}>
							<button
								onClick={handleOpenLoginFormModal}
								className={"iconButton"}
							>
								<Icon source={iconUi.ProfileCircle} />
							</button>
							{isTrue && <>profile</>}
						</li>
					) : (
						<li className={globalClasses.iconContainer}>
							<button
								onClick={handleOpenLoginFormModal}
								className={"iconButton"}
							>
								<Icon source={iconUi.Login} />
							</button>
							{isTrue && <>login</>}
						</li>
					)}
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Home}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						>
							<Icon source={iconUi.LightMode} />
							{isTrue && <>light mode</>}
						</NavLink>
					</li>
					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Portfolio.Favorites}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						>
							<Icon source={iconUi.Favorite} />
							{isTrue && <>favorites</>}
						</NavLink>
					</li>

					<li className={globalClasses.iconContainer}>
						<button onClick={handleOpenSettingsModal} className={"iconButton"}>
							<Icon source={iconUi.Settings} />
						</button>
						{isTrue && <>settings</>}
					</li>

					<li className={globalClasses.iconContainer}>
						<NavLink
							to={PATHS.Home}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						></NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SideNavigation;
