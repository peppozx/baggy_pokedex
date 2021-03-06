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

export function filterByName(name, type) {
  return {
    type: "FILTER_BY_NAME",
    name,
    filter: type
  };
}

export function isFilteredPokemons(isFiltered) {
  return {
    type: "SET_FILTER",
    isFiltered
  };
}
