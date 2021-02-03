import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const ContentCreationStyles = styled.div`
  margin-bottom: 4rem;
  .gatsby-image-wrapper {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);
  }
`;

const VideosStyles = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-gap: 2rem;
  > a {
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      text-decoration: none;
      display: grid;
      grid-template-columns: 250px 1fr;
      grid-gap: 1rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .video__meta {
    display: none;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      display: grid;
      grid-template-rows: auto 1fr auto;
      height: 100%;
    }
  }

  .video__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }

  .video__description {
    margin-top: 0.5rem;
  }

  .video__runtime {
    margin: 0;
  }
`;

function VideoThumbnail({ url, fluid, title, description, runtime }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="video">
      <div>
        <Img fluid={fluid} alt="Styled Components thumbnail" />
      </div>
      <div className="video__meta">
        <p className="video__title">{title}</p>
        <p className="video__description">{description}</p>
        <p className="video__runtime">Length: {runtime}</p>
      </div>
    </a>
  );
}

export default function ContentCreationPage({ data }) {
  return (
    <ContentCreationStyles>
      <SEO
        title="Content Cretion"
        description="An overview of what content creation work Kieran does."
      />
      <h1 className="center">Content Creation</h1>
      <div className="article">
        <p>
          Content creation is my latest venture. I started a YouTube channel at
          the beginning of 2021. My aim is to use it as self documentation and
          to make videos on things I have found useful during my own
          work/projects
        </p>
        <p>If I find it useful someone else must find it useful.</p>
        <p>
          Check out my{' '}
          <a
            href="https://www.youtube.com/channel/UCxX-3WG1vKNVJjGi2mwRziQ"
            target="_blank"
            rel="noreferrer"
          >
            YouTube channel
          </a>
        </p>
        <h2>Videos</h2>
        <p>Click to watch on YouTube!</p>
        <VideosStyles>
          <VideoThumbnail
            url="https://www.youtube.com/watch?v=jeBgbFS5QFQ"
            title="Gatsby JS Course: 2.5 "
            description="In this video we will setup GitHub to store our project whilst we continue with the series."
            runtime="5:15"
            fluid={data.gatsbyCourse3.childImageSharp.fluid}
          />
          <VideoThumbnail
            url="https://youtu.be/2PYvMe9XQhc"
            title="Gatsby JS Course: 2. Project Setup"
            description="In the second video of the Gatsby JS course we will setup our project"
            runtime="12:06"
            fluid={data.gatsbyCourse2.childImageSharp.fluid}
          />
          <VideoThumbnail
            url="https://www.youtube.com/watch?v=F7C3IQo4HqU"
            title="Gatsby JS Course: 1. Project Introduction"
            description="Join me in this video series to learn the fundamentals of Gatsby"
            runtime="2:37"
            fluid={data.gatsbyCourse.childImageSharp.fluid}
          />
          <VideoThumbnail
            title="Styled Components"
            url="https://youtu.be/30F-yfcj-CE"
            description="How to theme your site based on user OS preference"
            runtime="1:12:22"
            fluid={data.styledComponents.childImageSharp.fluid}
          />
        </VideosStyles>
      </div>
    </ContentCreationStyles>
  );
}

export const query = graphql`
  query {
    styledComponents: file(
      relativePath: { eq: "projects/StyledComponents.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsbyCourse: file(relativePath: { eq: "projects/project-intro.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsbyCourse2: file(relativePath: { eq: "projects/project-setup.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsbyCourse3: file(relativePath: { eq: "projects/github-setup.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
