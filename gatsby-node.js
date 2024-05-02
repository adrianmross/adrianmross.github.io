const path = require(`path`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      internal: Internal
    }
    type Frontmatter {
      title: String
      slug: String
    }
    type Internal {
      contentFilePath: String
    }
  `);
};


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

  // Query for blog posts
  const blogPostsResult = await graphql(`
    {
      allMdx(filter: { internal: { contentFilePath: { regex: "/blogs/" } } }) {
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

  // Error handling for blog posts
  if (blogPostsResult.errors) {
    reporter.error(
      "There was an issue fetching your blog posts",
      blogPostsResult.errors
    );
    return;
  }

  // Create blog post pages
  const blogPosts = blogPostsResult.data.allMdx.nodes;
  if (blogPosts.length === 0) {
    reporter.warn("There are no blog posts!");
  } else {
    blogPosts.forEach((node) => {
      createPage({
        path: `blogs/${node.frontmatter.slug}`,
        component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
      });
    });
  }

  // Query for project posts
  const projectPostsResult = await graphql(`
    {
      allMdx(
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

  // Error handling for project posts
  if (projectPostsResult.errors) {
    reporter.error(
      "There was an issue fetching your project posts",
      projectPostsResult.errors
    );
    return;
  }

  // Create project post pages
  const projectPosts = projectPostsResult.data.allMdx.nodes;
  if (projectPosts.length === 0) {
    reporter.warn("There are no project posts!");
  } else {
    projectPosts.forEach((node) => {
      createPage({
        path: `projects/${node.frontmatter.slug}`,
        component: `${projectPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
      });
    });
  }

  // Log out the number of posts
  reporter.info(`Number of Blog Posts: ${blogPosts.length}`);
  reporter.info(`Number of Project Posts: ${projectPosts.length}`);
};