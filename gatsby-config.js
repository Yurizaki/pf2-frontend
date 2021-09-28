require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
	spaceId:
		process.env.GATSBY_CONTENTFUL_SPACE_ID ||
		process.env.CONTENTFUL_SPACE_ID,
	accessToken:
		process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN ||
		process.env.CONTENTFUL_ACCESS_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;

module.exports = {
	siteMetadata: {
		url: "https://www.alexholmes.me",
		siteUrl: "https://www.alexholmes.me",
		title: "Alex Holmes · Engineer",
		titleTemplate: "%s · Alex Holmes · Engineer",
		defaultDescription:
			"Home page of Alex Holmes, Engineer and cyber security enthusiast",
		image: "/static/favicon.png",
		defaultImage: "/static/favicon.png",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `Alex Holmes · Engineer`,
				short_name: `AH Engie`,
				start_url: `/`,
				display: `standalone`,
				icon: "static/favicon.png",
				cache_busting_mode: 'none'
			},
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [`/`, `/blogs/`, `/about/`],
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: spaceId,
				accessToken: accessToken,
				enableTags: true,
			},
		},
	],
};
