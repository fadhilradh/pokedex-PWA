import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsFillBookmarksFill } from "react-icons/bs";
import { PokeCard } from "../../components";
import { Container, Header, Title, CardList, StyledLink } from "./Homepage.style";

const Homepage = ({ allPokemons, totalPokemon, isLoading }) => {
  return (
    <Container>
      <Header>
        <Title>Pokédex {totalPokemon > 0 ? `(${totalPokemon})` : ""}</Title>
        <StyledLink href="/bookmarks">
          <IconContext.Provider value={{ size: "2rem" }}>
            <BsFillBookmarksFill />
          </IconContext.Provider>
        </StyledLink>
      </Header>
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
