const INITIAL_STATE = {
  pokemons: [],
  loadingPokemons: false
};

function pokedex(state = INITIAL_STATE, action) {
  switch (action.type) {
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
  }
  return state;
}

export default pokedex;
