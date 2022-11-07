import { getPokeByIdUrl } from "./baseUrls";

export async function getEvolutionList(speciesUrl, setEvoData, setFetchStatus) {
  const response = await fetch(speciesUrl);
  const data = await response.json();
  let evolutionChain = [];
  let evoData = data.chain;
  let evoDetail = evoData.evolution_details?.[0];

  do {
    evolutionChain.push({
      species_name: evoData.species?.name,
      min_level: !evoData ? 1 : evoDetail?.min_level,
      trigger_name: !evoData ? null : evoDetail?.trigger?.name,
      item: !evoData ? null : evoDetail?.item?.name,
    });

    evoData = evoData.evolves_to[0];
  } while (evoData !== undefined && evoData.hasOwnProperty("evolves_to"));
  setEvoData(evolutionChain);
  setFetchStatus(true);
}

export async function getEvoDetail(evolutionList, setState) {
  try {
    evolutionList.forEach(async (pokemon) => {
      const response = await fetch(getPokeByIdUrl + pokemon.species_name);
      const newData = await response.json();
      setState((currentData) => [
        ...currentData,
        {
          id: newData.id,
          name: newData.name,
          src: newData.sprites.other["official-artwork"].front_default,
        },
      ]);
      setState((currentList) => currentList.sort((a, b) => a.id - b.id));
    });
  } catch (err) {
    console.error(err);
  }
}
