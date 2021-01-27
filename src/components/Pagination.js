import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin-top: 3rem;
  margin-bottom: 4rem;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    justify-content: center;
  }

  ul li a,
  ul li div {
    display: inline-block;
    padding: 0.5rem;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      padding: 0.75rem;
    }
  }
  ul li div {
    color: var(--copy-color-disabled);
  }
`;

export default function Pagination({ base, pages, currentPage }) {
  return (
    <NavStyles>
      <ul>
        <li>
          {currentPage > 1 && (
            <Link to={`/${base}/${currentPage - 1}`}>Prev</Link>
          )}
          {currentPage === 1 && <div>Prev</div>}
        </li>
        {Array.from({ length: pages }).map((_, i) => (
          <li key={i.toString()}>
            <Link to={`/${base}/${i + 1}`}>{i + 1}</Link>
          </li>
        ))}
        <li>
          {currentPage < pages && (
            <Link to={`/${base}/${currentPage + 1}`}>Next</Link>
          )}
          {currentPage === pages && <div>Next</div>}
        </li>
      </ul>
    </NavStyles>
  );
}
