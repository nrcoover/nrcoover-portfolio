import { CATEGORIES } from "../../constants/projectCategories";
import { TAGS } from "../../constants/tags";

export const CATEGORY_TAGS_MAP: Record<string, string[]> = {
	[CATEGORIES.react]: [
		TAGS.react,
		TAGS.redux,
		TAGS.mobx,
		TAGS.nextjs,
		TAGS.vite,
		TAGS.webpack,
		TAGS.parcel,
		TAGS.babel,
		TAGS.chakraui,
	],
	[CATEGORIES.typeScript]: [TAGS.typescript],
	[CATEGORIES.javaScript]: [
		TAGS.javascript,
		TAGS.jquery,
		TAGS.bootstrap,
		TAGS.materialui,
	],
	[CATEGORIES.simpleWeb]: [
		TAGS.html,
		TAGS.html5,
		TAGS.css,
		TAGS.sass,
		TAGS.scss,
		TAGS.responsiveWebDesign,
		TAGS.tailwind,
	],
	[CATEGORIES.cSharp]: [TAGS.csharp, TAGS.dotnet],
	[CATEGORIES.ai]: [
		/* AI-related TAGS if you add them */
	],
	[CATEGORIES.featured]: [], // leave empty, maybe set manually
	[CATEGORIES.newArrivals]: [], // could be date-based instead of tags
	[CATEGORIES.miniGames]: [], // could be project-type based
};

// TODO: finish categorizing these tags
export const test = [
	// Frontend
	TAGS.less,
	TAGS.vue,
	TAGS.angular,
	TAGS.svelte,
	TAGS.nextjs,
	TAGS.nuxtjs,
	TAGS.redux,
	TAGS.mobx,
	TAGS.jquery,
	TAGS.bootstrap,
	TAGS.tailwind,
	TAGS.materialui,
	TAGS.chakraui,
	TAGS.vite,
	TAGS.webpack,
	TAGS.parcel,
	TAGS.babel,

	// Backend
	TAGS.nodejs,
	TAGS.express,
	TAGS.nestjs,
	TAGS.fastify,
	TAGS.hapi,
	TAGS.koa,
	TAGS.php,
	TAGS.laravel,
	TAGS.ruby,
	TAGS.rails,
	TAGS.python,
	TAGS.django,
	TAGS.flask,
	TAGS.fastapi,
	TAGS.csharp,
	TAGS.dotnet,
	TAGS.java,
	TAGS.spring,
	TAGS.golang,
	TAGS.rust,

	// Full Stack / Other
	TAGS.graphql,
	TAGS.restapi,
	TAGS.apollo,
	TAGS.prisma,
	TAGS.mongodb,
	TAGS.postgresql,
	TAGS.mysql,
	TAGS.sqlite,
	TAGS.firebase,
	TAGS.supabase,
	TAGS.aws,
	TAGS.azure,
	TAGS.docker,
	TAGS.kubernetes,
	TAGS.git,
	TAGS.github,
	TAGS.gitlab,
	TAGS.bitbucket,
	TAGS.jest,
	TAGS.mocha,
	TAGS.cypress,
	TAGS.playwright,
	TAGS.storybook,
];
