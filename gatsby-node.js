const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog and project pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define your templates here
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  const projectPostTemplate = path.resolve(`src/templates/project-post.js`);

  try {
    const result = await graphql(`
      query {
        allMyBlogPosts: allMdx(
          filter: { internal: { contentFilePath: { regex: "/blogs/" } } }
        ) {
          nodes {
            id
            frontmatter {
              slug
              title
            }
            internal {
              contentFilePath
            }
          }
        }
        allMyProjectPosts: allMdx(
          filter: { internal: { contentFilePath: { regex: "/projects/" } } }
        ) {
          nodes {
            id
            frontmatter {
              slug
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `);

    // Error handling
    if (result.errors) {
      reporter.error("There was an issue fetching your posts", result.errors);
      return;
    }

    // Create blog post pages
    const blogPosts = result.data.allMyBlogPosts.nodes;
    blogPosts.forEach((node) => {
      createPage({
        path: `blogs/${node.frontmatter.slug}`,
        component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
      });
    });

    // Create project post pages
    const projectPosts = result.data.allMyProjectPosts.nodes;
    projectPosts.forEach((node) => {
      createPage({
        path: `projects/${node.frontmatter.slug}`,
        component: `${projectPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
      });
    });

    // Log out the number of posts
    reporter.info(`Number of Blog Posts: ${blogPosts.length}`);
    reporter.info(`Number of Project Posts: ${projectPosts.length}`);
  } catch (error) {
    reporter.error("Error creating pages", error);
  }
};
