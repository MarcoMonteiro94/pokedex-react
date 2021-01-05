import styled, { keyframes } from "styled-components";
import palette from "../../helpers/palette";

const loading = keyframes`
    from {
      transform: translate(0, 0) rotate(0);
    }
    to {
      transform: translate(0, 0) rotate(360deg);
    }
  }
`;

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
  text-align: justify;
`;

export const WrapperModal = styled.div`
  width: 360px;
  height: 600px;
  background: white;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 2fr 3.5fr;
  position: relative;
`;

export const AbsoluteDiv = styled.div`
  justify-self: center;
  align-self: center;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 37%;

  img {
    position: absolute;
    width: 150px;
    z-index: 1000;
  }
`;

export const BackgroundCircle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  justify-self: center;
  align-self: center;
  opacity: 0.5;
  z-index: 1;
`;

export const WrapperProfile = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.type ? palette[props.type] : "#b44")};
  padding: 1rem;
  color: white;

  h1 {
    margin: 1rem 0 0 0;
  }

  h1,
  h2 {
    text-transform: capitalize;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin: 1rem 1rem 0 0;
  }
`;

export const WrapperTypes = styled.div`
  display: flex;
  width: 60%;

  h2 {
    background: rgba(255, 255, 255, 0.3);
    padding: 0.5rem;
    border-radius: 1rem;
    font-size: 1.4rem;
    margin-right: 1rem;
  }
`;

export const DescriptionWrapper = styled.div`
  margin: 5rem 2rem 0;
`;

export const BiologyDiv = styled.div`
  div {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    h4 {
      margin: 0 1rem 0 0;
      color: #aaa;
    }

    p {
      margin: 0;
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    background: transparent;
    border: none;

    &:hover,
    &:focus {
      color: ${(props) => (props.type ? palette[props.type] : "#b44")};
      outline: none;
    }
  }
`;

export const Pokeball = styled.img`
  animation: ${loading} 2s infinite;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  height: 600px;
`;
