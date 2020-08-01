import React from "react";
import { useDispatch } from "react-redux";

import Passo2 from "../PassosGenericos/Passo2";
import ImgPasso2 from "../../images/c2.png";
import { actions } from "../../../actions/passosActions";

export default function Passo2Cliente(props) {
  const FormGroup = props.formGroup;
  const dispatch = useDispatch();
  const subitutulo =
    "Precisamos de seu endereço para que o profissional vá até sua residência";

  function proximoPasso() {
    dispatch(actions.mudaPasso(2));
  }

  function passoAnterior() {
    dispatch(actions.mudaPasso(0));
  }
  
  return (
    <>
      <Passo2
        formGroup={FormGroup}
        proximoPasso={proximoPasso}
        img={ImgPasso2}
        infoSubtitulo={subitutulo}
        passoAnterior = {passoAnterior}
      />
    </>
  );
}
