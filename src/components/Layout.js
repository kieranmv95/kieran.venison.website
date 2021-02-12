import React from 'react';
import 'normalize.css';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Header from './Header';
import useTheme from '../hooks/useTheme';
import Switch from './Switch';
import theme from '../styles/theme';
import MessageBanner from './MessageBanner';

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
        <div>
          <MessageBanner duration={10000}>
            <p>
              🎉 Please check out my new <b>FREE</b> YouTube course on GatsbyJS!{' '}
              <a
                href="https://www.youtube.com/watch?v=F7C3IQo4HqU&list=PLES9xDLeGEFUE2kfe17OBS5D18cwSUCqR"
                target="_blank"
                rel="noreferrer"
              >
                Click here to watch! 🎉
              </a>
            </p>
          </MessageBanner>
          <Header />
        </div>
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
