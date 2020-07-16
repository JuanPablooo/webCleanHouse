import React from "react";
import { Link } from "react-router-dom";

import { signOut } from "../../services/auth";

//Cabeçalho chamado em HomeCliente e HomeProfissional
export default function Header(props) {
  //Recebe o nome e a foto do usuário
  const primeiroNome = props.primeiroNome;
  const foto = props.foto;

  //Para mudar o estado de controller
  const handleButtonChange = props.handleButtonChange;

  //Botões que mudam de acordo com o tipo do usuário
  const button1 = props.button1;
  const button2 = props.button2;

  return (
    <div className="bg-blue-dark">
      <div className="container">
        <div className="navbar navbar-expand-md ">
          <div id="icon-menu-hamburguer">
            <div id="container-controller">
              <div className="foto-grande ml-auto mr-auto">
                <img src={foto} alt="foto-perfil" />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-green-water text-uppercase 
               text-white mt-3"
                  onClick={() => {
                    handleButtonChange(1);
                  }}
                >
                  Editar
                </button>
              </div>
              <div className="d-flex justify-content-center flex-column">
                <button
                  className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-4 mr-3 ml-3"
                  onClick={() => {
                    handleButtonChange(2);
                  }}
                >
                  Meu Perfil
                </button>
                <button
                  className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
                  onClick={() => {
                    handleButtonChange(3);
                  }}
                >
                  Senha
                </button>
                <button
                  className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
                  onClick={() => {
                    handleButtonChange(4);
                  }}
                >
                  Meu endereço
                </button>
                <button
                  className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
                  onClick={() => {
                    handleButtonChange(5);
                  }}
                >
                  {button1}
                </button>
                <button
                  className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
                >
                  {button2}
                </button>
              </div>
            </div>
          </div>

          <h1 className="text-white margin-left mr-auto mt-2 mb-2">
            Olá, {primeiroNome}
          </h1>
          <div className="d-flex justify-content-end align-items-center">
            <Link
              to="/login"
              className="btn btn-sair text-blue-dark text-uppercase"
              onClick={() => {
                signOut();
              }}
            >
              sair
            </Link>
            <div className="foto-pequena ml-3">
              <img src={foto} alt="foto-perfil" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
