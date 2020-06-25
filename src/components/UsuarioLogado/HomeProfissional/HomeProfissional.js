import React, { useState, useEffect, useCallback } from "react";

import "../style.css";

//Componentes da parte do meio
import Endereço from "./endereço";
import Perfil from "../FormulariosGenericos/perfil";
import Senha from "../FormulariosGenericos/senha";

//Cabeçalho e menu lateral
import Header from "../header";
import Menu from "../menu";

//Imagens
import fotoPerfilPadrao from "../../images/perfil.png";
import logo from "../../images/logo.png";
import vetorNotificaçao from "../../images/Vector.png";

export default function HomeProfissional() {
  const [foto, setFoto] = useState("");
  const [controller, setController] = useState(0);

  //Resgata os dados do usuário, converte seu nome em array
  //e substitui as aspas por nada
  const usuario = JSON.parse(localStorage.getItem("user"));
  const nomeUsuario = JSON.stringify(usuario.nomeCompleto).split(" ");
  const primeiroNome = nomeUsuario[0].replace('"', "");

  //Executado assim que o componente é renderizado
  useEffect(() => {
    //Verifca se a foto está nula
    usuario.fotoPerfil !== null
      ? setFoto(usuario.fotoPerfil)
      : setFoto(fotoPerfilPadrao);
  }, []);

  //Executado caso o estado da foto seja alterado
  useEffect(() => {
    usuario.fotoPerfil !== null
      ? setFoto(usuario.fotoPerfil)
      : setFoto(fotoPerfilPadrao);
  }, [foto]);

  //Função para alterar o controller de acordo com o clique
  const handleButtonChange = useCallback((estado) => {
    setController(estado);
  });

  return (
    <>
      {/* Cabeçalho passando como props o nome e a foto do usuário */}
      <Header primeiroNome={primeiroNome} foto={foto} />

      <div className="container-home">
        <div className="container">
          <div className="d-flex flex-row justify-content-between">
            {/* Menu
                passando a função que altera o estado controller
                a foto do usuário
                e as strings dos botões que mudam dependendo do 
                tipo de usuário
            */}
            <Menu
              handleButtonChange={handleButtonChange}
              foto={foto}
              button1={"Meu serviço"}
              button2={"Agenda"}
            />

            {/* Componentes do meio */}
            <Perfil controller={controller} user={usuario} />
            <Endereço controller={controller} user={usuario} />
            <Senha controller={controller} user={usuario} />

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
