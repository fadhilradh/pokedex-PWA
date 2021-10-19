import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { EvoChainWrapper, PokemonImage, PokemonName } from "../PokeTabEvo/PokeTabEvo.style";

const EvoMultiple = ({ evolutionDetail }) => {
  return (
    <>
      <EvoChainWrapper>
        <div>
          <a href={`/pokemon/${evolutionDetail[0]?.id}`}>
            <PokemonImage src={evolutionDetail[0].src} />
          </a>
          <PokemonName>{evolutionDetail[0].name}</PokemonName>
        </div>
        <FaArrowRight />
        <div>
          <a href={`/pokemon/${evolutionDetail[1]?.id}`}>
            <PokemonImage src={evolutionDetail[1].src} />
          </a>
          <PokemonName>{evolutionDetail[1].name}</PokemonName>
        </div>
      </EvoChainWrapper>
      <EvoChainWrapper>
        <div>
          <a href={`/pokemon/${evolutionDetail[1]?.id}`}>
            <PokemonImage src={evolutionDetail[1].src} />
          </a>
          <PokemonName>{evolutionDetail[1].name}</PokemonName>
        </div>
        <FaArrowRight />
        <div>
          <a href={`/pokemon/${evolutionDetail[2]?.id}`}>
            <PokemonImage src={evolutionDetail[2].src} />
          </a>
          <PokemonName>{evolutionDetail[2].name}</PokemonName>
        </div>
      </EvoChainWrapper>
    </>
  );
};

EvoMultiple.propTypes = {
  evolutionDetail: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EvoMultiple;
