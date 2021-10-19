import { getPokeSpeciesUrl } from "./baseUrls";

export async function getPokemonSpecies(id, setSpeciesData, setFetchStatus) {
  try {
    const response = await fetch(getPokeSpeciesUrl + id);
    const data = await response.json();
    setSpeciesData(data);
    setFetchStatus(true);
  } catch (err) {
    console.error(err);
  }
}
