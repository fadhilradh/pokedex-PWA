import { getPokeByIdUrl } from "./baseUrls";

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
