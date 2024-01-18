/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `adrianmross`,
    siteUrl: `https://adrianmross.github.io/`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-chakra-ui",
    "gatsby-plugin-anchor-links",
  ]
};