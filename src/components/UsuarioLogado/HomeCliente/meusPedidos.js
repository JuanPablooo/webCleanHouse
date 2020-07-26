import React, { useState, useEffect } from "react";
import api from "../../../services/apiAxios";
import fotoPerfilPadrao from "../../images/perfil.png";
import Pedido from "./pedido";

export default function MeusPedidos(props) {
  const { controller, handleButtonChange, user } = props;

  const [solicitacoes, setSolicitacoes] = useState({});
  const [aba1, setAba1] = useState(true);
  const [aba2, setAba2] = useState(false);
  const [aba3, setAba3] = useState(false);

  const buscaCliente = async () => {
    const response = await api.get("/clientes/" + user.id);
    const { data } = response;
    const { solicitacaoDeServicos } = data;

    setSolicitacoes(solicitacaoDeServicos);
  };

  const mudaAba = (nome) => {
    switch (nome) {
      case "pendentes":
        setAba1(true);
        setAba2(false);
        setAba3(false);
        break;
      case "finalizados":
        setAba1(false);
        setAba2(true);
        setAba3(false);
        break;
      case "cancelados":
        setAba1(false);
        setAba2(false);
        setAba3(true);
        break;
    }
  };

  useEffect(() => {
    buscaCliente();
  }, []);

  if (controller === 12) {
    return (
      <div className="text-gray">
        {aba1 ? (
          <div className="container-card-solicitacao ml-auto mr-auto mt-3 mb-3 pb-3 bg-pendentes text-center">
            <h1 className="text-uppercase mt-4  text-white">pendentes</h1>
            <div className="row">
              {solicitacoes.map((solicitacao) => {
                if (solicitacao.status == "aguardando") {
                  return (
                    <Pedido solicitacao={solicitacao} key={solicitacao.id} />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return null;
  }
}
