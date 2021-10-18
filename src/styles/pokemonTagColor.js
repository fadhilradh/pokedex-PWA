const handlePokemonType = (pokemonType) => {
  switch (pokemonType) {
    case "grass":
      return "#4FB443";
    case "fire":
      return "#E76B2F";
    case "dragon":
      return "#E76B2F";
    case "water":
      return "#3A8BE9";
    case "ice":
      return "#3A8BE9";
    case "bug":
      return "#889E2A";
    case "normal":
      return "#AFA485";
    case "flying":
      return "#7A9FF2";
    case "poison":
      return "#A15AB1";
    case "electric":
      return "#F4C234";
    case "ground":
      return "#B7904B";
    case "fairy":
      return "#F9A8EF";
    case "fighting":
      return "#9B4840";
    case "psychic":
      return "#F5779E";
    case "rock":
      return "#B7904B";
    case "steel":
      return "#908DA9";
    case "ghost":
      return "#65539D";
    default:
      return "#eaeaea";
  }
};

export default handlePokemonType;
