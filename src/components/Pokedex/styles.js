import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const PokeWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  gap: 2rem;
`;
