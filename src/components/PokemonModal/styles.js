import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;
`;

export const WrapperModal = styled.div`
  width: 600px;
  height: 800px;
  background: white;
`;
