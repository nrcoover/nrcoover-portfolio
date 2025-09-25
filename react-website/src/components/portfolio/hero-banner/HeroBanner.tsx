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

	const [activeDisplayIndex, setActiveDisplayIndex] = useState<number>(0);

	const featuredProjects = useMemo(() => {
		return filterFeaturedProjects(getProjects());
	}, []);

	const heroProjects = useMemo(
		() => featuredProjects.filter((p) => p.heroFeatureData !== undefined),
		[featuredProjects]
	);

	console.log("HeroProjects:");
	console.log(heroProjects);

	const defaultProject: Project = DEFAULT_PROJECT;
	const display =
		heroProjects.length > 0 ? heroProjects[activeDisplayIndex] : defaultProject;

	const handlePreviewClick = () => {
		setSelectedProject(display);
		console.log(display);
		openPreviewModal();
	};

	useEffect(() => {
		const numberOfFeatures = heroProjects?.length ?? 0;

		if (numberOfFeatures > 1) {
			const timerId = setTimeout(() => {
				const newIndex = (activeDisplayIndex + 1) % numberOfFeatures;
				setActiveDisplayIndex(newIndex);
			}, 3000);

			return () => {
				clearTimeout(timerId);
			};
		}
	}, [activeDisplayIndex, heroProjects?.length]);

	const defaultContent = (
		<>
			<div className={`${classes.heroItem} ${classes.textWrapper}`}>
				<h1>
					DEV<span>FLIX</span>
				</h1>
				<h2>{defaultProject.heroFeatureData?.shortTitle}</h2>
				<i>
					<p>{defaultProject.heroFeatureData?.shortDescription}</p>
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
						src={providePathRoot(defaultProject.heroFeatureData?.banner.src)}
						alt={defaultProject.heroFeatureData?.banner.alt}
					/>
					<div className={classes.aiNoticeWrapper}>
						<AiNotice
							showNotice={display.heroFeatureData?.isAiGeneratedImage ?? true}
						/>
					</div>
				</div>
			</div>
		</>
	);

	return (
		<section aria-label="Featured project" className={classes.hero}>
			{heroProjects?.length != 0 && display !== undefined ? (
				<>
					<div className={`${classes.heroItem} ${classes.textWrapper}`}>
						<h1>
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
									showNotice={
										display.heroFeatureData?.isAiGeneratedImage ?? true
									}
								/>
							</div>
						</div>
					</div>
				</>
			) : (
				<>{defaultContent}</>
			)}
		</section>
	);
};

export default HeroBanner;
