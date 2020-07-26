import React, { useState } from "react";
import api from "../../../services/apiAxios";

export default function MeusPedidos(props) {
  const { controller, handleButtonChange, user } = props;
  console.log(user);

  if (controller === 12) {
    return (
      <div className="text-gray">
        <h1 className="text-center mt-5">
          SEU PAGAMENTO FOI <span className="text-green">APROVADO</span>
        </h1>
        <h2 className="text-center mt-3">
          ENVIAMOS SUA SOLICITAÇÃO PARA O PROFISSIONAL!
        </h2>
      </div>
    );
  } else {
    return null;
  }
}
