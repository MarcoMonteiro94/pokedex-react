import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  width: 100%;
  background-color: #b04a5a;
  position: fixed;
  z-index: 3;
`;

export const MobileButton = styled.button`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0.2rem;
  margin-left: 1rem;
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  ${(props) =>
    props.isActive
      ? css`
          outline: none;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 0 3px #cf929c;
          border-color: #b04a5a;
          color: #b04a5a;

          &::after {
            transform: rotate(90deg);
            width: 4px;
            height: 4px;
            box-shadow: 0 8px currentColor, 0 -8px currentColor;
          }
        `
      : ""}
`;
