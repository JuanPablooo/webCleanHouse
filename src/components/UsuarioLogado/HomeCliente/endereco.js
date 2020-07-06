import React from "react";

function Endereco(props) {
  const cep = props.residencia.endereco.cep;
  const numero = props.residencia.endereco.numero;
  const mudaEtapa = props.etapaHandler;
  const deletaEndereco = props.deletaEndereco;
  const localStorageHandler = props.localStorageHandler;

  const residencia = props.residencia;

  return (
    <div className="d-flex justify-content-around mt-3 mb-3">
      <p className="mt-3">
        CEP: {cep}, Número: {numero}
      </p>
      <button
        className="btn btn-green text-white"
        onClick={() => mudaEtapa(residencia, residencia.id)}
      >
        EDITAR
      </button>
      <button
        className="btn btn-green text-white"
        onClick={() =>
          deletaEndereco(residencia.id, props.user, localStorageHandler)
        }
      >
        EXCLUIR
      </button>
    </div>
  );
}

export default Endereco;
