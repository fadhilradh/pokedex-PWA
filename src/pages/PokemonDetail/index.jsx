import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
   Container,
   Header,
   Preview,
   Detail,
   DetailItem,
   DetailPage,
   PokemonImage,
   PokemonID,
   PokemonName,
} from "./PokemonDetail.style";

const PokemonDetail = ({ match }) => {
   const [pokemonDetail, setPokemonDetail] = useState({});

   async function getPokemonDetails() {
      const response = await fetch(
         `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
      );
      const data = await response.json();
      setPokemonDetail(data);
   }
   useEffect(() => {
      getPokemonDetails();
   }, []);
   return (
      <Container>
         <DetailPage>
            <Header>
               <a href="/">
                  <p>Back</p>
               </a>
            </Header>
            <Preview>
               <PokemonID>#00{pokemonDetail?.id}</PokemonID>
               <PokemonName>{pokemonDetail?.name}</PokemonName>
               <PokemonImage
                  src={
                     pokemonDetail?.sprites?.other?.dream_world?.front_default
                  }
                  alt="pokemon"
               />
            </Preview>
            <Detail>
               <p style={{ marginBottom: "1rem" }}>About</p>
               <DetailItem>Height : {pokemonDetail.height}</DetailItem>
               <DetailItem>Weight : {pokemonDetail.weight}</DetailItem>
               <DetailItem>
                  Abilities :{" "}
                  {pokemonDetail.abilities.map((ability, index) => (
                     <span>{(index ? ", " : "") + ability.ability.name}</span>
                  ))}
               </DetailItem>
            </Detail>
         </DetailPage>
      </Container>
   );
};

export default PokemonDetail;
