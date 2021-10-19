import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import { PokeCard } from "../../components";
import { Container, Header, Title, CardList } from "../Homepage/Homepage.style";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useStore from "../../zustand/store";

const Bookmarks = ({}) => {
  const bookmarkedPokemons = useStore((state) => state.bookmarkedPokemons);
  console.log("🚀 ~ file: index.jsx ~ line 11 ~ Bookmarks ~ bookmarkedPokemons", bookmarkedPokemons);

  return (
    <Container>
      <Header>
        <a href="/">
          <IconContext.Provider value={{ size: "2rem" }}>
            <AiOutlineArrowLeft />
          </IconContext.Provider>
        </a>
        <Title>Bookmarks</Title>
      </Header>

      <CardList>
        {bookmarkedPokemons.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.id}`} key={pokemon.id}>
            <PokeCard name={pokemon.name} id={pokemon.id} image={pokemon.img} types={pokemon.types} />
          </Link>
        ))}
      </CardList>
    </Container>
  );
};

Bookmarks.propTypes = {
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

export default Bookmarks;
