/**
 * @type {import('gatsby').GatsbyConfig}
 */
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

import remarkGfm from "remark-gfm";
import remarkFrontmatter from "remark-frontmatter";

const config = {
  siteMetadata: {
    title: `adrianmross`,
    siteUrl: `https://adrianmross.github.io/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
        name: `images`,
        path: `${__dirname}/src/images/`,
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
        // mdxOptions: {
        //   remarkPlugins: [
        //     // Add GitHub Flavored Markdown (GFM) support
        //     remarkGfm, // does not work because passing children instead of body to MDXProvider
        //     remarkFrontmatter,
        //   ],
        // },
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
    "gatsby-transformer-json",
  ],
};

export default config;