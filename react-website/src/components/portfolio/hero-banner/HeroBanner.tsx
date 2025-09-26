import { useContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_PROJECT } from "../../../data/projects.ts";
import { providePathRoot } from "../../../helpers/assetHelper.ts";
import {
	filterFeaturedProjects,
	getProjects,
} from "../../../helpers/projectHelper";
import { ProjectPreviewContext } from "../../../store/project-preview-context/ProjectPreviewContext.ts";
import type { Project } from "../../../typings";
import AiNotice from "../../common/ai-notice/AiNotice.tsx";
import PreviewButton from "../../common/ui/preview-button/PreviewButton.tsx";
import classes from "./HeroBanner.module.css";

const HeroBanner = () => {
	const { isModalOpen, setSelectedProject, openPreviewModal } = useContext(
		ProjectPreviewContext
	);

	const [fadeState, setFadeState] = useState<"in" | "out">("in");

	const [activeDisplayIndex, setActiveDisplayIndex] = useState<number>(0);

	const defaultProject: Project = DEFAULT_PROJECT;

	const featuredProjects = useMemo(() => {
		return filterFeaturedProjects(getProjects());
	}, []);

	const heroProjects = useMemo(() => {
		const featureBanners = featuredProjects.filter(
			(p) => p.heroFeatureData !== undefined
		);
		return [defaultProject, ...featureBanners];
	}, [defaultProject, featuredProjects]);

	const display =
		heroProjects.length > 0 ? heroProjects[activeDisplayIndex] : defaultProject;

	const handlePreviewClick = () => {
		setSelectedProject(display);
		console.log(display);
		openPreviewModal();
	};

	useEffect(() => {
		const numberOfFeatures = heroProjects?.length ?? 0;
		if (numberOfFeatures <= 1) return;

		const fadeOutTimer = setTimeout(() => {
			setFadeState("out");

			setTimeout(() => {
				setActiveDisplayIndex((prev) => (prev + 1) % numberOfFeatures);
				setFadeState("in");
			}, 1000);
		}, 7000);

		return () => clearTimeout(fadeOutTimer);
	}, [activeDisplayIndex, heroProjects?.length]);

	const fadeClasses = `${classes.projectContent} ${
		fadeState === "in" ? classes.fadeIn : classes.fadeOut
	}`;

	return (
		<section aria-label="Featured project">
			<div className={`${classes.hero} ${fadeClasses}`}>
				<div className={`${classes.heroItem} ${classes.textWrapper}`}>
					<h1 className={classes.devFlix}>
						DEV<span>FLIX</span>
					</h1>
					<h2>{display.heroFeatureData?.shortTitle}</h2>
					<i>
						<p>{display.heroFeatureData?.shortDescription}</p>
					</i>
					<PreviewButton
						selected={true}
						handlePreviewClick={handlePreviewClick}
						isModalOpen={isModalOpen}
					/>
				</div>
				<div className={`${classes.heroItem} ${classes.heroImage}`}>
					<div className={classes.heroImageWrapper}>
						<img
							src={providePathRoot(display.heroFeatureData?.banner.src)}
							alt={display.heroFeatureData?.banner.alt}
						/>
						<div className={classes.aiNoticeWrapper}>
							<AiNotice
								showNotice={display.heroFeatureData?.isAiGeneratedImage ?? true}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
