import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const BlogStyles = styled.article`
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
  &:not(:last-of-type) {
    margin-bottom: 4rem;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  h3 {
    font-weight: 600;
  }
`;

export default function BlogPost({ post }) {
  const { fields, frontmatter } = post;

  return (
    <BlogStyles>
      <Link to={`/blog${fields.slug}`}>
        <header>
          <h3>{frontmatter.title}</h3>
          <small>{frontmatter.date}</small>
        </header>
        <section>
          <p>{frontmatter.description || post.excerpt}</p>
        </section>
      </Link>
    </BlogStyles>
  );
}
