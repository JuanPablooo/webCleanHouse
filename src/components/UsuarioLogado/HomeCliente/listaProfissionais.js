import React, { useEffect, useState } from "react";
import api from "../../../services/apiAxios";
import fotoPerfilPadrao from "../../images/perfil.png";

export default function ListaProfissionais(props) {
  const controller = props.controller;

  const [profissionais, setProfissionais] = useState([{}, {}]);

  var data = new Date();
  var anoAtual = data.getFullYear();

  //console.log(props.passo1);

  const buscaProfissionais = async () => {
    const response = await api.get("/profissionais");
    const { data } = response;
    setProfissionais(data);
  };

  useEffect(() => {
    buscaProfissionais();
  }, []);

  if (controller === 8) {
    return (
      <div className="pt-5">
        <div className="w-100 bg-white pt-5 pb-5">
          <div className="d-flex flex-row flex-wrap justify-content-around">
            <div className="w-75">
              <div className="row text-center">
                {profissionais.map((profissional) => {
                  var ano = profissional.dataNascimento;
                  ano = ano.substr(6, 4);

                  const idade = anoAtual - ano;
                  return (
                    <div className="col-lg-4 col-md-6" key={profissional.id}>
                      <div className="card mt-3 mb-3">
                        <div className="card-body">
                          <div className="d-flex flex-column">
                            <div className="foto-pequena ml-auto mr-auto">
                              <img src={fotoPerfilPadrao} alt="foto-perfil" />
                            </div>
                            <div className="card-text mt-3 mb-3">
                              <p>{profissional.nomeCompleto}</p>
                              <p>{idade} anos</p>
                              <p>R$ 100,00</p>
                            </div>

                            <button
                              href="#"
                              className="btn btn-primary"
                              onClick={() => {
                                props.setandoIdProfissional(profissional.id);
                                props.handleButtonChange(9);
                              }}
                            >
                              Ver Perfil
                            </button>

                            <button
                              href="#"
                              className="btn mt-2 btn-green text-white"
                              onClick={() => {
                                props.setandoIdProfissional(profissional.id);
                                props.handleButtonChange(10);
                              }}
                            >
                              Escolher
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
}
