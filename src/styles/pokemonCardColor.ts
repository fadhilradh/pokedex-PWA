const handlePokemonType = (pokemonType) => {
  switch (pokemonType) {
    case "grass":
      return "#B5EAAF";
    case "fire":
      return "#FFC8A9";
    case "dragon":
      return "#FFC8A9";
    case "water":
      return "#AFD9FF";
    case "ice":
      return "#AFD9FF";
    case "bug":
      return "#D4DFA7";
    case "normal":
      return "#E4E0CF";
    case "poison":
      return "#E6C2EF";
    case "electric":
      return "#FFE9A7";
    case "ground":
      return "#ECD8B4";
    case "fairy":
      return "#FFDDFF";
    case "fighting":
      return "#E7BDB8";
    case "psychic":
      return "#FFCBDE";
    case "rock":
      return "#ECD8B4";
    case "ghost":
      return "#CBC1E8";
    default:
      return "#fff";
  }
};

export default handlePokemonType;
