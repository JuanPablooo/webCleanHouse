//IMPORTES
import React from "react";
import IconClean from "../../images/icon-clean.png";
import IconCozinha from "../../images/icon-cozinha.png";
import IconRoupa from "../../images/icon-roupa.png";

//-------------------INICIO-------------------------------
export default function Inicio(props) {
  const controller = props.controller;

  // Caso o valor do estado de controller não for 0, não retorna nada
  if (controller !== 0) return null;
  else {
    return (
      <section className="bg-white">
        <div className="d-flex justify-content-around pt-3">
          <h1 className="display-4 text-center mb-1 mt-1 text-uppercase">
            Serviços
          </h1>
          <button
            type="button"
            className="btn btn-green h-50 text-white w-35 mt-4 mb-5 text-uppercase"
          >
            Novo serviço
          </button>
        </div>
        <div className="pl-5 pr-5">
          <div className="d-flex justify-content-around align-items-center">
            <img src={IconClean} />
            <p className="w-65">
              Limpeza: Profissionais que limpam todos os cômodos da sua casa.
            </p>
          </div>
          <div className="d-flex mt-4 justify-content-around align-items-center">
            <img src={IconCozinha} />
            <p className="w-65">
              Cozinha: Profissionais que fazem o preparo da sua comida.
            </p>
          </div>
          <div className="d-flex mt-4 mb-3 justify-content-around align-items-center">
            <img src={IconRoupa} />
            <p className="w-65">
              Roupas: Empregados (as) que lavam e passam suas roupas.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
