import React from "react";
import { Container } from "./styles";

const Pokemon = ({ pokemon, setModal }) => {
  function handleClick() {
    setModal(pokemon.id);
  }

  return (
    <Container onClick={handleClick}>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </Container>
  );
};

export default Pokemon;
