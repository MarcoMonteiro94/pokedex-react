import styled from "styled-components";
import palette from "../../helpers/palette";

export const Container = styled.li`
  width: 340px;
  height: 100px;
  background-color: ${(props) =>
    props.type ? palette[props.type] : "lightgray"};
  border-radius: 1rem;
  text-transform: capitalize;
  cursor: pointer;
  position: relative;

  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 50%;
    z-index: 0;
  }
`;

export const PokeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 2;
  gap: 4rem;

  p {
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
