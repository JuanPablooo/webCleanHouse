import React, { useEffect, useState } from "react";
import api from "../../../services/apiAxios";
import fotoPerfilPadrao from "../../images/perfil.png";
import av1 from "../../images/av1.png";
import av2 from "../../images/av2.png";
import av3 from "../../images/av3.png";
import av4 from "../../images/av4.png";
import av5 from "../../images/av5.png";

export default function ListaProfissionais(props) {
  const controller = props.controller;

  const [profissionais, setProfissionais] = useState([{}, {}]);
  const [estrelas, setEstrelas] = useState([
    {
      img: 1,
    },
    {
      img: av1,
    },
    {
      img: av2,
    },
    {
      img: av3,
    },
    {
      img: av4,
    },
    {
      img: av5,
    },
  ]);

  var data = new Date();
  var anoAtual = data.getFullYear();

  const buscaProfissionais = async () => {
    const response = await api.get("/profissionais");
    const { data } = response;

    // const cincoEstrelas = data.filter(data.avaliacao == 5);
    // console.log(cincoEstrelas);

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
                            <div className="card-text mt-1 mb-3">
                              <img
                                src={estrelas[profissional.avaliacao].img}
                                alt="foto"
                                className="w-50 mb-3"
                              />
                              <p>{profissional.nomeCompleto}</p>
                              <p>{idade} anos</p>
                              <p>R$ 144,00</p>
                            </div>

                            <button
                              href="#"
                              className="btn btn-primary"
                              onClick={() => {
                                props.setandoPasso(profissional.id, "passo2");
                                props.handleButtonChange(9);
                              }}
                            >
                              Ver Perfil
                            </button>

                            <button
                              href="#"
                              className="btn mt-2 btn-green text-white"
                              onClick={() => {
                                props.setandoPasso(profissional.id, "passo2");
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
