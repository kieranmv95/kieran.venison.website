import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Not Found" description="Did you get lost?" />
      <div className="center">
        <h1>Are you lost?</h1>
        <p>This page doesn't appear to exist yet!</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </>
  );
}
