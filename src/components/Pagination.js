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

  ul li a {
    display: inline-block;
    padding: 0.5rem;
    @media (min-width: ${(props) => props.theme.tablet_breakpoint}) {
      padding: 0.75rem;
    }
  }
`;

export default function Pagination({ base, pages }) {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to={`/${base}/1`}>Prev</Link>
        </li>
        {Array.from({ length: pages }).map((_, i) => (
          <li>
            <Link to={`/${base}/${i + 1}`}>{i + 1}</Link>
          </li>
        ))}
        <li>
          <Link to={`/${base}/2`}>Next</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
