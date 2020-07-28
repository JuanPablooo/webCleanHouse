import React from "react";

import "./CadastroCliente.css";
import MyForm from "../Form";
import api from "../../../services/apiAxios";
import { Link } from "react-router-dom";

const handleSubmit = async (values) => {
  const jsonBody = {
    usuario: {
      email: values.email,
      senha: values.senha,
    },
    nomeCompleto: values.nome,
    dataNascimento: "1998-10-03",
    cpf: values.cpf,
    telefoneFixo: values.telefone,
    celular: values.celular,
    residencias: [
      {
        quantidadeQuartos: 0,
        endereco: {
          cep: values.cep,
          rua: values.rua,
          bairro: values.bairro,
          estado: values.estado,
          pais: "Brasil",
          complemento: values.complemento,
          numero: values.numero,
          cidade: values.cidade,
        },
      },
    ],
  };

  try {
    const { data } = await api.post("/clientes", jsonBody);
    console.log(data);

    const image = values.imagem;

    const responseImagem = await api.post(
      `/upload/foto/${data.usuario.id}`,
      image
    );
    console.log(responseImagem);
  } catch (e) {
    return console.log(e);
  }
};

const initialValues = {};

export default function Cadastro(props) {
  return (
    <>
      {console.log("salve")}
      <header className="bg-header h-header pt-2 text-white">
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-2 col-sm-3">
              <div className="logotipo"></div>
            </div>
            <div className="col-4 col-md-8 col-sm-6">
              <h2
                className="d-none d-md-block text-center 
                 display-4 text-welcome mt-5"
              >
                Bem-vindo à nossa plataforma!
              </h2>
            </div>
            <div className="col-4 col-md-2 col-sm-3">
              <Link to="/" className="btn btn-sair text-white">
                Sair
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="">
          <MyForm handleSubmit={handleSubmit} initialValues={initialValues} />
        </div>
        <div className="svgm"></div>
      </div>
    </>
  );
}
