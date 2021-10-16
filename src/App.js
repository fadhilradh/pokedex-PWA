import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/Globals.style";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMorePokemons, setLoadMorePokemons] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  async function getPokemonDetails(result) {
    result.forEach(async (pokemon) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = await response.json();
      setAllPokemons((currentList) => [...currentList, data]);
      console.log("🚀 ~ file: App.js ~ line 9 ~ App ~ allPokemons", allPokemons);
    });
  }

  async function fetchPokemons() {
    try {
      const response = await fetch(loadMorePokemons);
      const data = await response.json();
      setLoadMorePokemons(data.next);
      setTotalPokemon(data.count);
      getPokemonDetails(data.results);
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
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      if (loadMorePokemons) {
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
          <Route path="/pokemon/:name" exact component={PokemonDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
