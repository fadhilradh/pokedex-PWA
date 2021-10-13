import Homepage from "./pages/Homepage";
import { useState, useEffect } from "react";
import GlobalStyle from "./Globals.style";

function App() {
   const [allPokemons, setAllPokemons] = useState([]);
   const [loadMorePokemons, setLoadMorePokemons] = useState(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
   );
   // const [pokemonDetails, setPokemonDetails] = useState([]);

   function getPokemonDetails(result) {
      result.forEach(async (pokemon) => {
         const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
         );
         const data = await response.json();

         setAllPokemons((currentList) => [...currentList, data]);
      });
      console.log(allPokemons);
   }

   async function fetchPokemons() {
      const response = await fetch(loadMorePokemons);
      const data = await response.json();
      console.log(data);
      setLoadMorePokemons(data.next);
      getPokemonDetails(data.results);
   }

   useEffect(() => {
      fetchPokemons();
   }, []);

   return (
      <div className="App">
         <GlobalStyle />
         <Homepage allPokemons={allPokemons} />
      </div>
   );
}

export default App;
