import React from "react";

import "./cadastro.css";
import MyForm from "./Form";
import api from "../../services/api";
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
  };
  const options = {
    method: "POST",
    mode: "cors",
    headers: new Headers({
      "Content-type": "application/json",
    }),
    body: JSON.stringify(jsonBody),
  };

  const url = api.URL_BASE + api.clientes;

  const req = await fetch(url, options);
  console.log(url);
  console.log("-=-=-=-=");
  console.log(req);
  const resposta = await req.json();
  console.log("-=-=-=-=");
  console.log(resposta);
  console.log("-=-=-=-=");
};

const initialValues = {};

export default function Cadastro(props) {
  return (
    <>
      <header className="bg-header h-header pt-2 text-white">
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-2 col-sm-3">
              <div className="logotipo"></div>
            </div>
            <div className="col-4 col-md-8 col-sm-6">
              <h2
                className="d-none d-md-block text-center text-capitalize
                 display-4 text-welcome mt-5"
              >
                A Clean House lhe deseja boas vindas!
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
