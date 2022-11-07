import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  pokemonList: [],
  pokemonsCount: 0,
  bookmarkedPokemons: [],

  addPokemons: (newPokemon) =>
    set((state) => ({ pokemonList: [...new Set([...state.pokemonList, newPokemon])].sort((a, b) => a.id - b.id) })),
  bookmarkPokemon: (newPokemon) =>
    set((state) => ({
      bookmarkedPokemons: [...new Set([...state.bookmarkedPokemons, newPokemon])].sort((a, b) => a.id - b.id),
    })),
  setPokemonsCount: (count) => set({ pokemonsCount: count }),
});

store = devtools(store);
store = persist(store, { name: "bookmarkedPokemons", whitelist: "bookmarkedPokemons" });

const useStore = create(store);

export default useStore;
