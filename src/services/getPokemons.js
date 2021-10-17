// export async function getPokemons() {
//   try {
//     const response = await fetch(loadMorePokemons);
//     const data = await response.json();
//     setLoadMorePokemons(data.next);
//     setTotalPokemon(data.count);
//     getPokemonDetails(data.results, setAllPokemons);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     setIsLoading(false);
//   }
// }

import { getPokeByIdUrl } from "./baseUrls";

export async function getPokemonDetails(pokemonList, callback) {
  pokemonList.forEach(async (pokemon) => {
    const response = await fetch(getPokeByIdUrl + pokemon.name);
    const data = await response.json();
    callback((currentList) => [...currentList, data]);
    callback((currentList) => currentList.sort((a, b) => a.id - b.id));
  });
}
