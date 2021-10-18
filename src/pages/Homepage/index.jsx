import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsFillBookmarksFill } from "react-icons/bs";
import { PokeCard } from "../../components";
import { Container, Header, Title, CardList, StyledLink } from "./Homepage.style";
import { useStore } from "../../zustand/store";
import shallow from "zustand/shallow";

const Homepage = ({ allPokemons, totalPokemon }) => {
  const [isFetchingPokeList, isFetchingMorePoke] = useStore(
    (state) => [state.isFetchingPokeList, state.isFetchingMorePoke],
    shallow
  );
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
      {isFetchingPokeList && <p>Catching Pokemons...</p>}
      {!isFetchingPokeList && (
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
      )}
      {isFetchingMorePoke ? <h3>Catching more pokemons ...</h3> : ""}
    </Container>
  );
};

export default Homepage;
