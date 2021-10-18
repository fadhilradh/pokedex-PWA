import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/Globals.style";
import PokemonDetail from "./pages/PokemonDetail";
import { getPokemonDetails, getPokemonList } from "./services/getPokemons";
import { baseLimit, getPokeListUrl } from "./services/baseUrls";
import { useStore } from "./zustand/store";
import shallow from "zustand/shallow";

const App = () => {
  const [pokemonList, addPokemons, setFetchingPokeList] = useStore(
    (state) => [state.pokemonList, state.addPokemons, state.setFetchingPokeList],
    shallow
  );

  const [totalPokemon, setTotalPokemon] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  const [nextPokemonsUrl, setNextPokemonsUrl] = useState(getPokeListUrl);

  async function fetchPokemons() {
    try {
      // setFetchingPokeList(true);
      const pokemons = await getPokemonList(nextPokemonsUrl);
      setNextPokemonsUrl(pokemons.next);
      setTotalPokemon(pokemons.count);
      getPokemonDetails(pokemons.results, addPokemons);
      setFetchingPokeList(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (nextPokemonsUrl) {
        fetchPokemons();
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Homepage allPokemons={pokemonList} fetchPokemons={fetchPokemons} totalPokemon={totalPokemon} />
            )}
          />
          <Route path="/pokemon/:id" exact component={PokemonDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
