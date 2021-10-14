import { Link } from "react-router-dom";
import PokeCard from "../../components/PokeCard";
import { Container, PageTitle, CardList } from "./Homepage.style";

const Homepage = ({ allPokemons, fetchPokemons }) => {
   console.log(
      "🚀 ~ file: index.jsx ~ line 6 ~ Homepage ~ allPokemons",
      allPokemons
   );

   return (
      <Container>
         <PageTitle>Black Pokedex</PageTitle>
         <CardList>
            {allPokemons.map((pokemon) => (
               <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id}>
                  <PokeCard
                     name={pokemon.name}
                     id={pokemon.id}
                     image={pokemon.sprites.other.dream_world.front_default}
                     types={pokemon.types}
                  />
               </Link>
            ))}
         </CardList>
         <button onClick={() => fetchPokemons()}>Load More</button>
      </Container>
   );
};

export default Homepage;
