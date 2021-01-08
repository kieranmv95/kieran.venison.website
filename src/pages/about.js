import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import CareerBlock from '../components/CareerBlock';

const HeaderStyles = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h1 {
    margin-bottom: 1rem;
  }
`;

const CareerStyles = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  margin-bottom: 3rem;
`;

export default function AboutPage({ data }) {
  return (
    <>
      <SEO
        title="About"
        description="Find out what makes me tick and where I have worked"
      />
      <HeaderStyles>
        <h1>About</h1>
        <a href="#experience">Just show me the experience</a>
      </HeaderStyles>
      <Img
        fluid={data.thisIsMe.childImageSharp.fluid}
        alt="Kieran sat at PC screen"
      />
      <div className="article">
        <p>
          I'm a self taught front end developer based in Manchester, UK. I work
          building digital products for both businesses and consumer use. I'm
          confident, naturally curious, and improving on my skills day by day.
        </p>
        <p>
          I am a confident, outgoing, self taught front end developer. I strive
          for quality both in design and performance. I have experience
          following kanban and scrum methodologies
        </p>
        <h3>Skills</h3>
        <p>
          My skillset lies predominantly around JavaScript and React. I have a
          strong understanding of JS and have been writing react applications
          for the past couple of years.
        </p>
        <p>
          More recently. I have started progressing the full stack side of
          JavaScript development using AWS, node and typescript to develop
          API's.
        </p>
        <p>
          I have a strong understanding of HTML and CSS and have used a range of
          CSS pre-processors and methodologies in the past. Mainly SASS and the
          BEM CSS methodology.
        </p>
        <h3>Other</h3>
        <p>
          I recently started writing a newsletter to show the world what I do
          outside of work on a week by week basis so please head to the homepage
          and check that out.
        </p>
        <p>
          At UpFront conf 2019 I Delivered a lightning talk on Node, Express and
          why projects fail. This talk was a guide on writing your own API's
          using front end technologies.
        </p>
        <h3>Outside the (home) office</h3>
        <p>
          When I'm not working I like to work on small development projects and
          upskill on technologies. At the moment that looks like upskilling in
          serverless, AWS, node and ts. When I'm not working on personal
          projects I enjoy Golf, Hiking and Computer Gaming.
        </p>
        <h2 id="experience">Career History</h2>
        <CareerStyles>
          <CareerBlock
            company="Mojo Mortgages"
            title="Senior Software Engineer"
            date="2021 - Current"
            img={data.mojo.childImageSharp.fluid}
          >
            I'm still new at Mojo and there's a lot to do! Check back soon.
          </CareerBlock>
          <CareerBlock
            company="AND digital"
            title="Consultant Product Developer"
            date="2019 - 2021"
            img={data.and.childImageSharp.fluid}
          >
            In this role I worked in a range of languages both backend and
            frontend. I also worked in a range of businesses and sectors
            spanning from gambling to healthcare. Here I followed the scrum
            methodology whilst trying to implement it on the client site and
            upskill existing staff.
          </CareerBlock>
          <CareerBlock
            company="Sorted"
            title="Frontend developer"
            date="2018 - 2019"
            img={data.sorted.childImageSharp.fluid}
          >
            In this role I worked in react to build a dashboard based product. I
            also used Gatsby js to rebuild the company website as a static site.
          </CareerBlock>
          <CareerBlock
            company="CarFinance 247"
            title="Frontend developer"
            date="2015 - 2018"
            img={data.cf247.childImageSharp.fluid}
          >
            In this role I was responsible for a variety of things. I maintained
            existing products and build internal and customer facing solutions.
            I was responsible for the front end of CarFinance247 website,
            CarFinance 247 appform, CarFinance 247 members area, Carcraft
            website and many internal projects.
          </CareerBlock>
          <CareerBlock
            company="Diversity Travel"
            title="Junior Web Developer"
            date="2014 - 2015"
            img={data.diversity.childImageSharp.fluid}
          >
            In this role I rebuilt the company intranet from scratch using the
            WordPress framework. I am also on an ongoing project to improve the
            SEO of the external website. I have been using mainly PHP, mySQL and
            Apache, WAMP whilst in this position.
          </CareerBlock>
          <CareerBlock
            company="Web Applications UK"
            title="Apprentice"
            date="2013 - 2014"
            img={data.wauk.childImageSharp.fluid}
          >
            Learning the methods used by the company to create, manage and store
            web applications Learning to create web applications using HTML,
            CSS, ASP, C#, SQL, JavaScript and JQuery.
          </CareerBlock>
        </CareerStyles>
      </div>
      <Img fluid={data.manchester.childImageSharp.fluid} />
    </>
  );
}

export const query = graphql`
  query {
    thisIsMe: file(relativePath: { eq: "this-is-me.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wauk: file(relativePath: { eq: "companies/WAUK.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sorted: file(relativePath: { eq: "companies/sorted.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mojo: file(relativePath: { eq: "companies/mojo.png" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    diversity: file(relativePath: { eq: "companies/diversity.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cf247: file(relativePath: { eq: "companies/CF247.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    and: file(relativePath: { eq: "companies/AND.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manchester: file(relativePath: { eq: "manchester.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
