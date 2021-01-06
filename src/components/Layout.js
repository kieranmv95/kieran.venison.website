import React from 'react';
import 'normalize.css';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';
import Typography from '../styles/Typography';
import useTheme from '../hooks/useTheme';
import Switch from './Switch';
import theme from '../styles/theme';
import ArticleStyles from '../styles/ArticleStyles';

const BodyStyles = styled.div`
  min-height: calc(100vh - 2px);
  display: grid;
  grid-template-rows: auto 1fr auto;
  .switch {
    display: grid;
    justify-content: center;
    padding: 1rem;
  }
  main {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default function Layout({ children }) {
  const [themeName, toggleTheme] = useTheme();

  // whilst themeName is loading show nothing
  if (!themeName) return null;

  return (
    <ThemeProvider theme={theme[themeName]}>
      <BodyStyles>
        <GlobalStyles />
        <Typography />
        <ArticleStyles />
        <Header />
        <main>{children}</main>
        <div>
          <Footer />
          <div className="switch">
            <Switch
              onClick={toggleTheme}
              toggled={themeName === 'light'}
              title={`Toggle theme to ${
                themeName === 'light' ? 'dark' : 'light'
              }`}
            >
              Toggle {themeName === 'light' ? 'dark' : 'light'} theme
            </Switch>
          </div>
        </div>
      </BodyStyles>
    </ThemeProvider>
  );
}
