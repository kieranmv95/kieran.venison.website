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
  .gatsby-image-wrapper {
    margin: 0 auto;
    height: 125px;
    height: clamp(75px, 15vw, 125px);
    width: 125px;
    width: clamp(75px, 15vw, 125px);
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
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "kieran-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 125, maxHeight: 125) {
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
      <Img fluid={logo.childImageSharp.fluid} alt="kieran venison" />
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
