import React from "react";

export default function StatusPedido(props) {
  const { controller, handleButtonChange } = props;

  if (controller === 13) {
    return (
      <div className="text-gray">
        <h1 className="text-center mt-5">
          SEU PEDIDO FOI <span className="text-green">ENVIADO</span>
        </h1>

        <h2 className="text-center mt-3">
          AGUARDE A RESPOSTA DO PROFISSIONAL.
        </h2>
        <p className="text-center mt-3">
          VOCÊ PODE ACOMPANHAR O SEU PEDIDO EM
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
