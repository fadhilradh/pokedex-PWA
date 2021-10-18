import EvoSingle from "../EvoSingle";
import EvoMultiple from "../EvoMultiple";
import { Container } from "../PokeTabAbout/PokeAboutTab.style";

const PokeTabEvo = ({ evolutionDetail, hasMultipleEvo }) => {
  return (
    <Container>
      {!hasMultipleEvo && <EvoSingle evolutionDetail={evolutionDetail} />}

      {hasMultipleEvo && <EvoMultiple evolutionDetail={evolutionDetail} />}
    </Container>
  );
};

export default PokeTabEvo;
