import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-base: ${({ theme }) => theme.font_base};
    --background-color: ${({ theme }) => theme.background_color};
    --copy-color: ${({ theme }) => theme.copy_color};
    --text-decoration-color: ${({ theme }) => theme.text_decoration_color};
    --color-heart: ${({ theme }) => theme.color_heart};
  }

  html {
    background-color: var(--background-color);
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
