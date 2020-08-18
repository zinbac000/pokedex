import * as actionTypes from "./types";

export const fetchPokemon = () => async (dispatch) => {
  try {
    dispatch(fetchPokemonStart());
    const response = await fetch("https://cors-anywhere.herokuapp.com/https://www.pokemon.com/us/api/pokedex/kalos", {
      headers: { "X-Requested-With": "" }
    });
    const pokeList = await response.json();
    const transformedPokeList = pokeList.map((poke) => ({
      detailUrl: poke.detailPageURL,
      number: poke.number,
      name: poke.name,
      type: poke.type,
      thumbnailImage: poke.ThumbnailImage,
      thumbnailAltText: poke.ThumbnailAltText,
      id: poke.id
    }));
    dispatch(fetchPokemonSuccess(transformedPokeList));
  } catch (error) {
    console.log(error);
    dispatch(fetchPokemonFailed(error));
  }
};

export const fetchPokemonStart = () => ({
  type: actionTypes.FETCH_POKEMONS_START
});

export const fetchPokemonSuccess = (pokemons) => ({
  type: actionTypes.FETCH_POKEMONS_SUCCESS,
  pokemons
});

export const fetchPokemonFailed = (err) => ({
  type: actionTypes.FETCH_POKEMONS_FAILED,
  error: err
});

export const loadMorePokemonsSuccess = () => ({
  type: actionTypes.LOAD_MORE_POKEMONS
});

export const loadMorePokemonsStart = () => ({
  type: actionTypes.LOAD_MORE_POKEMONS_START
});

export const loadMorePokemons = () => (dispatch) => {
  console.log("test");
  dispatch(loadMorePokemonsStart());
  setTimeout(() => {
    dispatch(loadMorePokemonsSuccess());
  }, 1000);
};
