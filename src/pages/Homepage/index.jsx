import { Link } from "react-router-dom";
import PokeCard from "../../components/PokeCard";
import { Container, PageTitle, CardList } from "./Homepage.style";

const Homepage = ({ allPokemons, totalPokemon, isLoading }) => {
  return (
    <Container>
      <PageTitle>Pokedex {totalPokemon > 0 ? `(${totalPokemon})` : ""}</PageTitle>
      <CardList>
        {allPokemons.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <PokeCard
              name={pokemon.name}
              id={pokemon.id}
              image={pokemon.sprites.other["official-artwork"].front_default}
              types={pokemon.types}
            />
          </Link>
        ))}
      </CardList>
      {isLoading ? <h3>Gathering more pokemons ...</h3> : ""}
    </Container>
  );
};

export default Homepage;
