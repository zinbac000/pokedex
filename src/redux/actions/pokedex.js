import * as actionTypes from "./types";

export const fetchPokemon = () => ({
  type: actionTypes.FETCH_POKEMONS
});

export const fetchPokemonSuccess = (pokemons) => ({
  type: actionTypes.FETCH_POKEMONS_SUCCESS
});

export const fetchPokemonFailed = (err) => ({
  type: actionTypes.FETCH_POKEMONS_FAILED,
  error: err
});

export const loadMorePokemons = () => ({
  type: actionTypes.LOAD_MORE_POKEMONS
});
