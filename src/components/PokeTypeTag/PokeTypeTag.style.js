import styled from "styled-components";
import handlePokemonType from "../../styles/pokemonTagColor";

export const Pill = styled.div`
  padding: 0.1rem 0.45rem;
  border-radius: 6rem;
  color: #fff;
  font-size: 0.75rem;
  background: ${({ pokemonType }) => handlePokemonType(pokemonType)};
`;
