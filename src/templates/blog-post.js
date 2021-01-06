import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BlogPageStyles = styled.div`
  h1,
  h2 {
    text-align: center;
  }
`;

export default function BlogPostTemplate({ data: { blogPost } }) {
  return (
    <>
      {/* TODO: add the social og fields */}
      <SEO
        title={blogPost.frontmatter.title}
        description={blogPost.frontmatter.description || blogPost.excerpt}
      />
      <BlogPageStyles>
        <h1>{blogPost.frontmatter.title}</h1>
        <p className="center">{blogPost.frontmatter.date}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <article
          className="article"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: blogPost.html }}
        />
      </BlogPageStyles>
    </>
  );
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
