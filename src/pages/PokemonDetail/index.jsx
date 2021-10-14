import { useEffect, useState } from "react";
import {
   Container,
   Header,
   Preview,
   Detail,
   DetailPage,
   PokemonImage,
   PokemonID,
   PokemonName,
} from "./PokemonDetail.style";
import { Link } from "react-router-dom";

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
               <Link to={"/"}>
                  <p>Back</p>
               </Link>
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
               <TabTitle />
            </Detail>
         </DetailPage>
      </Container>
   );
};

export default PokemonDetail;
