import React from "react";
import { Container, PokeWrapper } from "./styles";
import { ReactComponent as PokeDetail } from "../../assets/pokedetail.svg";

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
      <PokeWrapper>
        <p>{pokemon.name}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </PokeWrapper>
      <PokeDetail
        viewBox="0 0 250 100"
        style={{ width: "148%", height: "71%" }}
      />
    </Container>
  );
};

export default Pokemon;
