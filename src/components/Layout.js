import React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';
import Typography from '../styles/Typography';

const BodyStyles = styled.div`
  min-height: calc(100vh - 2px);
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

export default function Layout({ children }) {
  // TODO: theme provider which swiches to lite and dark respective of OS preferences
  // TODO: Manual toggle to light theme

  return (
    <BodyStyles>
      <GlobalStyles />
      <Typography />
      <Header />
      <main>{children}</main>
      <Footer />
    </BodyStyles>
  );
}
