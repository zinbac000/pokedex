import * as actionTypes from "../actions/types";
import _ from "lodash";

const initialState = {
  pagedPokeList: null,
  fetching: false,
  error: null,
  hasMore: true
};

const ITEMS_PER_LOAD = 16;
let offset = 0;
let fullPokeList = null;
let filteredPokeList = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POKEMONS_START:
    case actionTypes.LOAD_MORE_POKEMONS_START:
      return { ...state, fetching: true, error: null };
    case actionTypes.FETCH_POKEMONS_SUCCESS: {
      fullPokeList = _.uniqBy(action.pokemons, (pokemon) => pokemon.id);
      filteredPokeList = fullPokeList;
      const pagedPokeList = filteredPokeList.slice(offset * ITEMS_PER_LOAD, (offset + 1) * ITEMS_PER_LOAD);
      offset++;
      const hasMore = filteredPokeList.length > offset * ITEMS_PER_LOAD;
      return { ...state, pagedPokeList, fetching: false, hasMore };
    }

    case actionTypes.LOAD_MORE_POKEMONS:
      const pagedPokeList = filteredPokeList.slice(offset * ITEMS_PER_LOAD, (offset + 1) * ITEMS_PER_LOAD);
      offset++;
      const hasMore = filteredPokeList.length > offset * ITEMS_PER_LOAD;
      return { ...state, pagedPokeList: [...state.pagedPokeList, ...pagedPokeList], fetching: false, hasMore };
    default:
      return state;
  }
};
