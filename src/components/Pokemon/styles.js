import styled from "styled-components";
import palette from "../../helpers/palette";

export const Container = styled.li`
  width: 340px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => (props.type ? palette[props.type] : "#b44")};
  border-radius: 1rem;
  text-transform: capitalize;
  cursor: pointer;
`;
