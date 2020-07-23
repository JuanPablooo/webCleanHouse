import React from "react";

import "./CadastroProfissional.css";
import MyForm from "../FormProf";
import api from "../../../services/apiAxios";
import { Link } from "react-router-dom";

function formatData(data) {
  const dia  = data.split("/")[0]
  const mes  = data.split("/")[1]
  const ano  = data.split("/")[2]

  return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2)
}

const handleSubmit = async (values) => {
  let jsonBody = {
    "usuario": {
      "email": values.email,
      "senha": values.senha,
      "tipo": "profissional"
  }, 
  "nomeCompleto": values.nome,
  "cpf": values.cpf,
  "dataNascimento": formatData(values.dataNascimento),
  "fotoPerfil": null,
  "videoPerfil": null,
  "telefoneFixo": values.telefone,
  "celular": values.celular,
  "servicos": {
      "passar_lavar_roupa": values.passar ? values.passar : false,
      "cozinhar": values.cozinhar ? values.cozinhar : false,
      "faxina": values.lavar ? values.lavar : false
  },
  "enderecos": [
    {
        "numero": values.numero,
        "cep": values.cep,
        "cidade": values.cidade,
        "rua": values.rua,
        "bairro": values.bairro,
        "estado": "SP",
        "pais": "Brasil",
        "complemento": values.complemento,
        "pontoReferencia": ""
    }
  ],
    "cidades": []
  }

  if (typeof values.oeste !== 'undefined') {
    const cidades = jsonBody.cidades

    for (const cidade in values.oeste) {
      cidades.push({ nome: cidade })
    }

    jsonBody = { ...jsonBody, 
      cidades: [ ...cidades ] 
    } 
  }

  if (typeof values.sudoeste !== 'undefined') {
    const cidades = jsonBody.cidades

    for (const cidade in values.sudoeste) {
      cidades.push({ nome: cidade })
    }

    jsonBody = { ...jsonBody, 
      cidades: [ ...cidades ] 
    } 
  }

  if (typeof values.norte !== 'undefined') {
    const cidades = jsonBody.cidades

    for (const cidade in values.norte) {
      cidades.push({ nome: cidade })
    }

    jsonBody = { ...jsonBody, 
      cidades: [ ...cidades ] 
    } 
  }

  if (typeof values.sudeste !== 'undefined') {
    const cidades = jsonBody.cidades

    for (const cidade in values.sudeste) {
      cidades.push({ nome: cidade })
    }

    jsonBody = { ...jsonBody, 
      cidades: [ ...cidades ] 
    } 
  }

  if (typeof values.leste !== 'undefined') {
    const cidades = jsonBody.cidades

    for (const cidade in values.leste) {
      cidades.push({ nome: cidade })
    }

    jsonBody = { ...jsonBody, 
      cidades: [ ...cidades ] 
    } 
  }

  try {
    const { data } = await api.post('/profissionais', jsonBody)
    console.log(data)
  } catch(e){
    return console.log(e)
  }
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
