import { TAGS } from "../constants/tags";
import type { Project } from "../typings";

const PROJECTS: Project[] = [
	// {
	// 	id: 0,
	// 	title: "",
	// 	description: "",
	// 	dateCreated: new Date(),
	// 	dateUpdated: new Date(),
	// 	isFeatured: false,
	// 	isFavorite: false,
	// 	imageData: {
	// 		coverArt: {
	// 			coverArtPath: "",
	// 			isAiGeneratedImage: false,
	// 		},
	// 		imagesPaths: [
	// 			{
	// 				src: "",
	// 				alt: "",
	// 			},
	// 			{
	// 				src: "",
	// 				alt: "",
	// 			},
	// 			{
	// 				src: "",
	// 				alt: "",
	// 			},
	// 		],
	// 	},
	// 	tagData: {
	// 		primaryTag: TAGS.javascript,
	// 		otherTags: [],
	// 	},
	// 	links: [
	// 		{ type: "github", url: "" },
	// 		{ type: "codepen", url: "" },
	// 		{ type: "website", url: "" },
	// 	],
	// },
	{
		id: 1,
		title: "Instagram Login Page Clone (2021)",
		description:
			"An exercise in HTML, CSS, and JavaScript, this project aims to create a pixel-perfect recreation of the Instagram Login page. This page does not connect to a backend database, but features layered cyclic images and mock input functionality.",
		dateCreated: new Date(2021, 9, 17),
		dateUpdated: new Date(2021, 12, 26),
		isFeatured: true,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/images/projects/cover-art/cover-art_instagram-login-page-clone.png",
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
			primaryTag: TAGS.css,
			otherTags: [
				TAGS.html,
				TAGS.html5,
				TAGS.css,
				TAGS.responsiveWebDesign,
				TAGS.javascript,
			],
		},
		links: [
			{
				type: "github",
				url: "https://github.com/nrcoover/instagram-login-clone",
			},
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/oNwEjXQ" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 2,
		title: "Online Manual (Written in Lorem Ipsum)",
		description: "",
		dateCreated: new Date(2021, 8, 15),
		dateUpdated: new Date(2021, 9, 28),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/images/projects/cover-art/cover-art_manual-in-lorem-ipsum.png",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/ZEKZqXr" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 3,
		title: "Freemote Blog Layout Replica",
		description: "",
		dateCreated: new Date(2021, 8, 26),
		dateUpdated: new Date(2021, 9, 28),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/JjJdRwz" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 4,
		title: "For the Love of Alpacas | Product Details Page",
		description: "",
		dateCreated: new Date(2021, 8, 6),
		dateUpdated: new Date(2021, 9, 28),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/mdmzXPX" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 5,
		title: "Boxes Plus | Landing Page",
		description: "",
		dateCreated: new Date(2021, 8, 8),
		dateUpdated: new Date(2021, 9, 28),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/abWQYQK" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 6,
		title: 'Adidas "Coming Soon" Landing Page Clone',
		description: "",
		dateCreated: new Date(2022, 3, 16),
		dateUpdated: new Date(2022, 3, 17),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{
				type: "github",
				url: "https://github.com/nrcoover/adidas-coming-soon-clone",
			},
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/gOoaRBr" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 7,
		title: 'Adidas "Coming Soon" Landing Page Clone | Alternate Design',
		description: "",
		dateCreated: new Date(2022, 3, 16),
		dateUpdated: new Date(2022, 3, 17),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{
				type: "github",
				url: "https://github.com/nrcoover/adidas-coming-soon-clone-v2",
			},
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/JjMYLez" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 8,
		title: '"Cayce Pollard" | Online Résumé Card Clone',
		description: "",
		dateCreated: new Date(2021, 9, 27),
		dateUpdated: new Date(2021, 12, 17),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{
				type: "github",
				url: "https://github.com/nrcoover/minimalist-resume-clone",
			},
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/PojXmzV" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 9,
		title: "How to use Flex Box",
		description: "",
		dateCreated: new Date(2021, 8, 30),
		dateUpdated: new Date(2021, 9, 28),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/dyRGJxw" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 10,
		title: "Mock Login Form",
		description: "",
		dateCreated: new Date(2021, 8, 1),
		dateUpdated: new Date(2021, 9, 28),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.html5,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/jOmKZay" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 11,
		title: "Setting Out to Sea | The First Web Dev Project",
		description: "",
		dateCreated: new Date(2021, 7, 30),
		dateUpdated: new Date(2021, 9, 28),

		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.html5,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/abWGaME" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 12,
		title: "The Indie Game Developer | Video Embed Project",
		description: "",
		dateCreated: new Date(2021, 8, 4),
		dateUpdated: new Date(2021, 9, 28),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath:
					"../../public/images/projects/cover-art/cover-art_the-indie-game-dev.png",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/mdmGwMJ" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 13,
		title: "Food Service Delivery Summary | Clone",
		description: "",
		dateCreated: new Date(2022, 3, 24),
		dateUpdated: new Date(2022, 3, 24),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},

		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: "github", url: "" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/yLpgMoY" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 14,
		title: "MaxStrong - Exercise Coach | Landing Page Clone",
		description: "",
		dateCreated: new Date(2022, 3, 30),
		dateUpdated: new Date(2022, 3, 31),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [
				TAGS.html,
				TAGS.html5,
				TAGS.css,
				TAGS.responsiveWebDesign,
				TAGS.javascript,
			],
		},
		links: [
			{
				type: "github",
				url: "https://github.com/nrcoover/maxstrong-exercise-clone",
			},
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/oNpeggv" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 15,
		title: "Remotely A-O-K | Online Job Board with API",
		description: "",
		dateCreated: new Date(2022, 4, 30),
		dateUpdated: new Date(2022, 4, 30),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.javascript,
			otherTags: [
				TAGS.html,
				TAGS.html5,
				TAGS.css,
				TAGS.sass,
				TAGS.scss,
				TAGS.bootstrap,
				TAGS.responsiveWebDesign,
				TAGS.javascript,
			],
		},

		links: [
			{ type: "github", url: "https://github.com/nrcoover/job-board-api" },
			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/GRQKVmp" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 16,
		title: "UI/UX Tab Selector With Dark Mode and Language Toggle",
		description: "",
		dateCreated: new Date(2022, 4, 4),
		dateUpdated: new Date(2022, 4, 4),
		isFeatured: true,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.javascript,
			otherTags: [
				TAGS.html,
				TAGS.html5,
				TAGS.css,
				TAGS.responsiveWebDesign,
				TAGS.javascript,
			],
		},
		links: [
			{
				type: "github",
				url: "https://github.com/nrcoover/mini-project-tab-selector",
			},

			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/ZEvvZay" },
			{ type: "website", url: "" },
		],
	},
	{
		id: 17,
		title: "Quizapalooza - eCommerce Quiz | Online Quiz Web Application",
		description: "",
		dateCreated: new Date(2022, 4, 16),
		dateUpdated: new Date(2022, 4, 16),
		isFeatured: true,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath: "",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
				{
					src: "",
					alt: "",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.javascript,
			otherTags: [
				TAGS.html,
				TAGS.html5,
				TAGS.css,
				TAGS.sass,
				TAGS.scss,
				TAGS.responsiveWebDesign,
				TAGS.javascript,
			],
		},
		links: [
			{
				type: "github",
				url: "https://github.com/nrcoover/quizapalooza-web-app",
			},

			{ type: "codepen", url: "https://codepen.io/nrcoover/pen/dyJQeoQ" },
			{ type: "website", url: "" },
		],
	},
	// {
	// 	id: 18,
	// 	title: "",
	// 	description: "",
	// 	dateCreated: new Date(),
	// 	dateUpdated: new Date(),
	// 	isFeatured: false,
	// 	isFavorite: false,
	// 	imageData: {
	// 		coverArt: {
	// 			coverArtPath: "",
	// 			isAiGeneratedImage: false,
	// 		},
	// 		imagesPaths: [
	// 			{
	// 				src: "",
	// 				alt: "",
	// 			},
	// 			{
	// 				src: "",
	// 				alt: "",
	// 			},
	// 			{
	// 				src: "",
	// 				alt: "",
	// 			},
	// 		],
	// 	},
	// 	tagData: {
	// 		primaryTag: TAGS.javascript,
	// 		otherTags: [
	// 			TAGS.html,
	// 			TAGS.html5,
	// 			TAGS.css,
	// 			TAGS.responsiveWebDesign,
	// 			TAGS.javascript,
	// 		],
	// 	},
	// 	links: [
	// 		{ type: "github", url: "" },
	// 		{ type: "codepen", url: "" },
	// 		{ type: "website", url: "" },
	// 	],
	// },
];

const PROJECTS_JSON = JSON.stringify(PROJECTS);
export default PROJECTS_JSON;
