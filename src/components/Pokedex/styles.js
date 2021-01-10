import styled, { keyframes } from "styled-components";

const loading = keyframes`
    from {
      transform: translate(0, 0) rotate(0);
    }
    to {
      transform: translate(0, 0) rotate(360deg);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 0;
`;

export const PokeWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const Pokeball = styled.img`
  animation: ${loading} 2s infinite;
`;
