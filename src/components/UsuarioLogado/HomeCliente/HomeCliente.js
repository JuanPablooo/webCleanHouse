import React, { useState } from "react";
import { Link } from "react-router-dom";

import { signOut } from "../../../services/auth";
import "../style.css";
import fotoPerfilPadrao from "../../images/perfil.png";

export default function HomeCliente() {
  //Resgata os dados do usuário no localStorage
  const usuario = JSON.parse(localStorage.getItem("user"));
  console.log(usuario);

  //Converte o nomeCompleto em String e dps em Array separando por espaço
  const nomeUsuario = JSON.stringify(usuario.nomeCompleto).split(" ");
  //Substitui as aspas por nada
  const primeiroNome = nomeUsuario[0].replace('"', "");

  //State da foto
  const [foto, setFoto] = useState("");

  //Se existir a foto, atribui no state
  //Caso contrario atribui a foto padrão
  const FotoPerfil = () => {
    usuario.fotoPerfil !== null
      ? setFoto(usuario.fotoPerfil)
      : setFoto(fotoPerfilPadrao);
    return <img src={foto} alt="foto-perfil" />;
  };

  return (
    <>
      <div className="bg-blue-dark">
        <div className="container">
          {/* Colocar em um arquivo separado dps */}
          <div className="navbar navbar-expand-md ">
            <h1 className="text-white ml-auto mr-auto mt-2 mb-2">
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
                <FotoPerfil />
              </div>
            </div>
          </div>
          {/* Colocar em um arquivo separado dps */}
        </div>
      </div>
      <div>
        <div className="container">
          <div id="container-controller">
            <div className="foto-grande ml-auto mr-auto">
              <FotoPerfil />
            </div>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-editar-foto text-uppercase 
              bg-green-water text-white mt-3"
              >
                Editar
              </button>
            </div>
            <div className="d-flex justify-content-center flex-column">
              <button
                className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-4 mr-3 ml-3"
              >
                Meu perfil
              </button>
              <button
                className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
              >
                Meu endereço
              </button>
              <button
                className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
              >
                pagamento
              </button>
              <button
                className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
              >
                minhas residências
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
