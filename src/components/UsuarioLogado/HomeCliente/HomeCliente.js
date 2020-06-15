import React, { useState, useEffect, useCallback } from "react";

import "../style.css";
import Endereços from "../Formularios/endereços";
import Perfil from "../Formularios/perfil";
import Foto from "./foto";
import Serviços from "./serviços";
import Header from "../header";

import fotoPerfilPadrao from "../../images/perfil.png";
import logo from "../../images/logo.png";
import vetorNotificaçao from "../../images/Vector.png";
import Menu from "../menu";

export default function HomeCliente() {
  const [foto, setFoto] = useState("");
  const [controller, setController] = useState(0);

  //Resgata os dados do usuário, converte seu nome em array
  //e substitui as aspas por nada
  const usuario = JSON.parse(localStorage.getItem("user"));
  const nomeUsuario = JSON.stringify(usuario.nomeCompleto).split(" ");
  const primeiroNome = nomeUsuario[0].replace('"', "");

  useEffect(() => {
    usuario.fotoPerfil !== null
      ? setFoto(usuario.fotoPerfil)
      : setFoto(fotoPerfilPadrao);
  }, []);

  useEffect(() => {
    usuario.fotoPerfil !== null
      ? setFoto(usuario.fotoPerfil)
      : setFoto(fotoPerfilPadrao);
  }, [foto]);

  const handleButtonChange = useCallback((estado) => {
    setController(estado);
  });

  return (
    <>
      <Header primeiroNome={primeiroNome} foto={foto} />

      <div className="container-home">
        <div className="container">
          <div className="d-flex flex-row justify-content-between">
            {/* Menu */}
            <Menu
              handleButtonChange={handleButtonChange}
              foto={foto}
              button1={"Pagamento"}
              button2={"minhas residências"}
            />

            {/* Parte do meio */}
            <Serviços controller={controller} />
            <Foto controller={controller} />
            <Perfil controller={controller} user={usuario} />
            <Endereços controller={controller} />

            {/* Notificações */}
            <div id="container-notification">
              <div className="d-flex   flex-column">
                <div id="logo" className="ml-auto mr-auto">
                  <img src={logo} alt="logotipo da empresa" />
                </div>
                <button
                  className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-4 mr-3 ml-3"
                >
                  CHAT
                </button>
                <div
                  id="notificaçao"
                  className="d-flex flex-row bg-white w-75 ml-auto mr-auto 
                  mt-4 justify-content-around align-items-center"
                >
                  <div id="vetor-notificaçao">
                    <img alt="icone notificação" src={vetorNotificaçao} />
                  </div>
                  <p className="text-uppercase text-gray">
                    Seu pedido foi aceito!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
