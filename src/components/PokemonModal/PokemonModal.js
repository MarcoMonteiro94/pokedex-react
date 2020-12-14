import React from "react";
import { ContainerModal, WrapperModal } from "./styles";

const PokemonModal = ({ pokemon, setModal }) => {
  const [pokemonModal, setPokemonModal] = React.useState(null);

  React.useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const json = await response.json();
      setPokemonModal(json);
    }
    getPokemon();
  }, [pokemon]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModal(null);
  }

  console.log(pokemonModal);

  if (pokemonModal)
    return (
      <ContainerModal onClick={handleOutsideClick}>
        <WrapperModal>
          <h1>{pokemonModal.name}</h1>
          <h2>{pokemonModal.types[0].type.name}</h2>
          <img
            src={pokemonModal.sprites.other["official-artwork"].front_default}
            alt={pokemonModal.name}
          />
          <p>#{pokemonModal.id}</p>
          <p>Altura: {(pokemonModal.height * 0.1).toFixed(2)}m</p>
          <p>Peso: {(pokemonModal.weight * 0.1).toFixed(2)}kg</p>
        </WrapperModal>
      </ContainerModal>
    );
  else return null;
};

export default PokemonModal;
