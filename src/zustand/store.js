import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  pokemonList: [],
  pokemonsCount: 0,
  isFetchingPokeList: false,
  isFetchingMorePoke: false,
  addPokemons: (newPokemons) =>
    set((state) => ({ pokemonList: [...state.pokemonList, newPokemons].sort((a, b) => a.id - b.id) })),
  setPokemonsCount: (count) => set({ pokemonsCount: count }),
  setFetchingPokeList: (status) => set({ isFetchingPokeList: status }),
  setFetchingMorePoke: (status) => set({ isFetchingMorePoke: status }),
});

export const useStore = create(devtools(store));
