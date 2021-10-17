import EvoSingle from "../EvoSingle";
import EvoMultiple from "../EvoMultiple";

const PokeTabEvo = ({ evolutionDetail, hasMultipleEvo }) => {
  return (
    <>
      {!hasMultipleEvo && <EvoSingle evolutionDetail={evolutionDetail} />}

      {hasMultipleEvo && <EvoMultiple evolutionDetail={evolutionDetail} />}
    </>
  );
};

export default PokeTabEvo;
