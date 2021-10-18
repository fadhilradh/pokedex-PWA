import { getPokeByIdUrl } from "./baseUrls";

export async function getPokemonList(nextPokemonsUrl) {
  try {
    const response = await fetch(nextPokemonsUrl);
    const pokemons = await response.json();
    return pokemons;
  } catch (err) {
    console.error(err);
  }
}

export async function getPokemonDetails(pokemonList, callback) {
  try {
    pokemonList.forEach(async (pokemon) => {
      const response = await fetch(getPokeByIdUrl + pokemon.name);
      const data = await response.json();
      callback((currentList) => [...currentList, data]);
      callback((currentList) => currentList.sort((a, b) => a.id - b.id));
    });
  } catch (error) {
    console.error(error);
  }
}
