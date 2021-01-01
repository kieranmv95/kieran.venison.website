import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  .gatsby-image-wrapper {
    width: 125px;
    height: 125px;
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
      <h1>Header</h1>
      <Img fluid={logo.childImageSharp.fluid} />
    </HeaderStyles>
  );
}
