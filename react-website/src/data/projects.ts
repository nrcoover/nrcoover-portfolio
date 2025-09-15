import { iconSocial } from "../constants/iconTypes";
import { TAGS, valuesArray } from "../constants/tags";
import type { Project } from "../typings";

export const DEFAULT_PROJECT: Project = {
	id: 0,
	title: "This Project May Be Missing Data!",
	description:
		"Uh oh! Looks like we are having trouble reaching this project's data. We apologize for the inconvenience. Please try again later!",
	dateCreated: new Date(),
	dateUpdated: new Date(),
	isFeatured: false,
	isFavorite: false,
	imageData: {
		coverArt: {
			coverArtPath:
				"images/projects/cover-art/ai-cover-art_missing-project.png",
			isAiGeneratedImage: true,
		},
		imagesPaths: [
			{
				src: "images/projects/cover-art/ai-cover-art_missing-project.png",
				alt: 'Movie poster of a sad, broken, weathered robot with a missing arm in a beaufiul cyberpunk city. The poster reads "Missing Project".',
				caption:
					"Uh oh! Looks like we're having trouble communicating with the backend servers to provide you the details for this project. We apologize for the inconvenience, but please, enjoy this a.i. generated movie poster to make you feel happy (and perhaps a little bit sad) about the missing data. Poor thing doesn't even have his right arm! (Image complements of Chat-GPT5)",
			},
			{
				src: "images/projects/details/default-project_pexels-googledeepmind-18069362.jpg",
				alt: "3D Render of butterfikes in a patch of forest floor vegetation, including moss, bark, and grass.",
				caption:
					"Actually, we're just joshing you. This application doesn't communicate with a backend server. The truth is our creator hasn't inputed data for this project yet, and didn't want to leave you with nothing. Instead, our creator cleverly provided you with this cool placeholder image from pexels.com, a great resource for royalty-free images!",
			},
			{
				src: "images/projects/details/default-project_pexels-terricks-noah-282960-840326.jpg",
				alt: "A cute puppy nuzzles his nose into his owner's hands, hiding his face slightly with his paw. The puppies cute eyes look up longingly, grateful for the attention.",
				caption:
					"Well, looks like the jig is up! (Sorry for deceiving you...), but perhaps we can make it up to you with this image of a cute puppy! (Another great photo from www.pexels.com). Speaking of puppies, since this project doesn't have any data yet, why not take a look at the project titled \"Quizapalooza\"? It's a small quiz web application built with JavaScript that rewards correct answers with more adorably cute puppies, and scient has proven that cutness and raise serotonin levels! (But then again, I wouldn't trust that last statement as 67.5% of all statistics are made up on the spot...)",
			},
		],
	},
	tagData: {
		primaryTag: "no primary tag",
		otherTags: [
			`In an absence of tags, here's list of all available tags: `,
			...valuesArray,
		],
	},
	links: [
		{
			type: iconSocial.GitHub,
			url: "https://github.com/nrcoover/instagram-login-clone",
		},
		{
			type: iconSocial.CodePen,
			url: "https://codepen.io/nrcoover/pen/oNwEjXQ",
		},
		{ type: iconSocial.Website, url: "https://www.nrcoover.com/" },
	],
	heroFeatureData: {
		banner: {
			src: "images/projects/feature-banners/ai-cover-art_missing-project_feature-banner.png",
			alt: 'Movie poster of a sad, broken, weathered robot with a missing arm in a beaufiul cyberpunk city. The poster reads "Missing Project".',
		},

		shortTitle: "Missing Project",
		shortDescription:
			"A futuristic epic about a robot searching for meaning amidst missing data...",
		isAiGeneratedImage: true,
	},
	isDefaultData: true,
};

const PROJECTS: Project[] = [
	{
		id: 0,
		title: "Default Project for Case of Missing Data",
		description:
			"This is not a real project. It is a display of default data used when a project is missing details. You are not seeing this by accident; it is displayed on purpose as an example of what you may see.",
		dateCreated: new Date(),
		dateUpdated: new Date(),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath:
					"images/projects/cover-art/ai-cover-art_missing-project.png",
				isAiGeneratedImage: true,
			},
			imagesPaths: [
				{
					src: "images/projects/cover-art/ai-cover-art_missing-project.png",
					alt: 'Movie poster of a sad, broken, weathered robot with a missing arm in a beaufiul cyberpunk city. The poster reads "Missing Project".',
					caption:
						"Uh oh! Looks like we're having trouble communicating with the backend servers to provide you the details for this project. We apologize for the inconvenience, but please, enjoy this a.i. generated movie poster to make you feel happy (and perhaps a little bit sad) about the missing data. Poor thing doesn't even have his right arm! (Image complements of Chat-GPT5)",
				},
				{
					src: "images/projects/details/default-project_pexels-googledeepmind-18069362.jpg",
					alt: "3D Render of butterfikes in a patch of forest floor vegetation, including moss, bark, and grass.",
					caption:
						"Actually, we're just joshing you. This application doesn't communicate with a backend server. The truth is our creator hasn't inputed data for this project yet, and didn't want to leave you with nothing. Instead, our creator cleverly provided you with this cool placeholder image from pexels.com, a great resource for royalty-free images!",
				},
				{
					src: "images/projects/details/default-project_pexels-terricks-noah-282960-840326.jpg",
					alt: "A cute puppy nuzzles his nose into his owner's hands, hiding his face slightly with his paw. The puppies cute eyes look up longingly, grateful for the attention.",
					caption:
						"Well, looks like the jig is up! (Sorry for deceiving you...), but perhaps we can make it up to you with this image of a cute puppy! (Another great photo from www.pexels.com). Speaking of puppies, since this project doesn't have any data yet, why not take a look at the project titled \"Quizapalooza\"? It's a small quiz web application built with JavaScript that rewards correct answers with more adorably cute puppies, and scient has proven that cutness and raise serotonin levels! (But then again, I wouldn't trust that last statement as 67.5% of all statistics are made up on the spot...)",
				},
			],
		},
		tagData: {
			primaryTag: "no primary tag",
			otherTags: [
				`In an absence of tags, here's list of all available tags: `,
				...valuesArray,
			],
		},
		links: [
			{
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/instagram-login-clone",
			},
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/oNwEjXQ",
			},
			{ type: iconSocial.Website, url: "https://www.nrcoover.com/" },
		],
		isDefaultData: true,
	},
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
					"images/projects/cover-art/cover-art_instagram-login-page-clone.png",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "images/projects/details/instagram-login-clone_detail-1_main-page.PNG",
					alt: "Pixel-perfect Instagram login clone from 2021, featuring input fields for a login and cycling photos on a cell phone.",
					caption:
						"A pixel-perfect recreation of the Instagram login page from 2021, featuring responsive design, motion keyframes in CSS, and JavaScript for input field functionality.",
				},
				{
					src: "images/projects/details/instagram-login-clone_detail-2_responsive-login.PNG",
					alt: "Pixel-perfect Instagram login clone from 2021, featuring input fields for a login with responsive web design.",
					caption:
						"Using CSS media queries for responsive web design, this version of the login page removes the cell phone display from smaller screens, leaving the size and spacing for the login intact.",
				},
				{
					src: "images/projects/details/instagram-login-clone_detail-3_html-sample.PNG",
					alt: "A sample of HTML markup for a pixel-perfect recreation of the Instagram login page from 2021.",
					caption:
						"An example of the HTML markup used to create this pixel-perfect recreation of Instagram's Login page. To view the rest of the code, visit Codepen or GitHub using the links below.",
				},
				{
					src: "images/projects/details/instagram-login-clone_detail-4_css-javascript-sample.PNG",
					alt: "A sample of CSS and JavaScript code for a pixel-perfect recreation of the Instagram login page from 2021.",
					caption:
						"An example of the CSS and JavaScript used to add interactivity and functionality to the project. The CSS uses key frames to create an infinite cycling of the displayed images by programmatically changing the z-index of each image, similar to removing the top card from a deck of cards and placing it on the bottom. To view the rest of the code, visit Codepen or GitHub using the links below.",
				},
				{
					src: "images/projects/details/instagram-login-clone_detail-5_phishing-false-positive.PNG",
					alt: "Screenshot of multiple displays showing code, and an Instagram login page in development, and an Avast warning of a phishing attempt detected from a suspicious file.",
					caption:
						"This project was created as an exercise in CSS for the online coding school, Freemote. During development, as the finishing touches were being added, the computer locked down the files, Avast placing them into quarantine under suspicion of a phishing attempt. I suppose my efforts to create a pixel-perfect recreation were a little too close to the original.",
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
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/instagram-login-clone",
			},
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/oNwEjXQ",
			},
			{ type: iconSocial.Website, url: "" },
		],
	},
	{
		id: 2,
		title: "Online Manual (Written in Lorem Ipsum)",
		description:
			'As in exercise in CSS, this project features use of CSS grids and pseudo classes for creating a mock "Online Manual" with responsive design. The text is written in "Lorem Ipsum", the placeholder text, and was created via an online text generator.',
		dateCreated: new Date(2021, 8, 15),
		dateUpdated: new Date(2021, 9, 28),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath:
					"images/projects/cover-art/cover-art_manual-in-lorem-ipsum.png",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "images/projects/details/lorem-ipsum-manual_detail-1_main-page.PNG",
					alt: "A digital online manual written in the gibberish placeholder text, Lorem Ipsum.",
					caption:
						"A digital online manual written in the gibberish placeholder text, Lorem Ipsum. It is built with a responsive design and features a side text navigation panel.",
				},
				{
					src: "images/projects/details/lorem-ipsum-manual_detail-2_html-sample.PNG",
					alt: "A sample of HTML markup for an online digital manual written in Lorem Ipsum.",
					caption:
						"An example of the HTML markup used to create this digital manual, featuring semantic HTML (or HTML5). To view the rest of the code, visit Codepen using the link below.",
				},
				{
					src: "images/projects/details/lorem-ipsum-manual_detail-3_css-sample.PNG",
					alt: "A sample of CSS for an online digital manual written in Lorem Ipsum.",
					caption:
						"An example of the CSS used to create this digital manual, featuring the use of CSS grid and pseudo-classes. To view the rest of the code, visit Codepen using the link below.",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_freemote-blog-replica.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_alpacas-product-details-page.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_boxes-plus-landing-page.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_adidas-landing-page.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_adidas-landing-page-alternate-design.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_cayce-pollard-resume.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_how-to-use-flexbox.png",
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
				coverArtPath: "images/projects/cover-art/cover-art_mock-login-form.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_setting-out-to-sea.png",
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
					"images/projects/cover-art/cover-art_the-indie-game-dev.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_food-service-delivery-summary.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_maxstrong-exercise-coach.png",
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
				coverArtPath:
					"images/projects/cover-art/cover-art_remotely-aok-job-board.png",
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
		description:
			"A UI/UX (User Interface / User Experience) toggle selector. It offers the ability to switch between three different options, while also selecting between light and dark mode and English or Spanish language. Also, the switch from light to dark and vice versa occurs with CSS ease, providing a smooth transition.",
		dateCreated: new Date(2022, 4, 4),
		dateUpdated: new Date(2022, 4, 4),
		isFeatured: true,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath:
					"images/projects/cover-art/cover-art_ui-tab-selector-dark-mode.png",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "images/projects/details/ui-toggle_detail-1_main-page.png",
					alt: "Web project with a light color theme displaying two toggles and a panel with three options. The two toggles are for switching between light and dark mode and for switching between English and Spanish language.",
					caption:
						"This small UI project includes multiple setting toggles and tab selectors. The current settings are light mode with English language (although the text for the options is actually Lorem Ipsum, the generated placeholder text.",
				},
				{
					src: "images/projects/details/ui-toggle_detail-2_dark-mode.png",
					alt: "Web project with a light color theme displaying two toggles and a panel with three options. The two toggles are for switching between light and dark mode and for switching between English and Spanish language.",
					caption:
						"This small UI project includes multiple setting toggles and tab selectors. The current settings are dark mode with English language (although the text for the options is actually Lorem Ipsum, the generated placeholder text.",
				},
				{
					src: "images/projects/details/ui-toggle_detail-3_spanish.png",
					alt: "Web project with a light color theme displaying two toggles and a panel with three options. The two toggles are for switching between light and dark mode and for switching between English and Spanish language.",
					caption:
						"This small UI project includes multiple setting toggles and tab selectors. The current settings are light mode with Spanish language (although the text for the options is actually Lorem Ipsum, the generated placeholder text.",
				},
				{
					src: "images/projects/details/ui-toggle_detail-4_javascript-sample.png",
					alt: "A sample of JavaScript code.",
					caption:
						'This JavaScript sample displays the code responsible for switching the light or dark mode colors. Given that the function is actually responsible for turning on dark mode and also returning to light mode, a better function name may have been "toggleColorTheme()".',
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
				coverArtPath: "images/projects/cover-art/ai-cover-art_quizapalooza.png",
				isAiGeneratedImage: true,
			},
			imagesPaths: [
				{
					src: "images/projects/details/quizapalooza_detail-1_main-page.png",
					alt: "The start menu of a web quiz application about eCommerce.",
					caption:
						'"Quizapalooza" was a final project of the JavaScript course from the online coding bootcamp, Freemote. It features three questions about e-commerce in a timed quiz. It uses DOM manipulation to present varying failure and success pages based on user interaction and rewards successful users with a variety of cute puppy images on quiz completion.',
				},
				{
					src: "images/projects/details/quizapalooza_detail-2_question-example.png",
					alt: 'An example question from an online quiz about eCommerce. The question reads "If Shopify is so good, why are Shopify developers necessary?"',
					caption:
						"An example question from the quiz. Selecting the correct answer advances the user to the following question. Selecting a wrong answer results in a quiz failure.",
				},
				{
					src: "images/projects/details/quizapalooza_detail-3_wrong-answer.png",
					alt: 'A failure notice displays in red for answering incorrectly to a quiz question. It informs the user that a wrong answer was selected and offers a prompt with two options: "Retry" or "Quit"',
					caption:
						"The failure page is displayed when a user answers a question incorrectly. From here, the user can choose to retry the exam or quit. Retrying begins back at the first question, and quitting will present the user with a confirmation notice before returning to the menu screen.",
				},
				{
					src: "images/projects/details/quizapalooza_detail-4_timeout.png",
					alt: 'A failure notice displays in red for a timeout failure. It informs the user that time has run out to complete the quiz and offers a prompt with two options: "Retry" or "Quit"',
					caption:
						"The failure page is displayed when a user runs out of time before completing the exam. From here, the user can choose to retry the exam or quit. Retrying begins back at the first question, and quitting will present the user with a confirmation notice before returning to the menu screen.",
				},
				{
					src: "images/projects/details/quizapalooza_detail-5_puppy-reward.png",
					alt: "A notice of congratulations for completing the quiz correctly and promptly. An image of cute puppies is displayed as a reward.",
					caption:
						"When a user completes the quiz successfully by answering all questions correctly and before the timer has run out, they are rewarded with an image of cute puppies. From here, the user can choose to retry the exam or quit. Multiple varying images of cute puppies will be cycled through on consecutive successful attempts, providing the user with a new reward for each success.",
				},
				{
					src: "images/projects/details/quizapalooza_detail-6_html-sample.png",
					alt: "An example of HTML markup code.",
					caption:
						'A sample of the HTML used to create this web exam. It features semantic HTML (or HTML5), and a touch of dry humor: "As a reminder, excellence is mandatory..."',
				},
				{
					src: "images/projects/details/quizapalooza_detail-7_css-sample.png",
					alt: "An example of CSS code.",
					caption:
						"A sample of the CSS code written for this web exam. This has been converted from the original SCSS/SASS that was used for styling this application. You can view the original SCSS/SASS on GitHub following the link below, or view the converted CSS on Codepen following the other link below.",
				},
				{
					src: "images/projects/details/quizapalooza_detail-8_scss-sample.png",
					alt: "An example of SCSS/SASS code displayed in Visual Studio Code.",
					caption:
						"A sample of the SCSS/SASS code written for this web exam is displayed in Visual Studio Code. This was converted into traditional CSS for the Codepen version of the application. You can view the original SCSS/SASS on GitHub following the link below, or view the converted CSS on Codepen following the other link below.",
				},
				{
					src: "images/projects/details/quizapalooza_detail-9_javascript-sample.png",
					alt: "An example of JavaScript code.",
					caption:
						"A sample of the JavaScript code used to write this web exam. This particular function is responsible for delegating which failure menu should be displayed depending on the state of the application. It tracks both the state of the answers (if any have been answered incorrectly) and the state of the timer (checking if the time has run out).",
				},
				{
					src: "images/projects/details/quizapalooza_detail-10_quitting-pug.png",
					alt: 'A failure display in red with a black pug looking sad. The display reads "Hello. It me." and makes a joke about an Adele lyric.',
					caption:
						"This page displays when a user chooses to quit after failing the quiz. It displays a sad pug in an attempt to convince the user to try again before quitting the exam entirely. From here, the user can choose to retry the exam or quit. Retrying begins back at the first question, and quitting returns the user to the start menu.",
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
