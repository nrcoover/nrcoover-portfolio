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
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/ZEKZqXr",
			},
			{ type: iconSocial.Website, url: "" },
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
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/JjJdRwz",
			},
			{ type: iconSocial.Website, url: "" },
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
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/mdmzXPX",
			},
			{ type: iconSocial.Website, url: "" },
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
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/abWQYQK",
			},
			{ type: iconSocial.Website, url: "" },
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
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/adidas-coming-soon-clone",
			},
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/gOoaRBr",
			},
			{ type: iconSocial.Website, url: "" },
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
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/adidas-coming-soon-clone-v2",
			},
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/JjMYLez",
			},
			{ type: iconSocial.Website, url: "" },
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
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/minimalist-resume-clone",
			},
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/PojXmzV",
			},
			{ type: iconSocial.Website, url: "" },
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
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/dyRGJxw",
			},
			{ type: iconSocial.Website, url: "" },
		],
	},
	{
		id: 10,
		title: "Mock Login Form",
		description:
			'Another project from the "Freemote" coding bootcamp, this was an exercise in creating a classic web form for a login page. It\'s merely a "mock" login page as it holds no real functionality and uses only HTML and CSS to create the appearance of a login page.',
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
					src: "images/projects/details/mock-login-form_detail-1_main-page.png",
					alt: "A login form with input fields for Username and Password, and a dropdown to select Gender. The backdrop for the form is a white and red striped banner.",
					caption:
						'This mock login form features three input fields: A Username and Password field with placeholder text that disappears on input, and a dropdown selection for Gender. The Password field is of type "password" to ensure text is hidden behind bullets. This form also includes a submission button.',
				},
				{
					src: "images/projects/details/mock-login-form_detail-2_html-sample.png",
					alt: "A sample of HTML markup.",
					caption:
						"This sample of HTML markup displays the HTML used to create this mock login form. It features several input elements with their matching label elements and a button element for the submission button.",
				},
				{
					src: "images/projects/details/mock-login-form_detail-3_css-sample.png",
					alt: "A sample of CSS style sheet language",
					caption:
						"This image of CSS style sheet language displays a sample of the CSS used to style this mock login form. The striped background of red and white is not an image, but is created using CSS rules. Click the link to the CodePen to see the CSS and HTML in its entirety.",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.html5,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/jOmKZay",
			},
			{ type: iconSocial.Website, url: "" },
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
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/abWGaME",
			},
			{ type: iconSocial.Website, url: "" },
		],
	},
	{
		id: 12,
		title: "The Indie Game Developer | Video Embed Project",
		description:
			'Another early project of the "Freemote" coding bootcamp, the prompt was to create an HTML page with CSS featuring a favorite YouTube video using the iframe HTML element. This project features the YouTube video "How Making Indie Games Changed My Life" by David Wehle.',
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
					src: "images/projects/details/indie-game-dev_detail-1_main-page.png",
					alt: 'A teal colored webpage; it reads "Envision the future. Build your world." and features a YouTube video titled "How Making Indie Games Changed My Life". At the bottom of the page is a small icon shaped like the head of a fox.',
					caption:
						"This web page, hosted on CodePen, features a video provided via an iframe HTML element and a colored background with a glowing sun, all created in CSS.",
				},
				{
					src: "images/projects/details/indie-game-dev_detail-2_the-fox-say.png",
					alt: "An icon shaped like a fox's head made entirely from CSS style sheet language.",
					caption:
						"This icon, designed to look like the head of a fox, was created entirely with CSS rules. It's a reference to the main character - a fox - of David Wehle's second commercial game, \"The First Tree\".",
				},
				{
					src: "images/projects/details/indie-game-dev_detail-3_html-sample.png",
					alt: "A sample of HTML markup.",
					caption:
						"This HTML sample displays the HTML markup used to generate this page. Click the CodePen link below to see the rest of the code.",
				},
				{
					src: "images/projects/details/indie-game-dev_detail-4_css-sample.png",
					alt: "A sample of CSS style sheet language.",
					caption:
						"This sample of CSS style sheet language displays a portion of the CSS used to generate the icon shaped like a fox's head. To see the rest of the code, click the CodePen link below.",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.css,
			otherTags: [TAGS.html, TAGS.html5, TAGS.css, TAGS.responsiveWebDesign],
		},
		links: [
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/mdmGwMJ",
			},
			{ type: iconSocial.Website, url: "" },
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
			{ type: iconSocial.GitHub, url: "" },
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/yLpgMoY",
			},
			{ type: iconSocial.Website, url: "" },
		],
	},
	{
		id: 14,
		title: "MaxStrong - Exercise Coach | Landing Page Clone",
		description:
			'This project is a clone landing page for a "Max Strong" website for an Exercise Coach. Built with Responsive Design principles in mind, this is primarily constructed with HTML and CSS.',
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
					src: "images/projects/details/maxstrong_detail-1_main-page.png",
					alt: "Landing page of a website for an exercise coach.",
					caption:
						'Main content of the landing page, including top navigation display and categories of content divided with semantic HTML using elements like "article" and "section".',
				},
				{
					src: "images/projects/details/maxstrong_detail-2_main-page-continued.png",
					alt: "More content of a landing page of a website for an exercise coach.",
					caption:
						"More of the landing page content is displayed further down when scrolling horizontally on the page. Notice that the navigation remains at the top of the page, even as you scroll. This page also includes a footer with more mock navigation, which can be viewed by clicking the CodePen or GitHub link below.",
				},
				{
					src: "images/projects/details/maxstrong_detail-3_responsive-design.png",
					alt: "Code snippets of HTML, CSS, and JavaScript alongside a responsive design display of a landing page of a website for an exercise coach.",
					caption:
						"This displays the landing page as it would appear on smaller screens, and is built with responsive design using CSS media queries. Snippets of HTML and a little bit of JavaScript are also included above and below the CSS snippet.",
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
				url: "https://github.com/nrcoover/maxstrong-exercise-clone",
			},
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/oNpeggv",
			},
			{ type: iconSocial.Website, url: "" },
		],
	},
	{
		id: 15,
		title: "Remotely A-O-K | Online Job Board with API",
		description:
			'This project builds an appealing frontend UI (User Interface) for displaying job postings on a job board. It calls a backend API from "remoteok.com" and displays the data in ascending order with a JavaScript XMLHttp request.',
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
					src: "images/projects/details/remotely-job-board_detail-1_main-page.png",
					alt: "An online job board displaying API data from the Remote Ok website.",
					caption:
						"This Job Board UI displays job postings from the Remotely Ok website in ascending order and features a JavaScript call to a backend API to gather data. It alternates the row color using css rules, and includes a button for navigating to the job posting's details page.",
				},
				{
					src: "images/projects/details/remotely-job-board_detail-2_javascript-sample.png",
					alt: "A sample of JavaScript code calling a backend API with an XMLHttp request.",
					caption:
						"This JavaScript sample displays the API call to the Remotely Ok job postings API. It uses the XMLHttpRequest API to call the API and gather the data.",
				},
				{
					src: "images/projects/details/remotely-job-board_detail-3_scss-sass-sample.png",
					alt: "A sample of SCSS/SASS code.",
					caption:
						"A sample of the original SCSS/SASS code written for this project before converting to traditional CSS for the CodePen version. You can view the original SCSS/SASS code by clicking the GitHub link below, or click the CodePen link to view the converted CSS.",
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
			{
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/job-board-api",
			},
			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/GRQKVmp",
			},
			{ type: iconSocial.Website, url: "" },
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
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/mini-project-tab-selector",
			},

			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/ZEvvZay",
			},
			{ type: iconSocial.Website, url: "" },
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
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/quizapalooza-web-app",
			},

			{
				type: iconSocial.CodePen,
				url: "https://codepen.io/nrcoover/pen/dyJQeoQ",
			},
			{ type: iconSocial.Website, url: "" },
		],
	},
	{
		id: 18,
		title: "Nicklefritz Website",
		description:
			'A website built for the online personality, "Nicklefritz", including three pages for: content creation, music production, and game development. Hosted on Netlify and built with React, this application features the use of react libraries and APIs like "React Router", "Context Provider", and some Express.js for backend hosting of music files.',
		dateCreated: new Date(2025, 3, 17),
		dateUpdated: new Date(2025, 3, 31),
		isFeatured: true,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath:
					"images/projects/cover-art/cover-art_nicklefritz-website.png",
				isAiGeneratedImage: false,
			},
			imagesPaths: [
				{
					src: "images/projects/details/nicklefritz_detail-1_content-creater-home.png",
					alt: "The main page for the content creator, Nicklefritz. It features an artistic rendering of Nicklefritz, a man with strawberry-blond hair holding a candle, along with a bio about his gaming channel on YouTube. The background color for the page is teal. Below the bio is a featured YouTube video of Nicklefritz playing the battle royale game, Fortnite.",
					caption:
						"The home page of the Nicklefritz website. Built with React, it utilizes React Router for paging and routing, as well as a context API to manage the color theme, which changes between pages. The home page includes navigation, a hero banner with a bio, and a featured YouTube video of Nicklefritz playing the battle royale game, Fortnite.",
				},
				{
					src: "images/projects/details/nicklefritz_detail-2_content-creater-videos.png",
					alt: "Another section of the Nicklefritz home page; this section features a collection of social media links and then a section with a variety of YouTube videos from the Nicklefritz YouTube channel.",
					caption:
						"Two more sections can be seen here on the home page. First is a collection of social media links. Below is another section where multiple videos are displayed, mapped from a list to reusable Video components; each one is an iframe under the hood, allowing for playback from YouTube integrated into the website. These videos feature some of the more popular uploads to the Nicklefritz YouTube channel.",
				},
				{
					src: "images/projects/details/nicklefritz_detail-3_content-creater-playlists.png",
					alt: "More content from the Nicklefritz home page; this section features a variety of YouTube Playlists from the Nicklefritz YouTube channel.",
					caption:
						"Building on the Video component, the Playlist section is mapped from a list of playlists over a reusable Playlist component. Each one houses a button to dynamically navigate to a YouTube playlist and an iframe for streaming the first video of each playlist. Each Playlist is wrapped with a light background to distinguish it from the single video player components. Those featured are some of the more popular playlists from the Nicklefritz YouTube channel.",
				},
				{
					src: "images/projects/details/nicklefritz_detail-12_react-router.png",
					alt: "A JavaScript/React code sample of React Router being used to control page routes.",
					caption:
						"This sample of React code displays the use of React Router for managing the routes of the website, giving the SPA (Single Page Application) the appearance of containing multiple pages as a classic website would while remaining on the same page.",
				},
				{
					src: "images/projects/details/nicklefritz_detail-4_game-dev-home.png",
					alt: 'The Game Developer page from the Nicklefritz website. It is similar in appearance to the home page, aside from the color theme, which has changed from teal to a deep purple. The artistic rendering of Nicklefritz is still visible in the center with a bio beneath, this time it writes about Nicklefrit\'z endeavor with game development, and below is a single featured video from the "Nicklefritz Dev" channel.',
					caption:
						'The top of the "Game Developer" Page. Uses reusable components to create a near-identical header to the home page with a profile picture and bio, dynamically changing the content based on the route. Additionally, the color theme has changed to a deep purple by using the Context API to create a "Theme Context", which changes based on the route with React Router.',
				},
				{
					src: "images/projects/details/nicklefritz_detail-5_game-dev-origin.png",
					alt: 'More content of the Game Developer page from the Nicklefritz website. This page includes a section titled "Origin Story", which explains how Nicklefritz got started with game development. Below that is a section titled "Contact Me", which includes a contact form for contacting Nicklefritz for business inquiries.',
					caption:
						'Static written paragraphs are housed in a reusable "wrapper component", accepting the "children prop" to allow for dynamically placed content. Below is another reusable component for a contact form, which exists on all three pages, dynamically styled by the Theme Context Provider. The contact form includes a hidden "honey pot" field to detect and deter spam bots.',
				},
				{
					src: "images/projects/details/nicklefritz_detail-6_game-dev-contact.png",
					alt: 'While still on the "Game Developer" page of the Nicklefritz website, there is now an overlay panel on top of the "Origin Story" and "Contact Me" sections. The panel reads "Your message has been sent, thank you" with a confirmation button to close the panel and return to the page.',
					caption:
						'After filling out the contact form and clicking "Send Message", the user will receive a confirmation notice in the form of an overlay modal alerting them that their message has been sent.',
				},
				{
					src: "images/projects/details/nicklefritz_detail-15_contact-form-code-sample.png",
					alt: "A JavaScript/React code sample of the code written to create the Contact Form component.",
					caption:
						"This sample of React code displays some of the form handling written for when the user submits a message with the Contact Form. The encode function is ensuring data is formatted properly for submission through Netlify.",
				},
				{
					src: "images/projects/details/nicklefritz_detail-7_music-production-home.png",
					alt: 'The Music Producer page from the Nicklefritz website. It is similar in appearance to the home page, aside from the color theme, which has changed from teal to a moody, deep pink. The artistic rendering of Nicklefritz is still visible in the center with a bio beneath, this time it writes about Nicklefrit\'z endeavor with music production, and below is a single featured video of his Spotify Single Debut for a song titled "The Ballad of Tiny Box Tim".',
					caption:
						'The top of the "Music Producer" Page. Uses reusable components to create a near-identical header to the home page with a profile picture and bio, dynamically changing the content based on the route. Additionally, the color theme has changed to a moody pink by using the Context API to create a "Theme Context", which changes based on the route with React Router.',
				},
				{
					src: "images/projects/details/nicklefritz_detail-8_music-production-player.png",
					alt: 'More content of the Music Producer page is displayed from the Nicklefritz website. A "Socials" section holds multiple icons to various music-related social networks, like "Spotify", or "Soundcloud", and a "Music" section displays a list of demo songs that can be directly played within the browser.',
					caption:
						'The Music Producer page includes more reusable components, like the "Socials" and "Origin Story" sections, but also includes a unique section for music playback. Using a reusable playback component, several demo songs are mapped to their own music player. Local state in the parent component manages the currently-playing song to ensure multiple tracks aren\'t playing simultaneously.',
				},
				{
					src: "images/projects/details/nicklefritz_detail-13_music-player-code.png",
					alt: "A JavaScript/React code sample of the code written to create the music player component.",
					caption:
						"This sample of React code displays some of what was written for creating the music player components responsible for playing the music demos in the browser. The demo songs are served from a backend Express.js server.",
				},
				{
					src: "images/projects/details/nicklefritz_detail-14_music-express-js.png",
					alt: "An Express.js code sample displaying the code written for the backend server responsible for providing the music to the website's frontend.",
					caption:
						"This Express.js code sample creates the backend server responsible for providing music to the website's frontend. While the frontend is hosted on Netlify, the backend for this website is hosted by Railway.",
				},
				{
					src: "images/projects/details/nicklefritz_detail-9_music-production-early-works.png",
					alt: 'Additional content of the Music Producer page from the Nicklefritz website is displayed. This section is titled "Early Works" and features multiple YouTube uploads of early songs written by Nicklefritz on an alternative YouTube channel.',
					caption:
						'The "Early Works" sections display multiple original songs by Nicklefritz from the early years of his writing music. These YouTube uploads are displayed using the same Video component from the home page.',
				},
				{
					src: "images/projects/details/nicklefritz_detail-10_all-pages.png",
					alt: "A screenshot display of the three pages of the Nicklefritz website placed together, side by side to compare their content. From left to right: The Home page (Content Creator page), the Game Developer page, and the Music Producer page.",
					caption:
						"A screenshot display of the three pages of the Nicklefritz website placed together, side by side to compare their content. From left to right: The Home page (Content Creator page), the Game Developer page, and the Music Producer page.",
				},
				{
					src: "images/projects/details/nicklefritz_detail-11_color-theme-context.png",
					alt: "A JavaScript/React code sample of a theme context using the Context API.",
					caption:
						"This sample of React code portrays a portion of the Theme Context created using the React Context API. The code makes use of TypeScript and creates a Theme Map for dynamically changing the values of CSS variables, effectively altering the displayed theme on each page.",
				},
			],
		},
		tagData: {
			primaryTag: TAGS.react,
			otherTags: [
				TAGS.html,
				TAGS.html5,
				TAGS.css,
				TAGS.responsiveWebDesign,
				TAGS.javascript,
				TAGS.react,
				TAGS.typescript,
				TAGS.express,
			],
		},
		links: [
			{ type: iconSocial.GitHub, url: "" },
			{ type: iconSocial.CodePen, url: "" },
			{ type: iconSocial.Website, url: "https://www.nicklefritz.com/" },
		],
	},
	{
		id: 19,
		title: "TypeScript - A Linked List",
		description: "",
		dateCreated: new Date(2025, 7, 31),
		dateUpdated: new Date(2025, 7, 31),
		isFeatured: false,
		isFavorite: false,
		imageData: {
			coverArt: {
				coverArtPath:
					"images/projects/cover-art/ai-cover-art_typescript-linked-list.png",
				isAiGeneratedImage: true,
			},
			imagesPaths: [
				{
					src: "images/projects/details/typescript-linked-list_detail-1_code-sample.png",
					alt: "A code sample of React and TypeScript; the code creates a linked list.",
					caption:
						'This is a simple project; an exercise in using TypeScript to create a linked list. It was created while following a prompt for a coding challenge from the Udemy course "Understanding TypeScript" by instructor, Maximilian Schwarzmüller, an AWS certified Professional Web Developer.',
				},
			],
		},
		tagData: {
			primaryTag: TAGS.typescript,
			otherTags: [TAGS.javascript, TAGS.typescript],
		},
		links: [
			{
				type: iconSocial.GitHub,
				url: "https://github.com/nrcoover/TypeScript_LinkedList",
			},
			{ type: iconSocial.CodePen, url: "" },
			{ type: iconSocial.Website, url: "" },
		],
	},
	// {
	// 	id: 20,
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
	// 				caption: "",
	// 			},
	// 			{
	// 				src: "",
	// 				alt: "",
	// 				caption: "",
	// 			},
	// 			{
	// 				src: "",
	// 				alt: "",
	// 				caption: "",
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
	// 		{ type: iconSocial.GitHub, url: "" },
	// 		{ type: iconSocial.CodePen, url: "" },
	// 		{ type: iconSocial.Website, url: "" },
	// 	],
	// },
];

const PROJECTS_JSON = JSON.stringify(PROJECTS);
export default PROJECTS_JSON;
