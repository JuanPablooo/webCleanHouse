import React, { useEffect, useState } from "react";
import api from "../../../services/apiAxios";
import fotoPerfilPadrao from "../../images/perfil.png";
import lupa from "../../images/lupa.png";
import close from "../../images/close.png";
import av0 from "../../images/av0.png";
import av1 from "../../images/av1.png";
import av2 from "../../images/av2.png";
import av3 from "../../images/av3.png";
import av4 from "../../images/av4.png";
import av5 from "../../images/av5.png";
import video from "../../images/Video_1595788571.mp4";

export default function Pedido(props) {
  const { solicitacao, aba } = props;

  var status = "";
  console.log(solicitacao);

  var data = new Date();
  var anoAtual = data.getFullYear();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [estrelas, setEstrelas] = useState("");
  const [foto, setFoto] = useState(fotoPerfilPadrao);
  const [video, setVideo] = useState(false);
  const [detalhes, setDetalhes] = useState(false);
  const servicos = solicitacao.servicos;

  const estrelasImagens = [
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
  ];

  if (solicitacao.status == "aguardando") {
    status = "Aguardando confirmação do Profissional";
  } else {
    status = solicitacao.status;
  }

  const resgataDadosProfissional = async (id) => {
    const response = await api.get("/profissionais/" + id);
    const { data } = response;
    const { nomeCompleto, dataNascimento, avaliacao } = data;
    const { urlPerfil, urlVideo } = data.usuario;

    var ano = dataNascimento;
    ano = ano.substr(6, 4);

    const idade = anoAtual - ano;

    setNome(nomeCompleto);
    setIdade(idade);
    setEstrelas(avaliacao);
    urlPerfil != null ? setFoto(urlPerfil) : setFoto(fotoPerfilPadrao);
    urlVideo != null ? setVideo(urlVideo) : setVideo(false);
  };

  const mudaStatus = async (action) => {
    var response = "";
    var ativar = "";
    switch (action) {
      case "cancelarPedido":
        ativar = window.confirm("Deseja cancelar esse pedido?");

        ativar
          ? (response = await api.put("/solicitacao/status/" + solicitacao.id, {
              status: "cancelado",
            }))
          : (response = "a");

        break;
      case "finalizarPedido":
        response = await api.put("/solicitacao/status/" + solicitacao.id, {
          status: "finalizado",
        });

        break;
    }
  };

  useEffect(() => {
    resgataDadosProfissional(solicitacao.idProfissional);
  }, []);

  return (
    <>
      {detalhes ? (
        <div className="detalhes pb-5">
          <div className="d-flex justify-content-end">
            <img
              src={close}
              alt="detalhes-do-pedido"
              className="icon-detail mr-3 mt-3 "
              onClick={() => setDetalhes(false)}
            />
          </div>
          <h1 className="text-white">DETALHES</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="card-solicitacao ml-auto mr-auto text-center sombra">
                <div className="d-flex flex-column pt-3 pb-3 align-items-center w-100 justify-content-center">
                  <div className="foto-grande">
                    <img src={foto} alt="foto-perfil" />
                  </div>
                  <img
                    src={estrelasImagens[estrelas].img}
                    alt="foto"
                    className="w-50 mt-3"
                  />
                  <h4 className="mt-4">{nome}</h4>
                  <p>{idade} anos</p>
                  <p>R${solicitacao.preco}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-solicitacao ml-auto mr-auto text-center sombra">
                <div className="d-flex flex-column pt-3 pb-3 align-items-center w-100 justify-content-center">
                  <h4>Sobre O Pedido</h4>
                  <p className="pt-1">Agendado para: {solicitacao.data}</p>
                  <p>Serviços Solicitados:</p>
                  {solicitacao.servicos.cozinhar ? <p>Cozinhar;</p> : null}
                  {solicitacao.servicos.faxina ? <p>Faxina;</p> : null}
                  {solicitacao.servicos.passar_lavar_roupa ? (
                    <p>Passar e Lavar Roupas;</p>
                  ) : null}
                  <hr />
                  <p>status: {status}</p>
                  <p>
                    Endereço: {solicitacao.residencia.endereco.rua},
                    {solicitacao.residencia.endereco.numero},
                  </p>
                  <p>{solicitacao.residencia.endereco.bairro} -</p>
                  <p>{solicitacao.residencia.endereco.cep}</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-white">
              <h1 className="mt-5">VÍDEO DE APRESENTAÇÃO</h1>
              {video != false ? (
                <video controls width="610" height="360">
                  <source src={video} type="video/mp4" />
                  <object data={video} type="application/x-shockwave-flash">
                    <embed
                      src="videos/Omelete%20Entrevista.mp4"
                      type="application/x-shockwave-flash"
                      allowfullscreen="false"
                      allowscriptaccess="always"
                    />
                  </object>
                  Formato não suportado
                </video>
              ) : (
                <p>ESSE PROFISSIONAL NÃO TEM VÍDEO</p>
              )}
            </div>
            <div className="col-12 text-white">
              <h1 className="mt-5">COMENTÁRIOS</h1>
              {estrelas != 0 ? (
                <div>comentários</div>
              ) : (
                <p>ESSE PROFISSIONAL NÃO POSSUI AVALIAÇÕES</p>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <div className="col-md-6">
        <div className="card-solicitacao ml-auto mr-auto text-center">
          <div className="d-flex flex-column align-items-center w-100 justify-content-center">
            <div className="w-100 d-flex justify-content-end">
              <img
                src={lupa}
                alt="detalhes-do-pedido"
                className="icon-detail"
                onClick={() => setDetalhes(true)}
              />
            </div>

            <div className="foto-grande">
              <img src={foto} alt="foto-perfil" />
            </div>
          </div>

          <h3 className="mt-3">{nome}</h3>
          <p>Agendado para: {solicitacao.data}</p>
          <p>R${solicitacao.preco}</p>
          <p className="text-capitalize">{status}</p>

          {aba == "pendentes" ? (
            <>
              <div className="d-flex flex-column align-items-center">
                <button
                  href="#"
                  className="btn btn-primary mt-3 w-50 text-white"
                  onClick={() => {
                    mudaStatus("cancelarPedido");
                  }}
                >
                  Cancelar
                </button>

                <button
                  href="#"
                  className="btn mt-2 btn-green w-50 text-white"
                  onClick={() => {
                    mudaStatus("finalizarPedido");
                  }}
                >
                  Finalizar
                </button>
              </div>
            </>
          ) : (
            <> </>
          )}
          {aba == "finalizados" ? (
            <button
              href="#"
              className="btn btn-primary mt-2 text-white"
              onClick={() => {
                mudaStatus("cancelarPedido");
              }}
            >
              Avaliar
            </button>
          ) : (
            <> </>
          )}

          <br></br>
        </div>
      </div>
    </>
  );
}
