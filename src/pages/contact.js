import React from 'react';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="I'm always available to chat so please reach out"
      />
      <h1 className="center">Contact</h1>
      <div className="article">
        <p>Don't be a stranger, say hello!</p>
        <p>
          As we found out in 2020 social interaction is actually kind of a big
          deal, so let's talk about coding, gaming or absolutely anything.
        </p>
        <p>
          No fancy forms here, just send me an email directly or hit me up on
          twitter, I look forward to chatting.
        </p>
        <p>
          <b>Email:</b>{' '}
          <a href="mailTo:venison@hey.com" target="_blank" rel="noreferrer">
            venison@hey.com
          </a>
        </p>
        <p>
          <b>Twitter</b>{' '}
          <a
            href="https://twitter.com/kieranmv95"
            target="_blank"
            rel="noreferrer"
          >
            @kieranmv95
          </a>
        </p>
      </div>
    </>
  );
}
