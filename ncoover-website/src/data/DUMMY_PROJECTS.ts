import type { Project } from "../components/portfolio/project-card/ProjectCard";
import CATEGORIES_ARRAY, { CATEGORIES } from "../constants/projectCategories";

const DUMMY_PROJECTS: Project[] = [
	{
		id: 1,
		title: "A Fine React Project",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
		dateAdded: new Date(2024, 11, 2),
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
				isAiGeneratedImage: true,
			},
			imagesPaths: [
				{
					src: "../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
					alt: "Test image 1",
				},
				{
					src: "../../public/placeholder-images/pexels-joshsorenson-1714208.jpg",
					alt: "Test image 2",
				},
				{
					src: "../../public/placeholder-images/pexels-designecologist-1779487.jpg",
					alt: "Test image 3",
				},
			],
		},
		tagData: {
			primaryTag: CATEGORIES.react,
			otherTags: CATEGORIES_ARRAY,
		},
		links: [
			{ type: "github", url: "https://github.com/nrcoover" },
			{ type: "codepen", url: "" },
			{ type: "website", url: "https://www.nicklefritz.com/" },
		],
	},
	{
		id: 2,
		title: "A rare A.I. Project",
		description:
			"Netus nisi platea curae praesent leo facilisis ultricies, maecenas clom nostra hendrerit convallis ad felis sodales, sapien commodo pulvinar massa ante sem. Torquent habitant feugiat velit et consequat facilisi ridiculus curae nulla ac id felis, fermentum nullam dapibus mauris facilisis varius conubia taciti ornare hac ullamcorper.",
		dateAdded: new Date(2025, 2, 23),
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/placeholder-images/pexels-joshsorenson-1714208.jpg",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
					alt: "Test image 1",
				},
				{
					src: "../../public/placeholder-images/pexels-joshsorenson-1714208.jpg",
					alt: "Test image 2",
				},
				{
					src: "../../public/placeholder-images/pexels-designecologist-1779487.jpg",
					alt: "Test image 3",
				},
			],
		},
		tagData: {
			primaryTag: CATEGORIES.ai,
			otherTags: CATEGORIES_ARRAY,
		},
		links: [
			{ type: "github", url: "https://github.com/nrcoover" },
			{ type: "codepen", url: "https://codepen.io/nrcoover" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 3,
		title: "A Wild JavaScript Project Has Appeared!",
		description:
			"Aliquam magna ultricies clom non tortor nulla libero facilisi nec eget, euismod condimentum praesent at sagittis imperdiet rhoncus felis morbi, potenti conubia sed vel parturient lobortis suscipit nibh viverra. Molestie fusce elementum a libero natoque nostra habitant dapibus lobortis parturient ultrices condimentum, faucibus porttitor posuere dictum massa primis platea nisi aenean enim magnis.",
		dateAdded: new Date(2025, 7, 8),
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/placeholder-images/pexels-designecologist-1779487.jpg",
				isAiGeneratedImage: true,
			},
			imagesPaths: [
				{
					src: "../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
					alt: "Test image 1",
				},
				{
					src: "../../public/placeholder-images/pexels-joshsorenson-1714208.jpg",
					alt: "Test image 2",
				},
				{
					src: "../../public/placeholder-images/pexels-designecologist-1779487.jpg",
					alt: "Test image 3",
				},
			],
		},
		tagData: {
			primaryTag: CATEGORIES.javaScript,
			otherTags: CATEGORIES_ARRAY,
		},
		links: [
			{ type: "github", url: "https://github.com/nrcoover" },
			{ type: "codepen", url: "https://codepen.io/nrcoover" },
			{ type: "website", url: "https://www.nrcoover.com/about-me" },
		],
	},
	{
		id: 4,
		title: "A Finer React Project",
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
		dateAdded: new Date(2024, 11, 2),
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
				isAiGeneratedImage: true,
			},
			imagesPaths: [
				{
					src: "../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
					alt: "Test image 1",
				},
				{
					src: "../../public/placeholder-images/pexels-joshsorenson-1714208.jpg",
					alt: "Test image 2",
				},
				{
					src: "../../public/placeholder-images/pexels-designecologist-1779487.jpg",
					alt: "Test image 3",
				},
			],
		},
		tagData: {
			primaryTag: CATEGORIES.react,
			otherTags: CATEGORIES_ARRAY,
		},
		links: [
			{ type: "github", url: "https://github.com/nrcoover" },
			{ type: "codepen", url: "" },
			{ type: "website", url: "https://www.nicklefritz.com/" },
		],
	},
	{
		id: 5,
		title: "A rarer A.I. Project",
		description:
			"Netus nisi platea curae praesent leo facilisis ultricies, maecenas clom nostra hendrerit convallis ad felis sodales, sapien commodo pulvinar massa ante sem. Torquent habitant feugiat velit et consequat facilisi ridiculus curae nulla ac id felis, fermentum nullam dapibus mauris facilisis varius conubia taciti ornare hac ullamcorper.",
		dateAdded: new Date(2025, 2, 23),
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/placeholder-images/pexels-joshsorenson-1714208.jpg",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
					alt: "Test image 1",
				},
				{
					src: "../../public/placeholder-images/pexels-joshsorenson-1714208.jpg",
					alt: "Test image 2",
				},
				{
					src: "../../public/placeholder-images/pexels-designecologist-1779487.jpg",
					alt: "Test image 3",
				},
			],
		},
		tagData: {
			primaryTag: CATEGORIES.ai,
			otherTags: CATEGORIES_ARRAY,
		},
		links: [
			{ type: "github", url: "https://github.com/nrcoover" },
			{ type: "codepen", url: "https://codepen.io/nrcoover" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 6,
		title: "A Wilder JavaScript Project Has Appeared!",
		description:
			"Aliquam magna ultricies clom non tortor nulla libero facilisi nec eget, euismod condimentum praesent at sagittis imperdiet rhoncus felis morbi, potenti conubia sed vel parturient lobortis suscipit nibh viverra. Molestie fusce elementum a libero natoque nostra habitant dapibus lobortis parturient ultrices condimentum, faucibus porttitor posuere dictum massa primis platea nisi aenean enim magnis.",
		dateAdded: new Date(2025, 7, 8),
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/placeholder-images/pexels-designecologist-1779487.jpg",
				isAiGeneratedImage: true,
			},
			imagesPaths: [
				{
					src: "../../public/placeholder-images/pexels-xexusdesigner-777001.jpg",
					alt: "Test image 1",
				},
				{
					src: "../../public/placeholder-images/pexels-joshsorenson-1714208.jpg",
					alt: "Test image 2",
				},
				{
					src: "../../public/placeholder-images/pexels-designecologist-1779487.jpg",
					alt: "Test image 3",
				},
			],
		},
		tagData: {
			primaryTag: CATEGORIES.javaScript,
			otherTags: CATEGORIES_ARRAY,
		},
		links: [
			{ type: "github", url: "https://github.com/nrcoover" },
			{ type: "codepen", url: "https://codepen.io/nrcoover" },
			{ type: "website", url: "https://www.nrcoover.com/about-me" },
		],
	},
];

const DUMMY_PROJECTS_JSON = JSON.stringify(DUMMY_PROJECTS);

export default DUMMY_PROJECTS_JSON;
