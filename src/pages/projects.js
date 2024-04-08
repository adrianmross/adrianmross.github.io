// In your Gatsby page (e.g., src/pages/projects.js)
import React from "react";
import { graphql } from "gatsby";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = ({ data }) => {
  const projects = data.allFile.nodes.map((node) => node.childMdx);

  return (
    <div>
      <h1>Projects</h1>
      <div className="project-cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project.frontmatter} />
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query GetProjects {
    allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      nodes {
        childMdx {
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
  }
`;

export default ProjectsPage;
