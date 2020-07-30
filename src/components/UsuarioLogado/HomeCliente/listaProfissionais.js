import React, { useEffect, useState } from "react";
import api from "../../../services/apiAxios";
import fotoPerfilPadrao from "../../images/perfil.png";
import av0 from "../../images/av0.png";
import av1 from "../../images/av1.png";
import av2 from "../../images/av2.png";
import av3 from "../../images/av3.png";
import av4 from "../../images/av4.png";
import av5 from "../../images/av5.png";

export default function ListaProfissionais(props) {
  const { controller, passo1, user, handleButtonChange } = props;

  const [profissionais, setProfissionais] = useState([{}, {}]);
  const [estrelas, setEstrelas] = useState([
    {
      img: av0,
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

  const handleSubmit = async (idProfissional) => {
    const rsData = passo1.data.split("/");
    const dia = parseInt(rsData[0], 10) + 1;
    const data = rsData[2] + "-" + rsData[1] + "-" + rsData[0];
    console.log(data);

    const solicitacao = {
      idCliente: user.id,
      idProfissional: idProfissional,
      residencia: {
        id: passo1.residencia,
      },
      servicos: {
        passar_lavar_roupa: passo1.roupa,
        cozinhar: passo1.cozinhar,
        faxina: passo1.faxina,
      },
      data: data,
      preco: 144.0,
      observacao: passo1.observacao,
      status: "aguardando",
    };
    console.log(solicitacao);

    try {
      const { data } = await api.post("/solicitacao/servico", solicitacao);
      const cliente = await api.get("/clientes/" + data.idCliente);
      const clienteData = cliente.data;

      localStorage.setItem("user", JSON.stringify(clienteData));
      handleButtonChange(13);
    } catch (e) {
      return console.log(e);
    }
  };

  if (controller === 8) {
    return (
      <div className="pt-5">
        <div className="w-100 bg-white pt-5 pb-5">
          <div className="d-flex flex-row flex-wrap justify-content-around">
            <div className="w-75">
              <div className="row text-center text-gray">
                <h1 className="text-capitalize">
                  Alguns Profissionais que possam lhe interessar
                </h1>
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
                              {profissional.usuario.urlPerfil !== null ? (
                                <img
                                  src={profissional.usuario.urlPerfil}
                                  alt="foto-perfil"
                                />
                              ) : (
                                <img src={fotoPerfilPadrao} alt="foto-perfil" />
                              )}
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
                                handleSubmit(profissional.id);
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
