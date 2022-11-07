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

export async function getPokemonsDetail(pokemonList, setZustand) {
  try {
    pokemonList.forEach(async (pokemon) => {
      const response = await fetch(getPokeByIdUrl + pokemon.name);
      const data = await response.json();
      setZustand(data);
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getPokemonDetailById(id, setState) {
  try {
    const response = await fetch(getPokeByIdUrl + id);
    const data = await response.json();
    setState(data);
  } catch (error) {
    console.error(error);
  }
}
