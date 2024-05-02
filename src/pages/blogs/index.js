// In your Gatsby page (e.g., src/pages/projects.js)
import React from "react";
// import { graphql } from "gatsby";

const BlogsPage = () => {

  return (
    <h1>Blogs</h1>
  )
};

export default BlogsPage;

// const BlogsPage = ({ data }) => {
//   const blogs = data.allFile.nodes.map((node) => node.childMdx);

//   return (
//     <div>
//       <h1>Blogs</h1>
//       <div className="project-cards">
//         {blogs.map((blog) => (
//           <div key={blog.id}>
//             <h2>{blog.frontmatter.title}</h2>
//             <p>{blog.frontmatter.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export const query = graphql`
//   query GetBlogs {
//     allFile(filter: { sourceInstanceName: { eq: "blogs" } }) {
//       nodes {
//         childMdx {
//           id
//           frontmatter {
//             title
//             description
//             coverImage
//             slug
//             date
//           }
//         }
//       }
//     }
//   }
// `;

// export default BlogsPage;
