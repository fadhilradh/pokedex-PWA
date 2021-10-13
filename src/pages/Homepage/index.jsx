import PokeCard from "../../components/PokeCard";
import { Container, PageTitle, CardList } from "./Homepage.style";

const Homepage = ({ allPokemons }) => {
   return (
      <Container>
         <PageTitle>Pokedex</PageTitle>
         <CardList>
            {allPokemons.map((pokemon) => (
               <PokeCard
                  key={pokemon.name}
                  name={pokemon.name}
                  id={pokemon.id}
                  image={pokemon.sprites.other.dream_world.front_default}
                  types={pokemon.types}
               />
            ))}
         </CardList>
      </Container>
   );
};

export default Homepage;
