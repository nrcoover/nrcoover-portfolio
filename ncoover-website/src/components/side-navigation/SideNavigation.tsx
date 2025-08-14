import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/paths";

import { useContext } from "react";
import { iconUi } from "../../constants/iconTypes";
import globalClasses from "../../global.module.css";
import { AuthUserContext } from "../../store/auth-user-context/AuthUserContext";
import Icon from "../common/icon/Icon";
import classes from "./SideNavigation.module.css";

const SideNavigation = () => {
	const { isGuest, openLoginModal } = useContext(AuthUserContext);

	const handleOpenLoginFormModal = () => {
		openLoginModal();
	};

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
							<Icon source={iconUi.Search} />
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
							<Icon source={iconUi.Home} />
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
							<Icon source={iconUi.Favorite} />
						</NavLink>
					</li>
					{isGuest ? (
						<li className={globalClasses.iconContainer}>
							<div className={globalClasses.iconContainer}>
								<button
									onClick={handleOpenLoginFormModal}
									className={"iconButton"}
								>
									<Icon source={iconUi.Login} />
								</button>
							</div>
						</li>
					) : (
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
								<Icon source={iconUi.Profile} />
							</NavLink>
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
							<Icon source={iconUi.Settings} />
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default SideNavigation;
