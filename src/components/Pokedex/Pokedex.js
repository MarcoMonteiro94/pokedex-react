import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import PokemonModal from "../PokemonModal/PokemonModal";
import {
  Container,
  SearchWrapper,
  PokeWrapper,
  Pokeball,
  LoadingContainer,
} from "./styles";
import TextField from "@material-ui/core/TextField";

const Pokedex = () => {
  const [data, setData] = React.useState(null);
  const [pokemon, setPokemon] = React.useState([]);
  const [searchPokemon, setSearchPokemon] = React.useState(null);
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

  //Esconde o scroll quando o modal é aberto
  React.useEffect(() => {
    modal && (document.body.style.overflow = "hidden");
    !modal && (document.body.style.overflow = "unset");
  }, [modal]);

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
        <SearchWrapper>
          <TextField
            id="search"
            label="Search Pokémon"
            onChange={({ target }) => setSearchPokemon(target.value)}
          />
        </SearchWrapper>
        <PokeWrapper>
          {pokemon
            .filter((val) => {
              if (!searchPokemon) {
                return val;
              } else if (val.name.includes(searchPokemon.toLowerCase())) {
                return val;
              }
            })
            .map((pokemon) => {
              return (
                <Pokemon
                  key={pokemon.id}
                  pokemon={pokemon}
                  setModal={setModal}
                />
              );
            })}
        </PokeWrapper>
      </Container>
    );
  else return null;
};

export default Pokedex;
