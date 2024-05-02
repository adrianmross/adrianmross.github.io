import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import Seo from "../components/seo";
require(`katex/dist/katex.min.css`);

const ProjectPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <p>Project</p>
      <MDXProvider>{children}</MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default ProjectPost;