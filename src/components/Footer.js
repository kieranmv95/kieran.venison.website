import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding: 1rem 1rem 0 1rem;
  span {
    color: var(--color-heart);
  }
`;

export default function Footer() {
  return (
    <FooterStyles className="center">
      Kieran Venison. {new Date().getFullYear()}, Built with <span>❤</span>
    </FooterStyles>
  );
}
