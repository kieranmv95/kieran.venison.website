import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ProjectItem from '../../components/ProjectItem';
import SEO from '../../components/SEO';

const ProjectGridStyles = styled.div`
  margin: 2.75rem 0 3rem 0;
  display: grid;
  grid-gap: 3.5rem;
  @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${(props) => props.theme.desktop_breakpoint}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function ProjectsPage({ data }) {
  return (
    <>
      <SEO title="Projects" description="Check out what I have built!" />
      <h1 className="center">Projects</h1>
      <p className="center">
        Click any of the icons below for more information on a project
      </p>
      <ProjectGridStyles>
        <ProjectItem
          title="Content Creation"
          img={data.youtube.childImageSharp.fluid}
          link="/projects/content-creation"
        />
        <ProjectItem
          title="Kieran Venison"
          img={data.kieranVenison.childImageSharp.fluid}
          link="/projects/kieran-venison"
        />
        <ProjectItem
          title="Front End Wizard"
          img={data.frontEndWizard.childImageSharp.fluid}
          link="/projects/front-end-wizard"
        />
      </ProjectGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    frontEndWizard: file(
      relativePath: { eq: "projects/front-end-wizard-logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kieranVenison: file(relativePath: { eq: "kieran-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
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
  }
`;
