import create from 'zustand'
import produce from "immer";

const useStore = create(set => ({
  bookmarkedPokemons: [],
  addDrama: (payload) =>
    set(
      produce((draft) => {
        draft.bookmarkedPokemons.push({
          id: ,
          name: payload,
        });
      })
    ),

}))
