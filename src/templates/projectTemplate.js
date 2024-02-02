import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ProjectPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <p>Project</p>
      {children}
    </Layout>
  );
};

export const query = useStaticQuery(graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`);

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default ProjectPost;