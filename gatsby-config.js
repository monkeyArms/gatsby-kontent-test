/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		/**
		 * gatsby-plugin-sass
		 *
		 * @see https://www.gatsbyjs.org/docs/sass/
		 */
		'gatsby-plugin-sass',

		/**
		 * gatsby-source-kontent
		 *
		 * @see https://github.com/Kentico/kontent-gatsby-packages/tree/master/packages/gatsby-source-kontent#readme
		 * @see https://www.gatsbyjs.org/packages/@kentico/gatsby-source-kontent/#examples-of-usage
		 */
		{
			resolve: `@kentico/gatsby-source-kontent`,
			options: {
				projectId:         `04d0736e-2df0-0078-c8f1-1f5335f3bedf`,
				languageCodenames: [
					'default',
				],
			},
		},

		/**
		 * gatsby-plugin-react-helmet
		 *
		 * @see https://www.gatsbyjs.org/docs/add-page-metadata/
		 */
		'gatsby-plugin-react-helmet',

		/**
		 * gatsby-plugin-html-attributes
		 *
		 * @see https://www.gatsbyjs.org/packages/gatsby-plugin-html-attributes/
		 */
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'en'
			}
		}

	],
}
