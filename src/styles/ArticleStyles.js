import { createGlobalStyle } from 'styled-components';

const ArticleStyles = createGlobalStyle`
  .article {
    max-width: 720px;
    margin: 0 auto;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 1.125em 0 1.25em;
    }
    .gatsby-resp-image-wrapper {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
      width: 100%;
    }
    ul {
      padding-left: 1.1rem;
    }
    ul li:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    .mobile-screenshot-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1em;
    }
    table th {
      background: var(--table-header);
      color: var(--table-header-copy);
      font-weight: 700;
    }
    table td,
    table th {
      padding: 6px;
      border: 1px solid #ccc;
      text-align: left;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    tr:nth-of-type(odd) {
      background: var(--background-color-offset);
    }
    tr:nth-of-type(even) {
      background: var(--background-color);
    }
  }
`;

export default ArticleStyles;
