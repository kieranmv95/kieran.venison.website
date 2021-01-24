import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import thisIsMe from '../../assets/this-is-me.png';

const BlogPageStyles = styled.div`
  h1,
  h2 {
    text-align: center;
  }
`;

export default function BlogPostTemplate({ data: { blogPost, site } }) {
  return (
    <>
      <SEO
        title={blogPost.frontmatter.title}
        description={blogPost.frontmatter.description || blogPost.excerpt}
      >
        <meta property="og:title" content={blogPost.frontmatter.title} />
        <meta property="og:type" content="website" />
        <meta
          property="of:description"
          content={blogPost.frontmatter.description || blogPost.excerpt}
        />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content={`${site.siteMetadata.siteUrl}/blog${blogPost.fields.slug}`}
        />
        <meta property="og:site_name" content="Kieran Venison" />
        <meta name="twitter:image" content={thisIsMe} />
      </SEO>
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
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
