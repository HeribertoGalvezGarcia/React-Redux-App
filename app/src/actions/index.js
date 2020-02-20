import axios from 'axios';

const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

function getPokemon(pokemon) {
  return dispatch => {
    dispatch({type: FETCH_POKEMON_START});
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
      .then(({data}) => dispatch({type: FETCH_POKEMON_SUCCESS, payload: data}))
      .catch(err => dispatch({type: FETCH_POKEMON_FAIL, payload: err}));
  };
}

export {FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAIL, getPokemon};
