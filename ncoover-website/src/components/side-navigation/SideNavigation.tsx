import { NavLink } from "react-router-dom";
import { PATHS } from "../../constants/paths";

import { iconUi } from "../../constants/iconTypes";
import Icon from "../common/icon/Icon";
import classes from "./SideNavigation.module.css";
import globalClasses from "../../global.module.css";

const SideNavigation = () => {
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
