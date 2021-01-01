import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  );
}
