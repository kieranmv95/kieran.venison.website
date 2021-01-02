import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-base: 16px;
    --background-color: #fdfdfd;
    --copy-color: #0e0e0e;
    --text-decoration-color: #0e0e0e;
    --tablet-breakpoint: 768px;
    --color-heart: #ff3737;
  }

  html {
    background-color: var(--background-color);
  }
`;

export default GlobalStyles;
