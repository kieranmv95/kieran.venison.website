import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const FrontEndWizardPageStyles = styled.div`
  .gatsby-image-wrapper {
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.05);
  }
`;

export default function FrontEndWizardPage({ data }) {
  return (
    <FrontEndWizardPageStyles>
      <SEO
        title="Front End Wizard"
        description="An overview of the Front end wizard project created by kieran venison"
      />
      <h1 className="center">Front End Wizard</h1>
      <Img
        fluid={data.few.childImageSharp.fluid}
        alt="Screenshot of the front end wizard project"
      />
      <div className="article">
        <p>
          <a
            href="https://github.com/kieranmv95/Front-End-Wizard"
            target="_blank"
            rel="noreferrer"
          >
            Check out the frontend project on GitHub
          </a>
        </p>
        <p>
          <a
            href="https://github.com/kieranmv95/Front-End-Wizard-API"
            target="_blank"
            rel="noreferrer"
          >
            Check out the backend project on GitHub
          </a>
        </p>
        <h2>The Stack</h2>
        <p>
          <b>Frontend</b>
        </p>
        <ul>
          <li>Parcel</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Redux</li>
          <li>Hosted on Netlify</li>
        </ul>

        <p>
          <b>Backend</b>
        </p>
        <ul>
          <li>MongoDB</li>
          <li>Node/Express API</li>
          <li>Hosted on heroku</li>
        </ul>

        <h2>Description</h2>
        <p>
          Although no more, Front End Wizard was a project I created to act as
          my bookmarks and share them with the world, The project code lives on
          through github so please do check it out! If it looks a bit out dated
          its because its no longer being maintained.
        </p>
        <h2>How it worked</h2>
        <p>
          On the backend I had a simple Node/Express Typescript API hosted in
          heroku which could do 3 simple things:
        </p>
        <ul>
          <li>Add Links with description, url, title and category</li>
          <li>Retrieve links by category</li>
          <li>Retrieve categories</li>
        </ul>
        <p>
          These all used a flat mongodb store and basically jsut fired them all
          into a big dump, there was never going to be that many links that
          structure would be a concern.
        </p>
        <p>
          On the frontend I had a React application. This was setup with
          Typescript and Redux. As a precursor some might say redux was overkill
          for this scale applciation and you should just use prop drilling or
          the context api (to which I agree). It was used so I could learn how
          to use TypeScript with redux and its hooks.
        </p>
        <p>
          The front end had a landing page which hit the get categories
          endpoints and then render them out onto the home page (see the main
          screenshot at the top of the page)
        </p>
        <p>
          When you hit any of the links on the home page it fired you off to the{' '}
          <b>category/:name</b> route, This stripped off the :name paramater and
          the called the get links by category endpoint and displayed all the
          links, simple!
        </p>
        <h2>What did I learn?</h2>
        <p>
          Originally this project was a horrendous react applicaiton, it was the
          first react app I ever made. Then I refactored it to be what it is
          now, a relativly slick, performant react app, albeit a small one. So
          the main thing I learned was TypeScript on the rebuild and how scary
          it is to look at your old code (im talking like 2+ year old here)
        </p>
        <p>
          I learnt that deploying anything on Netlify is probably one of the
          easiest things you can do. For this project i literally just connected
          it up to github told it what my build command was, told it to do it
          whenever I merge to master and that was it
        </p>
        <p>
          Crucially <b>a crap project thats live</b> is better than an amazing
          project that never sees the light of day. I like to make a lot of
          things and create projects that never see the light of the day and its
          a waste! The first iteration of this project was utterly rubbish, but
          I put it live anyway and blogged about it! This in turned gave me an
          accountability to keep it updated and iterate and improve on it,{' '}
          <b>the best decision I made was to release crap code</b>
        </p>
      </div>
    </FrontEndWizardPageStyles>
  );
}

export const query = graphql`
  query {
    few: file(relativePath: { eq: "projects/front-end-wizard.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
