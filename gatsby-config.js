/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `adrianmross`,
    siteUrl: `https://adrianmross.github.io/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx"],
        gatsbyRemarkPlugins: [
          // You can add any necessary plugins here for processing MDX content.
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 800,
    //         },
    //       },
    //     ],
    //   },
    // },
    // `gatsby-plugin-mdx`,
    "gatsby-transformer-json",
  ],
};