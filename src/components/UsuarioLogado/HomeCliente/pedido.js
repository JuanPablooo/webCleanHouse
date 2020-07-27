import React, { useEffect, useState } from "react";
import api from "../../../services/apiAxios";
import fotoPerfilPadrao from "../../images/perfil.png";

export default function Pedido(props) {
  const { solicitacao, aba } = props;

  var status = "";

  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState(fotoPerfilPadrao);

  if (solicitacao.status == "aguardando") {
    status = "Aguardando confirmação do Profissional";
  }

  const resgataDadosProfissional = async (id) => {
    const response = await api.get("/profissionais/" + id);
    const { data } = response;
    const { nomeCompleto } = data;
    const { urlPerfil } = data.usuario;

    setNome(nomeCompleto);
    urlPerfil != null ? setFoto(urlPerfil) : setFoto(fotoPerfilPadrao);
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
    <div className="col-md-6">
      <div className="card-solicitacao ml-auto mr-auto text-center">
        <div className="foto-grande ml-auto mr-auto mt-4">
          <img src={foto} alt="foto-perfil" />
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
  );
}
