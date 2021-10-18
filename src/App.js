import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/Globals.style";
import PokemonDetail from "./pages/PokemonDetail";
import { scrolledToBottom } from "./utils/constants";
import { getPokemonList, getPokemonDetails } from "./services/getPokemons";
import { getPokeListUrl } from "./services/baseUrls";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPokemonsUrl, setNextPokemonsUrl] = useState(getPokeListUrl);

  async function fetchPokemons() {
    try {
      const pokemons = await getPokemonList(nextPokemonsUrl);
      setNextPokemonsUrl(pokemons.next);
      setTotalPokemon(pokemons.count);
      getPokemonDetails(pokemons.results, setAllPokemons);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  window.onscroll = () => {
    if (scrolledToBottom) {
      if (nextPokemonsUrl) {
        setIsLoading(true);
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
              <Homepage
                allPokemons={allPokemons}
                fetchPokemons={fetchPokemons}
                totalPokemon={totalPokemon}
                isLoading={isLoading}
              />
            )}
          />
          <Route path="/pokemon/:id" exact component={PokemonDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
