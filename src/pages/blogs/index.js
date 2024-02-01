// In your Gatsby page (e.g., src/pages/projects.js)
import React from "react";
import { graphql } from "gatsby";

const ProjectsPage = ({ data }) => {
  const projects = data.allMdx.nodes;

  return (
    <div>
      <h1>Projects</h1>
      <div className="project-cards">

      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          description
          coverImage
          slug
        }
      }
    }
  }
`;

export default ProjectsPage;
