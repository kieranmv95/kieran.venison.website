import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  padding: 2rem 0 3rem 0;
  text-align: center;
  .title {
    display: inline-block;
    text-decoration: none;
    font-style: italic;
    font-size: 2rem;
    font-size: clamp(1.8rem, 5vw, 2.3rem);
    font-weight: 300;
  }
  .image-kieran {
    display: inline-block;
    position: relative;
    margin-bottom: 1rem;
  }
  .image-kieran .gatsby-image-wrapper {
    margin: 0 auto;
    height: 125px;
    height: clamp(75px, 15vw, 125px);
    width: 125px;
    width: clamp(75px, 15vw, 125px);
  }
  .link {
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
    border-radius: 999rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .link--left {
    left: -55px;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      left: -65px;
    }
  }
  .link--right {
    right: -55px;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      right: -65px;
    }
  }

  .link .gatsby-image-wrapper {
    height: 60px;
    width: 60px;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      height: 75px;
      width: 75px;
    }
  }
  .title,
  .gatsby-image-wrapper {
    margin-bottom: 1rem;
  }
  nav ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }
  nav ul li a {
    padding: 0.5rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      padding: 0.75rem;
    }
  }
`;

export default function Header() {
  const { logo, youtube, dev } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "kieran-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 125, maxHeight: 125) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      youtube: file(relativePath: { eq: "projects/youtube.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dev: file(relativePath: { eq: "projects/dev.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HeaderStyles>
      <Link to="/" className="title">
        Kieran Venison
      </Link>
      <div className="image-holder">
        <div className="image-kieran">
          <a
            className="link link--left"
            href="https://www.youtube.com/channel/UCxX-3WG1vKNVJjGi2mwRziQ"
            target="_blank"
            rel="noreferrer"
          >
            <Img fluid={youtube.childImageSharp.fluid} alt="Youtube logo" />
          </a>
          <a
            className="link link--right"
            href="https://dev.to/kieranmv95"
            target="_blank"
            rel="noreferrer"
          >
            <Img fluid={dev.childImageSharp.fluid} alt="DevTo logo" />
          </a>
          <Link to="/">
            <Img fluid={logo.childImageSharp.fluid} alt="kieran venison" />
          </Link>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/uses">Uses</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
}
