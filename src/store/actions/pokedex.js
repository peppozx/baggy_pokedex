export function setPokemons(pokelist) {
  return {
    type: "SET_POKEMONS",
    pokelist
  };
}

export function loadingPokemons(isLoading) {
  return {
    type: "LOAD_POKEMONS",
    isLoading
  };
}
