import React from "react";
import {
  ContainerModal,
  WrapperModal,
  WrapperProfile,
  BackgroundCircle,
  AbsoluteDiv,
  DescriptionWrapper,
  BiologyDiv,
  NavWrapper,
  NavButton,
  WrapperTitle,
  WrapperTypes,
  Pokeball,
  LoadingContainer,
} from "./styles";
import { MdArrowBack } from "react-icons/md";

const PokemonModal = ({ pokemon, setModal }) => {
  const [pokemonModal, setPokemonModal] = React.useState(null);
  const [description, setDescription] = React.useState(null);
  const [type, setType] = React.useState(null);
  const [navPage, setNavPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getPokemon() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const json = await response.json();
      setPokemonModal(json);
    }
    async function getDescription() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
      );
      const json = await response.json();
      const desc = json.flavor_text_entries
        .map((a) => a.language.name)
        .findIndex((e) => e === "en");
      setDescription(json.flavor_text_entries[desc].flavor_text);
    }
    setLoading(true);
    Promise.all([getPokemon(), getDescription()]).then((e) => {
      setLoading(false);
    });
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
          {loading ? (
            <LoadingContainer>
              <Pokeball
                src="https://img.icons8.com/color/100/000000/pokeball--v1.png"
                alt="Loading Pokeball"
              />
            </LoadingContainer>
          ) : (
            <>
              <WrapperProfile type={type}>
                <MdArrowBack
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  onClick={() => setModal(null)}
                />
                <WrapperTitle>
                  <h1>{pokemonModal.name}</h1>
                  <h2>
                    #
                    {pokemonModal.id < 10
                      ? `00${pokemonModal.id}`
                      : pokemonModal.id < 100
                      ? `0${pokemonModal.id}`
                      : pokemonModal.id}
                  </h2>
                </WrapperTitle>
                <WrapperTypes>
                  {pokemonModal.types.map((types) => (
                    <h2 key={types.type.name}>{types.type.name}</h2>
                  ))}
                </WrapperTypes>
              </WrapperProfile>
              <AbsoluteDiv>
                <BackgroundCircle />
                <img
                  src={
                    pokemonModal.sprites.other["official-artwork"].front_default
                  }
                  alt={pokemonModal.name}
                />
              </AbsoluteDiv>
              <DescriptionWrapper>
                <NavWrapper active={navPage}>
                  <NavButton
                    type={type}
                    isFocused={navPage === 0 ? true : false}
                    onClick={() => setNavPage(0)}
                  >
                    About
                  </NavButton>
                  <NavButton
                    type={type}
                    onClick={() => setNavPage(1)}
                    isFocused={navPage === 1 ? true : false}
                  >
                    Evolution
                  </NavButton>
                  <NavButton
                    type={type}
                    onClick={() => setNavPage(2)}
                    isFocused={navPage === 2 ? true : false}
                  >
                    Status
                  </NavButton>
                </NavWrapper>
                {navPage === 2 ? (
                  <div>2</div>
                ) : navPage === 1 ? (
                  <div>1</div>
                ) : (
                  <>
                    <div>
                      <h3>Description</h3>
                      <p>{description}</p>
                    </div>
                    <div>
                      <h3>Biology</h3>
                      <BiologyDiv>
                        <div>
                          <h4>Height</h4>
                          <p>{(pokemonModal.height * 0.1).toFixed(2)}m</p>
                        </div>
                        <div>
                          <h4>Weight</h4>
                          <p>{(pokemonModal.weight * 0.1).toFixed(2)}kg</p>
                        </div>
                      </BiologyDiv>
                    </div>
                  </>
                )}
              </DescriptionWrapper>
            </>
          )}
        </WrapperModal>
      </ContainerModal>
    );
  else return null;
};

export default PokemonModal;
