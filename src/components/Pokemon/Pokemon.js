import React from "react";
import { Container, PokeWrapper, InfoWrapper } from "./styles";
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
        <InfoWrapper>
          <p>
            #
            {pokemon.id < 10
              ? `00${pokemon.id}`
              : pokemon.id < 100
              ? `0${pokemon.id}`
              : pokemon.id}
          </p>
          <h2>{pokemon.name}</h2>
          <div>
            {pokemon.types.map((pokemon) => (
              <h3 key={pokemon.type}>{pokemon.type.name}</h3>
            ))}
          </div>
        </InfoWrapper>
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
