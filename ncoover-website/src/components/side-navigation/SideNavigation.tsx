import { NavLink, useLocation } from "react-router-dom";
import { PATHS } from "../../constants/paths";

import { useContext, useEffect, useState } from "react";
import { iconUi } from "../../constants/iconTypes";
import globalClasses from "../../global.module.css";
import { AuthUserContext } from "../../store/auth-user-context/AuthUserContext";
import Icon from "../common/icon/Icon";
import classes from "./SideNavigation.module.css";

const SideNavigation = () => {
	const location = useLocation();
	const [currentPath, setCurrentPath] = useState("");
	const { isLoggedIn, openLoginModal } = useContext(AuthUserContext);

	const handleOpenLoginFormModal = () => {
		openLoginModal();
	};

	// TODO: Move this logic to a context?
	useEffect(() => {
		setCurrentPath(location.pathname);
	}, [location.pathname]);

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
								currentPath === PATHS.Portfolio.Root
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
				<div className={classes.separator}></div>
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
							{isTrue && <>Profile</>}
						</li>
					) : (
						<li className={globalClasses.iconContainer}>
							<button
								onClick={handleOpenLoginFormModal}
								className={"iconButton"}
							>
								<Icon source={iconUi.Login} />
							</button>
							{isTrue && <>Login</>}
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
						<NavLink
							to={PATHS.Home}
							className={({ isActive }) =>
								isActive
									? (classes.active, globalClasses.iconContainer)
									: globalClasses.iconContainer
							}
							end
						>
							<Icon source={iconUi.Settings} />
							{isTrue && <>settings</>}
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SideNavigation;
