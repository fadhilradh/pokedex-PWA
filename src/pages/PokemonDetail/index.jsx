import { useEffect, useState } from "react";
import {
   Container,
   Header,
   Preview,
   Detail,
   DetailPage,
   PokemonImage,
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
      console.log(
         "🚀 ~ file: index.jsx ~ line 13 ~ PokemonDetail ~ pokemonDetail",
         pokemonDetail
      );
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
               <PokemonImage
                  src={pokemonDetail?.sprites?.front_default}
                  alt="pokemon"
               />
            </Preview>
            <Detail></Detail>
         </DetailPage>
      </Container>
   );
};

export default PokemonDetail;
