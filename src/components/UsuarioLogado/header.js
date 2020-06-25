import React from "react";
import { Link } from "react-router-dom";

import { signOut } from "../../services/auth";

//Cabeçalho chamado em HomeCliente e HomeProfissional
export default function Header(props) {
  //Recebe o nome e a foto do usuário
  const primeiroNome = props.primeiroNome;
  const foto = props.foto;

  return (
    <div className="bg-blue-dark">
      <div className="container">
        <div className="navbar navbar-expand-md ">
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
