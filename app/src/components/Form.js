import React from "react";
import {withFormik, Form, Field} from "formik";
import {getPokemon} from "../actions";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 50px auto;
`;

const StyledField = styled(Field)`
  margin: 5px;
`;

const StyledSubmit = styled.input`
  margin: 5px;
`;

function PokemonForm() {
  return (
    <StyledForm>
      <StyledField type="text" placeholder="input pokemon..." name="pokemon" />
      <StyledSubmit type="submit" value="Submit!" />
    </StyledForm>
  );
}

const FormikPokemonForm = withFormik({
  mapPropsToValues: () => ({pokemon: '' }),
  handleSubmit: ({pokemon}, {props: {dispatch}}) => {
    dispatch(getPokemon(pokemon.toLowerCase()));
  }
})(PokemonForm);

export default FormikPokemonForm;
