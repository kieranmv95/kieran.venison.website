import React from 'react';
import { graphql } from 'gatsby';

export default function BlogPostTemplate({ data: { blogPost } }) {
  // TODO: SEO component using excerpt for description
  return <div>Blog Post Template</div>;
}

export const query = graphql`
  query BlogQuery($slug: String) {
    blogPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
