import {
   Container,
   PokemonID,
   PokemonImage,
   PokemonName,
   TypesWrapper,
} from "./PokeCard.style";
import PokeTypeTag from "../PokeTypeTag";

const PokeCard = ({ name, id, image, types }) => {
   const typesArray = types.map((type) => type?.type?.name);
   console.log(
      "🚀 ~ file: index.jsx ~ line 10 ~ PokeCard ~ typesArray",
      typesArray
   );

   return (
      <Container>
         <PokemonImage src={image} />
         <PokemonID>#00{id}</PokemonID>
         <PokemonName>{name}</PokemonName>
         <TypesWrapper>
            {typesArray.map((type) => (
               <PokeTypeTag type={type} />
            ))}
         </TypesWrapper>
      </Container>
   );
};

export default PokeCard;
