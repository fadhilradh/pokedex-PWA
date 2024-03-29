import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsFillBookmarksFill } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import { PokeCard } from "../../components";
import { Container, Header, Title, CardList, StyledLink } from "./Homepage.style";

const Homepage = ({ allPokemons, fetchPokemons, pokemonsCount }) => {
  return (
    <Container>
      <Header>
        <Title>Pokédex {pokemonsCount > 0 ? `(${pokemonsCount})` : ""}</Title>
        <StyledLink href="/bookmarks">
          <IconContext.Provider value={{ size: "2rem" }}>
            <BsFillBookmarksFill />
          </IconContext.Provider>
        </StyledLink>
      </Header>

      <InfiniteScroll
        dataLength={allPokemons.length}
        next={fetchPokemons}
        hasMore={true}
        loader={<h4>Catching pokemons...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>That's all pokemons we know</b>
          </p>
        }
      >
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
      </InfiniteScroll>
    </Container>
  );
};

Homepage.propTypes = {
  allPokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.shape({}),
      name: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.shape({})),
    })
  ).isRequired,
  fetchPokemons: PropTypes.func.isRequired,
  pokemonsCount: PropTypes.number.isRequired,
};

export default Homepage;
