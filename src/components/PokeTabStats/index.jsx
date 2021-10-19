import PropTypes from "prop-types";

import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { Container } from "../PokeTabAbout/PokeAboutTab.style";

const PokeStatsTab = ({ stats }) => {
  return (
    <Container>
      {stats?.map((stat) => (
        <div key={stat.stat.name}>
          <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</p>
          <ProgressBar
            completed={stat.base_stat.toString()}
            labelAlignment="outside"
            labelColor="black"
            bgColor="#3182CE"
            height="0.5rem"
            ariaValuemax={500}
            maxCompleted={200}
          />
        </div>
      ))}
    </Container>
  );
};

PokeStatsTab.propTypes = {
  stats: PropTypes.array,
};

PokeStatsTab.defaultProps = {
  stats: [],
};

export default PokeStatsTab;
