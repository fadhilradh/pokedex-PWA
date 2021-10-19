import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage, PokemonDetail, Bookmarks } from "./pages";
import GlobalStyle from "./styles/Globals.style";
import { getPokemonDetails, getPokemonList } from "./services/getPokemons";
import { getPokeListUrl } from "./services/baseUrls";
import useStore from "./zustand/store";
import shallow from "zustand/shallow";

const App = () => {
  const [pokemonList, addPokemons, pokemonsCount, setPokemonsCount] = useStore(
    (state) => [state.pokemonList, state.addPokemons, state.pokemonsCount, state.setPokemonsCount],
    shallow
  );

  const [nextPokemonsUrl, setNextPokemonsUrl] = useState(getPokeListUrl);

  async function fetchPokemons() {
    try {
      const pokemons = await getPokemonList(nextPokemonsUrl);
      setNextPokemonsUrl(pokemons.next);
      setPokemonsCount(pokemons.count);
      getPokemonDetails(pokemons.results, addPokemons);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Homepage allPokemons={pokemonList} fetchPokemons={fetchPokemons} pokemonsCount={pokemonsCount} />
            )}
          />
          <Route path="/pokemon/:id" exact component={PokemonDetail} />
          <Route path="/bookmarks" exact component={Bookmarks} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
