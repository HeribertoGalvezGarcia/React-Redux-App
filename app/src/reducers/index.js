import {FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL} from "../actions";

const initialState = {
  data: '',
  error: '',
  isFetching: false
};

function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: ''
      };
    case FETCH_POKEMON_FAIL:
      return {
        ...state,
        error: payload
      };
    default:
      return state;

  }
}

export {initialState, reducer};
