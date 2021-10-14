import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./styles/Globals.style";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
   const [allPokemons, setAllPokemons] = useState([]);
   const [loadMorePokemons, setLoadMorePokemons] = useState(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
   );

   function getPokemonDetails(result) {
      result.forEach(async (pokemon) => {
         const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
         );
         const data = await response.json();
         setAllPokemons((currentList) => [...currentList, data]);
      });
   }

   async function fetchPokemons() {
      const response = await fetch(loadMorePokemons);
      const data = await response.json();
      setLoadMorePokemons(data.next);
      getPokemonDetails(data.results);
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
                  render={(props) => (
                     <Homepage
                        allPokemons={allPokemons}
                        fetchPokemons={fetchPokemons}
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
