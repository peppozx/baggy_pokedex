const INITIAL_STATE = {
  pokemons: [],
  loadingPokemons: false,
  isFilteredPokemons: false,
  filteredPokemons: []
};

function pokedex(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        isFilteredPokemons: action.isFiltered
      };
      break;
    case "LOAD_POKEMONS":
      return {
        ...state,
        loadingPokemons: action.isLoading
      };
      break;
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: [...action.pokelist]
      };
      break;
    case "FILTER_BY_NAME":
      return {
        ...state,
        filteredPokemons: [
          ...state.pokemons.filter(
            pokemon => pokemon.name.english === action.name
          )
        ]
      };
      break;
  }
  return state;
}

export default pokedex;
