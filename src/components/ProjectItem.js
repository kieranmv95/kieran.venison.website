import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ProjectItemStyles = styled.div`
  text-align: center;
  a {
    display: block;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }
  .image {
    display: inline-block;
    background: var(--background-color-offset);
    border-radius: 999rem;
    overflow: hidden;
    padding: 1rem;
    position: relative;
    margin-top: 1rem;
  }
  .gatsby-image-wrapper {
    border-radius: 999rem;
    overflow: hidden;
    width: 125px;
    height: 125px;
    transform: scale(1);
    transition: transform 0.2s;
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.05);
    }
  }
`;

export default function ProjectItem({ title, img, link }) {
  return (
    <ProjectItemStyles>
      <Link to={link}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className="image">
          <Img fluid={img} alt={title} />
        </div>
      </Link>
    </ProjectItemStyles>
  );
}
