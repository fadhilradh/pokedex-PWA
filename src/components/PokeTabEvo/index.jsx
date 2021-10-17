import { EvoChainWrapper, PokemonImage, PokemonName } from "./PokeTabEvo.style";
import { FaArrowRight } from "react-icons/fa";

const PokeTabEvo = ({ evoDetail, isMultipleEvo, currentPokemon }) => {
  return (
    <div>
      {!isMultipleEvo && (
        <EvoChainWrapper>
          <div>
            <a href={`/pokemon/${evoDetail[0]?.id}`}>
              <PokemonImage src={evoDetail[0].src} />
            </a>
            <PokemonName>{evoDetail[0].name}</PokemonName>
          </div>
          <FaArrowRight />
          <div>
            <a href={`/pokemon/${evoDetail[1]?.id}`}>
              <PokemonImage src={evoDetail[1].src} />
            </a>
            <PokemonName>{evoDetail[1].name}</PokemonName>
          </div>
        </EvoChainWrapper>
      )}

      {isMultipleEvo && (
        <>
          <EvoChainWrapper>
            <div>
              <a href={`/pokemon/${evoDetail[0]?.id}`}>
                <PokemonImage src={evoDetail[0].src} />
              </a>
              <PokemonName>{evoDetail[0].name}</PokemonName>
            </div>
            <FaArrowRight />
            <div>
              <a href={`/pokemon/${evoDetail[1]?.id}`}>
                <PokemonImage src={evoDetail[1].src} />
              </a>
              <PokemonName>{evoDetail[1].name}</PokemonName>
            </div>
          </EvoChainWrapper>
          <EvoChainWrapper>
            <div>
              <a href={`/pokemon/${evoDetail[1]?.id}`}>
                <PokemonImage src={evoDetail[1].src} />
              </a>
              <PokemonName>{evoDetail[0].name}</PokemonName>
            </div>
            <FaArrowRight />
            <div>
              <a href={`/pokemon/${evoDetail[2]?.id}`}>
                <PokemonImage src={evoDetail[2].src} />
              </a>
              <PokemonName>{evoDetail[1].name}</PokemonName>
            </div>
          </EvoChainWrapper>
        </>
      )}
    </div>
  );
};

export default PokeTabEvo;
