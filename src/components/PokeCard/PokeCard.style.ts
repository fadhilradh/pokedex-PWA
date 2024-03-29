import styled from "styled-components";
import handlePokemonType from "../../styles/pokemonCardColor";

export const Root = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px;

  @media only screen and (max-width: 450px) {
    min-width: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 1.25rem;
  background-color: ${({ pokemonType }) => handlePokemonType(pokemonType)};
  min-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  height: auto;

  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: 100%;
  max-height: 150px;
  margin: 0 auto;
  object-fit: cover;

  @media only screen and (max-width: 450px) {
    width: auto;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const PokemonID = styled.p`
  margin: 0;
`;

export const PokemonName = styled.p`
  margin: 0;
  font-weight: bold;
  text-transform: capitalize;
`;

export const TypesWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
