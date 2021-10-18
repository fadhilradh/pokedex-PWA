import create from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  pokemonList: [],
  addPokemons: (newPokemons) => set((state) => ({ pokemonList: [...state.pokemonList, newPokemons] })),
});

export const useStore = create(devtools(store));
