import PROJECTS_JSON from "../data/projects";
import type { Project } from "../typings";
import { getCategoryForTag, getTagsForCategory } from "./tagMappingHelpers";

// TODO: Convert to custom React Hook
export const getProjects = () => {
	const projectsData = JSON.parse(PROJECTS_JSON);
	return projectsData;
};

export const filterProjects = (
	category: string,
	projects: Project[]
): Project[] => {
	const primaryProjects = projects
		.filter((project) => {
			const primaryTag = project.tagData.primaryTag;
			return (
				getCategoryForTag(primaryTag) === category && !project.isDefaultData
			);
		})
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();

	const categoryTags = getTagsForCategory(category) ?? [];

	const secondaryProjects = projects
		.filter((project) => {
			const primaryTag = project.tagData.primaryTag;
			const otherTags = project.tagData.otherTags;

			// Only include projects where an "otherTag" belongs to this category
			// but the primaryTag is NOT part of this category
			return (
				otherTags.some((tag) => categoryTags.includes(tag)) &&
				getCategoryForTag(primaryTag) !== category &&
				!project.isDefaultData
			);
		})
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();

	return [...primaryProjects, ...secondaryProjects];
};

export const filterFeaturedProjects = (projects: Project[]) => {
	return projects
		.filter((project) => project.isFeatured)
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();
};

export const filterNewArrivalProjects = (projects: Project[]) => {
	const today = new Date();
	const timespanInDays = 1300; //TODO: adjust to reasonable number of days (1300 is not "new" lol)

	const pastDateSetup = new Date(today);
	pastDateSetup.setDate(pastDateSetup.getDate() - timespanInDays);

	const newArrivalCutOff: Date = pastDateSetup;
	return projects
		.filter((project) => new Date(project.dateUpdated) > newArrivalCutOff)
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();
};

export const filterMiniGameProjects = (projects: Project[]) => {
	return projects
		.filter((project) => project.isMiniGame)
		.sort(
			(a: Project, b: Project) =>
				new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
		)
		.reverse();
};
