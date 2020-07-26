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
  const [check, setCheck] = useState(false);

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

  useEffect(() => {
    buscaCliente();
  }, [localStorage.getItem("user")]);

  if (controller === 12) {
    return (
      <div className="text-gray">
        {aba1 ? (
          <>
            <div className="container-card-solicitacao ml-auto mr-auto mb-3 bg-pendentes mt-3 pb-3  text-center">
              <div className="d-flex text-white text-center mb-3">
                <div
                  className="aba bg-pendentes pt-2"
                  onClick={() => mudaAba("pendentes")}
                >
                  <h2>PENDENTES</h2>
                </div>
                <div
                  className="aba bg-finalizados pt-2"
                  onClick={() => mudaAba("finalizados")}
                >
                  <h2>FINALIZADOS</h2>
                </div>
                <div
                  className="aba bg-cancelados pt-2"
                  onClick={() => mudaAba("cancelados")}
                >
                  <h2>CANCELADOS</h2>
                </div>
              </div>
              <div className="row ">
                {solicitacoes.map((solicitacao) => {
                  if (
                    solicitacao.status == "aguardando" ||
                    solicitacao.status == "confirmado"
                  ) {
                    return (
                      <Pedido
                        solicitacao={solicitacao}
                        key={solicitacao.id}
                        aba="pendentes"
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {aba2 ? (
          <>
            <div className="container-card-solicitacao ml-auto mr-auto mb-3 bg-finalizados mt-3 pb-3  text-center">
              <div className="d-flex text-white text-center mb-3">
                <div
                  className="aba bg-pendentes pt-2"
                  onClick={() => mudaAba("pendentes")}
                >
                  <h2>PENDENTES</h2>
                </div>
                <div
                  className="aba bg-finalizados pt-2"
                  onClick={() => mudaAba("finalizados")}
                >
                  <h2>FINALIZADOS</h2>
                </div>
                <div
                  className="aba bg-cancelados pt-2"
                  onClick={() => mudaAba("cancelados")}
                >
                  <h2>CANCELADOS</h2>
                </div>
              </div>
              <div className="row ">
                {solicitacoes.map((solicitacao) => {
                  if (solicitacao.status == "finalizado") {
                    return (
                      <Pedido
                        solicitacao={solicitacao}
                        key={solicitacao.id}
                        aba="finalizados"
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}

        {aba3 ? (
          <>
            <div className="container-card-solicitacao ml-auto mr-auto mb-3 bg-cancelados mt-3 pb-3  text-center">
              <div className="d-flex text-white text-center mb-3">
                <div
                  className="aba bg-pendentes pt-2"
                  onClick={() => mudaAba("pendentes")}
                >
                  <h2>PENDENTES</h2>
                </div>
                <div
                  className="aba bg-finalizados pt-2"
                  onClick={() => mudaAba("finalizados")}
                >
                  <h2>FINALIZADOS</h2>
                </div>
                <div
                  className="aba bg-cancelados pt-2"
                  onClick={() => mudaAba("cancelados")}
                >
                  <h2>CANCELADOS</h2>
                </div>
              </div>
              <div className="row ">
                {solicitacoes.map((solicitacao) => {
                  if (solicitacao.status == "cancelado") {
                    return (
                      <Pedido
                        solicitacao={solicitacao}
                        key={solicitacao.id}
                        aba="cancelados"
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  } else {
    return null;
  }
}
