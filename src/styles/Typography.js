import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html {
    font-size: var(--font-base);
    font-family: 'Open Sans';
    color: var(--copy-color);
  }
  p, li { letter-spacing: 0.5px; }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--copy-color);
    text-decoration-color: var(--text-decoration-color);
    text-decoration-skip-ink: none;
  }

  .center {
    text-align: center;
  }
`;

export default Typography;
