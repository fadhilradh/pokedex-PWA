import { Pill } from "./PokeTypeTag.style";

const PokeTypeTag = ({ type }) => {
  return <Pill pokemonType={type}>{type}</Pill>;
};

export default PokeTypeTag;
