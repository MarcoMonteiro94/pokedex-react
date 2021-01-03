import React from "react";
import { Container } from "./styles";

const Pokemon = ({ pokemon, setModal }) => {
  const [type, setType] = React.useState(null);

  function handleClick() {
    setModal(pokemon.id);
  }

  React.useEffect(() => {
    setType(pokemon.types[0].type.name);
  }, [pokemon]);

  return (
    <Container onClick={handleClick} type={type}>
      <p>{pokemon.name}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </Container>
  );
};

export default Pokemon;
