import React from "react";
import api from "../../../services/apiAxios";
import "./HomeCliente.css";

export default function PerfilProfissional(props) {
  const { controller, passo1, user, handleButtonChange } = props;

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

  if (controller === 9) {
    return (
      <div>
        <h1 className="mt-5 mb-5 text-center">PERFIL DO PROFISSIONAL</h1>
        <p>Nenhum vídeo cadastrado</p>
        <button
          href="#"
          className="btn mt-2 btn-green text-white"
          onClick={() => {
            handleSubmit(props.idProfissional);
          }}
        >
          Escolher
        </button>
      </div>
    );
  } else {
    return null;
  }
}
