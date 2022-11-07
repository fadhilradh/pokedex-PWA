import PropTypes from "prop-types";

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

PokeTabEvo.propTypes = {
  hasMultipleEvo: PropTypes.bool.isRequired,
  evolutionDetail: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokeTabEvo;
