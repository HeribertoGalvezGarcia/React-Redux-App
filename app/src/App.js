import React, {useEffect} from 'react';
import Pokemon from "./components/Pokemon";
import {useDispatch} from "react-redux";
import {getPokemon} from "./actions";
import FormikForm from "./components/Form";


function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getPokemon("mawile")), [dispatch]);

  return (
    <div>
      <FormikForm dispatch={dispatch} />
      <Pokemon />
    </div>
  );
}

export default App;
