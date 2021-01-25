import { createGlobalStyle } from 'styled-components';
import article from './article';
import typography from './typography';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-base: ${({ theme }) => theme.font_base};
    --background-color: ${({ theme }) => theme.background_color};
    --background-color-offset: ${({ theme }) => theme.background_color_offset};
    --copy-color: ${({ theme }) => theme.copy_color};
    --copy-color-disabled: ${({ theme }) => theme.copy_color_disabled};
    --text-decoration-color: ${({ theme }) => theme.text_decoration_color};
    --color-heart: ${({ theme }) => theme.color_heart};
    --table-header: ${({ theme }) => theme.table_header};
    --table-header-copy: ${({ theme }) => theme.table_header_copy};
  }

  html {
    background-color: var(--background-color);
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  ${typography}
  ${article}
`;

export default GlobalStyles;
