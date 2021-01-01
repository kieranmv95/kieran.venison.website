import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #fdfdfd;
    --copy-color: #0e0e0e;
    --text-decoration-color: #ff4f4f;
  }

  html {
    background-color: var(--background-color);
  }
`;

export default GlobalStyles;
