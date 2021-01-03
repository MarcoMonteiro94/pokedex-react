import React from "react";
import {
  ContainerModal,
  WrapperModal,
  WrapperProfile,
  BackgroundCircle,
  AbsoluteDiv,
  DescriptionWrapper,
  BiologyDiv,
  ButtonWrapper,
} from "./styles";

const PokemonModal = ({ pokemon, setModal }) => {
  const [pokemonModal, setPokemonModal] = React.useState(null);
  const [type, setType] = React.useState(null);

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

  React.useEffect(() => {
    setType(pokemonModal?.types[0].type.name);
  }, [pokemonModal]);

  function handleOutsideClick(e) {
    if (e.target === e.currentTarget) setModal(null);
  }

  if (pokemonModal)
    return (
      <ContainerModal onClick={handleOutsideClick}>
        <WrapperModal>
          <WrapperProfile type={type}>
            <h1>{pokemonModal.name}</h1>
            <div>
              <div>
                {pokemonModal.types.map((types) => (
                  <h2 key={types.type.name}>{types.type.name}</h2>
                ))}
              </div>
              <h2>#{pokemonModal.id}</h2>
            </div>
          </WrapperProfile>
          <AbsoluteDiv>
            <BackgroundCircle />
            <img
              src={pokemonModal.sprites.other["official-artwork"].front_default}
              alt={pokemonModal.name}
            />
          </AbsoluteDiv>
          <DescriptionWrapper>
            <ButtonWrapper type={type}>
              <button>Sobre</button>
              <button>Evolução</button>
              <button>Status</button>
            </ButtonWrapper>
            <div>
              <h3>Descrição</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum ipsam enim asperiores magnam placeat animi quibusdam
                sapiente similique modi rerum?
              </p>
            </div>
            <div>
              <h3>Biologia</h3>
              <BiologyDiv>
                <div>
                  <h4>Altura</h4>
                  <p>{(pokemonModal.height * 0.1).toFixed(2)}m</p>
                </div>
                <div>
                  <h4>Peso</h4>
                  <p>{(pokemonModal.weight * 0.1).toFixed(2)}kg</p>
                </div>
              </BiologyDiv>
            </div>
          </DescriptionWrapper>
        </WrapperModal>
      </ContainerModal>
    );
  else return null;
};

export default PokemonModal;
