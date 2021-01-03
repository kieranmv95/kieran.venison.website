import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: none;
  display: grid;
  grid-template-columns: auto 1fr;
  width: auto;
  gap: 0.5rem;
  font-size: 0.8rem;
  align-items: center;
  .switcher {
    position: relative;
    width: 55px;
    height: 28px;
    padding: 0;
    background-color: var(--copy-color);
    border-radius: 999em;
  }
  div.toggler {
    z-index: 1;
    width: 20px;
    height: 20px;
    border-radius: 999em;
    background-color: var(--background-color);
    position: absolute;
    top: 4px;
    left: 4px;
    transition: left 0.3s;
    &.active {
      left: calc(100% - 26px);
    }
  }
  .text {
    color: var(--copy-color);
  }
`;

export default function Switch({
  onClick,
  title = 'button',
  toggled,
  children,
}) {
  return (
    <ButtonStyles type="button" onClick={onClick} title={title}>
      <div className="switcher">
        <div className={`toggler ${toggled && 'active'}`} />
      </div>
      <div className="text">{children}</div>
    </ButtonStyles>
  );
}
