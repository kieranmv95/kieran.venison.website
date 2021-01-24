import { graphql } from 'gatsby';
import React from 'react';
import BlogPost from '../components/BlogPost';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

export default function Homepage({ data }) {
  const { posts, totalCount } = data.allMarkdownRemark;

  const pageSize = parseInt(process.env.GATSBY_ARTICLES_PER_PAGE);
  const pageCount = Math.ceil(totalCount / pageSize);

  return (
    <>
      <SEO title="Home" />
      <div>
        {posts.map(({ node }) => (
          <BlogPost key={node.id} post={node} />
        ))}
        <Pagination base="blog" pages={pageCount} />
      </div>
    </>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 10) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $pageSize
      skip: $skip
    ) {
      totalCount
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
