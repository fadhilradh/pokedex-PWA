import styled from "styled-components";

export const PokemonImage = styled.img`
  width: 100%;
  max-width: 210px;
  padding: 0.25rem;
  border-radius: 1rem;

  &:hover {
    background-color: #edf2f7;
  }
`;

export const EvoChainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonName = styled.p`
  text-transform: capitalize;
  text-align: center;
`;
