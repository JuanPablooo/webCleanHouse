import React from "react";
import api from "../../../services/apiAxios";

export default function StatusPagamento(props) {
  const { controller, handleButtonChange } = props;

  if (controller === 11) {
    return (
      <div className="text-gray">
        <h1 className="text-center mt-5">
          SEU PAGAMENTO FOI <span className="text-green">APROVADO</span>
        </h1>
        <h2 className="text-center mt-3">
          ENVIAMOS SUA SOLICITAÇÃO PARA O PROFISSIONAL!
        </h2>
        <h2 className="text-center mt-3">AGUARDE A RESPOSTA DO MESMO.</h2>
        <p className="text-center mt-3">
          VOCÊ PODE VERIFICAR O STATUS DO SEU PEDIDO EM
          <span
            onClick={() => {
              handleButtonChange(12);
            }}
            className="link"
          >
            MEUS PEDIDOS
          </span>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
