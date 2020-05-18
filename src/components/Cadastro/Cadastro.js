import React from 'react';

import "./cadastro.css"
import MyForm from "./Form";
import api from '../services/api';
import imgFundoLogo from '../images/pin.png';

const handleSubmit = async ( values ) => {
  const jsonBody = {
    usuario:{
      email: values.email,
      senha: values.senha
    },
    nomeCompleto: values.nome,
    dataNascimento: "1998-10-03",
    cpf: values.cpf,
    telefoneFixo: values.telefone,
    celular: values.celular
  }
  const options = {
    method: 'POST',
    mode: 'cors', 
    headers: new Headers({
      'Content-type': 'application/json'
    }),
    body: JSON.stringify( jsonBody )
  }
  const url = api.URL_BASE + api.clientes;
  const req = await fetch(url, options);
  console.log(req);
  console.log("-=-=-=-=")
  const resposta = await req.json();
  console.log(resposta)
  console.log("-=-=-=-=")

};
const initialValues = {};

export default function Cadastro(props){  
  
  return(
    <>
      <div className="container-fluid">
        <header className="bg-header h-header text-white row justify-content-around ">
            <div className="logo mt-3 col-3">
              <img src={imgFundoLogo} alt="logo da empresa"></img>
            </div>
            <div className=" col-6 saudacao align-self-end mb-3 ">
                <h2>A Clean House le deseja boas vindas!</h2>
            </div>
            <div className="col-3">
              <button className="btn btn-sair text-white col-3">Sair</button>
            </div>
        </header>
        <div className=""> 
         
          <MyForm handleSubmit={handleSubmit} initialValues={initialValues}/>
 
        </div>
        <div className="svgm"></div>
      </div>    
    </>
  )

}