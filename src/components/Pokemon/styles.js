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
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const InfoWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.55rem;
  padding: 1rem 0 1rem;

  p {
    color: white;
    opacity: 0.5;
    font-weight: 700;
    margin: 0;
  }

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
  }

  div {
    display: flex;

    h3 {
      margin: 0;
      background: rgba(255, 255, 255, 0.3);
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;
      border-radius: 1rem;
      margin-right: 1rem;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
