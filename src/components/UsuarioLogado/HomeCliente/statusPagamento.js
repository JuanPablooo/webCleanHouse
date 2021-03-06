import React from "react";

export default function StatusPagamento(props) {
  const { controller, handleButtonChange } = props;

  if (controller === 11) {
    return (
      <div className="text-gray">
        <h1 className="text-center mt-5">
          SEU PAGAMENTO FOI <span className="text-green">APROVADO</span>
        </h1>
        <h2 className="text-center mt-3">AGRADECEMOS A SUA PARTICIPAÇÃO!</h2>
        <p className="text-center mt-3">
          VOCÊ PODE AVALIAR O PROFISSIONAL EM
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
