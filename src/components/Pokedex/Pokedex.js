import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import PokemonModal from "../PokemonModal/PokemonModal";
import { Container, PokeWrapper } from "./styles";

const Pokedex = () => {
  const [data, setData] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([]);
  const [modal, setModal] = React.useState(null);

  React.useEffect(() => {
    async function getPokedex() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25`
      );
      const json = await response.json();
      setData(json.results);
    }

    getPokedex();
  }, []);

  React.useEffect(() => {
    async function getPokemon() {
      if (data) {
        const pokeFetch = await Promise.all(
          data.map(async (a) => {
            const response = await fetch(a.url);
            const json = await response.json();
            return json;
          })
        );
        setPokemon(pokeFetch);
      }
    }
    getPokemon();
  }, [data]);

  if (pokemon)
    return (
      <Container>
        {modal && <PokemonModal pokemon={modal} setModal={setModal} />}
        <PokeWrapper>
          {pokemon.map((pokemon) => {
            return (
              <Pokemon key={pokemon.id} pokemon={pokemon} setModal={setModal} />
            );
          })}
        </PokeWrapper>
      </Container>
    );
  else return null;
};

export default Pokedex;
