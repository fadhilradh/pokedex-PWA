import PropTypes from "prop-types";
import { Pill } from "./PokeTypeTag.style";

const PokeTypeTag = ({ type }) => {
  return <Pill pokemonType={type}>{type}</Pill>;
};

PokeTypeTag.propTypes = {
  type: PropTypes.string.isRequired,
};

export default PokeTypeTag;
