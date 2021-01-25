import { css } from 'styled-components';

const typography = css`
  html {
    font-size: var(--font-base);
    font-family: 'Open Sans';
    color: var(--copy-color);
  }
  p,
  li {
    letter-spacing: 0.5px;
    line-height: 1.7;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-style: italic;
  }

  h1 {
    font-weight: 300;
    font-size: 1.8em;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      font-size: 2.3em;
    }
  }

  h2 {
    font-size: 1.6em;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      font-size: 1.7em;
    }
  }

  h3 {
    font-weight: 300;
    font-size: 1.5em;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      font-size: 1.6em;
    }
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

export default typography;
