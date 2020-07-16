//IMPORTES
import React from "react";
import Arrow from "../../images/arrow.png";

//-------------------INICIO-------------------------------
export default function Inicio(props) {
  const controller = props.controller;

  // Caso o valor do estado de controller não for 0, não retorna nada
  if (controller !== 0) return null;
  else {
    return (
      <section className="bg-white">
        <h1 className="display-4 text-center mb-4 mt-5">SEJA BEM VINDO(A)</h1>
        <p className="text-center mb-4 w-75 ml-auto mr-auto">
          PARA VIZUALIZAR OFERTAS DE SERVIÇO BAIXE O NOSSO APLICATIVO{" "}
        </p>
        <div className="d-flex align-items-center flex-column">
          <img src={Arrow} className="ml-auto mr-auto"  alt="imagen ilustrativa"/>
          <button
            type="button"
            className="btn btn-green text-white w-35 mt-4 mb-5 text-uppercase"
          >
            Clique aqui
          </button>
        </div>
      </section>
    );
  }
}
