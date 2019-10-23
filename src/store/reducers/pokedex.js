const INITIAL_STATE = {
  pokemons: [],
  loadingPokemons: false,
  isFilteredPokemons: false,
  filteredPokemons: []
};

function isPokemonType(pokemon, type) {
  for (let i = 0; i < pokemon.type.length; i++) {
    if (pokemon.type[i].toUpperCase() === type.toUpperCase()) {
      return true;
    }
  }
  return false;
}

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
      if (action.name) {
        if (action.filter === "name") {
          return {
            ...state,
            filteredPokemons: [
              ...state.pokemons.filter(
                pokemon =>
                  pokemon.name.english.toUpperCase() ===
                  action.name.toUpperCase()
              )
            ]
          };
        } else if (action.filter === "type") {
          return {
            ...state,
            filteredPokemons: [
              ...state.pokemons.filter(pokemon =>
                isPokemonType(pokemon, action.name)
              )
            ]
          };
        }
      } else {
        return {
          ...state,
          filteredPokemons: [...state.pokemons]
        };
      }
      break;
  }
  return state;
}

export default pokedex;
