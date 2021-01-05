import { graphql } from 'gatsby';
import React from 'react';
import BlogPost from '../components/BlogPost';
import SEO from '../components/SEO';

export default function Homepage({ data }) {
  const { posts } = data.allMarkdownRemark;

  return (
    <>
      <SEO title="Home" />
      {posts.map(({ node }) => (
        <BlogPost key={node.id} post={node} />
      ))}
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      posts: edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 130)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
