import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { EvoChainWrapper, PokemonImage, PokemonName } from "../PokeTabEvo/PokeTabEvo.style";

const EvoSingle = ({ evolutionDetail }) => {
  return (
    <EvoChainWrapper>
      <span>
        <a href={`/pokemon/${evolutionDetail[0]?.id}`}>
          <PokemonImage src={evolutionDetail[0]?.src} />
        </a>
        <PokemonName>{evolutionDetail[0]?.name}</PokemonName>
      </span>
      <FaArrowRight />
      <span>
        <a href={`/pokemon/${evolutionDetail[1]?.id}`}>
          <PokemonImage src={evolutionDetail[1]?.src} />
        </a>
        <PokemonName>{evolutionDetail[1]?.name}</PokemonName>
      </span>
    </EvoChainWrapper>
  );
};

EvoSingle.propTypes = {
  evolutionDetail: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EvoSingle;
