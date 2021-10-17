import styled from "styled-components";
import handlePokemonType from "../../styles/pokemonCardColor";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #eaeaea;
`;

export const DetailPage = styled.main`
  max-width: 576px;
  width: 100%;
  background: ${({ pokemonType }) => handlePokemonType(pokemonType)};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  text-align: left;
  padding: 1rem;
`;

export const Preview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const PokemonImage = styled.img`
  margin: 0 auto;
`;

export const PokemonID = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
`;

export const PokemonName = styled.p`
  margin: 0;
  text-transform: capitalize;
  font-size: 2rem;
`;

export const Detail = styled.div`
  flex-grow: 1;
  font-size: 14px;
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  padding: 1rem;
  box-shadow: 0px -7px 6px 0px rgba(179, 179, 179, 0.55);
  -webkit-box-shadow: 0px -7px 6px 0px rgba(179, 179, 179, 0.55);
  -moz-box-shadow: 0px -7px 6px 0px rgba(179, 179, 179, 0.55);
`;
