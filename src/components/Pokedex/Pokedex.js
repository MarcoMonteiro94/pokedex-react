import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import PokemonModal from "../PokemonModal/PokemonModal";
import { Container, PokeWrapper, Pokeball, LoadingContainer } from "./styles";

const Pokedex = () => {
  const [data, setData] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([]);
  const [modal, setModal] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getPokedex() {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`
      );
      const json = await response.json();
      setData(json.results);
      setLoading(false);
    }

    getPokedex();
  }, []);

  React.useEffect(() => {
    async function getPokemon() {
      setLoading(true);
      if (data) {
        const pokeFetch = await Promise.all(
          data.map(async (a) => {
            const response = await fetch(a.url);
            const json = await response.json();
            return json;
          })
        );
        setPokemon(pokeFetch);
        setLoading(false);
      }
    }
    getPokemon();
  }, [data]);

  if (loading)
    return (
      <LoadingContainer>
        <Pokeball
          src="https://img.icons8.com/color/100/000000/pokeball--v1.png"
          alt="Loading Pokeball"
        />
      </LoadingContainer>
    );
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
