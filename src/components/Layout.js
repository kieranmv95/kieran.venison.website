import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  // TODO: theme provider which swiches to lite and dark respective of OS preferences
  // TODO: Manual toggle to light theme

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      {children}
      <Footer />
    </>
  );
}
