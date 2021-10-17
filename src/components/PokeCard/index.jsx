import { Container, PokemonID, PokemonImage, PokemonName, TypesWrapper, DetailWrapper } from "./PokeCard.style";
import PokeTypeTag from "../PokeTypeTag";

const PokeCard = ({ name, id, image, types }) => {
  const typesArray = types.map((type) => type?.type?.name);
  const [pokemonType] = typesArray;

  return (
    <Container pokemonType={pokemonType}>
      <PokemonImage src={image} />
      <DetailWrapper>
        <PokemonID>#00{id}</PokemonID>
        <PokemonName>{name}</PokemonName>
        <TypesWrapper>
          {typesArray.map((type, index) => (
            <PokeTypeTag key={index} type={type} />
          ))}
        </TypesWrapper>
      </DetailWrapper>
    </Container>
  );
};

export default PokeCard;
