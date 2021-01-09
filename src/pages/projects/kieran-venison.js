import React from 'react';
import SEO from '../../components/SEO';

export default function FrontEndWizardPage() {
  return (
    <>
      <SEO
        title="This site"
        description="An overview of this website and the technologies used to create it"
      />
      <h1 className="center">Kieran Venison Portolio</h1>
      <div className="article">
        <h2>The Stack</h2>
        <ul>
          <li>React</li>
          <li>Styled Components</li>
          <li>Gatsby/GraphQL</li>
          <li>Hosted on Netlify</li>
        </ul>
        <h2>Description</h2>
        <p>
          Now on its 50th iteration (probably) this website is where I share my
          skills and write about random crap that interests me! So please do
          check back from time to time and see whats going down.
        </p>
        <h2>How it works</h2>
        <p>
          This is a simple static site so theres not a hell of a lot to it. Some
          of the things worth mentioning are:
        </p>
        <ul>
          <li>
            The blogs are created from markdown files in a ./blog directory. (I
            don't need a CMS for my infrequent posting style). This then uses
            gatsby-transformer-remark plugin to read the markdown, convert it
            then throw it into graphql for me to create the article pages on
            build
          </li>
          <li>
            I use styled-components and theme them based of the users light/dark
            OS preferences (if the browser they are running on supports it) I
            wrote an article about the setup of this!
          </li>
        </ul>
        <h2>What did I learn?</h2>
        <p>
          I think the main thing I have learnt from building my public website
          is that simplicity matters, originally I went with bold colours and
          designs etc etc, now its a very simple text based website with a few
          images and code snippets splashed around.
        </p>
        <p>
          I learned Gatsby quite well. Originally I copied a blog template and
          used that for around a year. After that I deleted it and wrote it from
          the scratch myself because I couldn't understand some of the stuff
          going on on my own site! Doing this got me used to the ins and outs of
          the gatsby API and some of the nifty little things it lets you do
        </p>
      </div>
    </>
  );
}
