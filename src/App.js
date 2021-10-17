import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/Globals.style";
import PokemonDetail from "./pages/PokemonDetail";
import { scrolledToBottom } from "./utils/constants";
import { getPokemonDetails } from "./services/getPokemons";
import { getAllPokeUrl } from "./services/baseUrls";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [haveMorePokemon, setHaveMorePokemon] = useState(getAllPokeUrl);

  const fetchPokemons = async () => {
    try {
      const response = await fetch(haveMorePokemon);
      const data = await response.json();
      setHaveMorePokemon(data.next);
      setTotalPokemon(data.count);
      getPokemonDetails(data.results, setAllPokemons);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  window.onscroll = () => {
    if (scrolledToBottom) {
      if (haveMorePokemon) {
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
            render={(props) => (
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
