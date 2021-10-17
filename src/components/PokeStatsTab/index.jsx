import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const PokeStatsTab = ({ pokemonDetail }) => {
  console.log("🚀 ~ file: index.jsx ~ line 4 ~ PokeStatsTab ~ pokemonDetail", pokemonDetail);
  return (
    <div>
      {pokemonDetail?.stats?.map((stat) => (
        <div key={stat.stat.name}>
          <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</p>
          <ProgressBar
            completed={stat.base_stat.toString()}
            labelAlignment="outside"
            labelColor="black"
            bgColor="#3182CE"
            height="0.5rem"
            ariaValuemax={500}
          />
        </div>
      ))}
    </div>
  );
};

export default PokeStatsTab;
