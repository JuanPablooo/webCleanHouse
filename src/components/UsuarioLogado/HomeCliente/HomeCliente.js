import React, { useState, useEffect, useCallback } from "react";

import "../style.css";

//Componentes da parte do meio
import Inicio from "./inicio";
import Endereços from "./endereços";
import Perfil from "../FormulariosGenericos/perfil";
import Senha from "../FormulariosGenericos/senha";
import NovoServico from "./novoServico";
import ListaProfissionais from "./listaProfissionais";
import Foto from "./foto";

//Cabeçalho e menu lateral
import Header from "../header";

//Imagens
import fotoPerfilPadrao from "../../images/perfil.png";
import logo from "../../images/logo.png";
// import vetorNotificaçao from "../../images/Vector.png";

export default function HomeCliente() {
  const [foto, setFoto] = useState("");
  const [controller, setController] = useState(0);

  const [passo1, setPasso1] = useState({
    faxina: "",
    roupa: "",
    cozinhar: "",
    residencia: 2,
  });

  //Resgata os dados do usuário, converte seu nome em array
  //e substitui as aspas por nada
  const usuario = JSON.parse(localStorage.getItem("user"));
  const nomeUsuario = JSON.stringify(usuario.nomeCompleto).split(" ");
  const primeiroNome = nomeUsuario[0].replace('"', "");

  const initialController = () => {
    setController(0);
  };

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

  const setandoPasso1 = useCallback((estado) => {
    setPasso1(estado);
  });

  return (
    <>
      {/* Cabeçalho passando como props o nome e a foto do usuário */}
      <Header
        primeiroNome={primeiroNome}
        handleButtonChange={handleButtonChange}
        foto={foto}
        button1={"Pagamento"}
        button2={"minhas residências"}
        button3={"meus pedidos"}
      />

      <div className="container-home">
        <div className="container">
          <ListaProfissionais controller={controller} passo1={passo1} />
          <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-column container-perfil ml-auto mr-auto">
              <div
                id="container-notification-md"
                className="d-flex align-items-center"
              >
                <div id="logo" className="ml-auto mr-auto">
                  <img
                    src={logo}
                    alt="logotipo da empresa"
                    onClick={() => initialController()}
                  />
                </div>
                <button
                  className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-4 mr-3 ml-3"
                >
                  BAIXAR O APP
                </button>
                <button
                  className="btn text-uppercase 
                btn-green text-white mt-4 mr-3 ml-3"
                  onClick={() => {
                    handleButtonChange(10);
                  }}
                >
                  NOVO SERVIÇO
                </button>
              </div>

              {/* Componentes do meio */}
              <Inicio
                controller={controller}
                handleButtonChange={handleButtonChange}
              />
              <Foto controller={controller} user={usuario} foto={foto} />
              <Perfil controller={controller} user={usuario} />
              <Senha controller={controller} user={usuario} />
              <Endereços controller={controller} user={usuario} />
              <NovoServico
                controller={controller}
                user={usuario}
                handleButtonChange={handleButtonChange}
                setandoPasso1={setandoPasso1}
              />
            </div>

            {/* Notificações */}
            {controller !== 9 ? (
              <div id="container-notification" className="d-none d-lg-block">
                <div className="d-flex   flex-column">
                  <div id="logo" className="ml-auto mr-auto">
                    <img
                      src={logo}
                      alt="logotipo da empresa"
                      onClick={() => initialController()}
                    />
                  </div>
                  <button
                    className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-4 mr-3 ml-3"
                  >
                    BAIXAR O APP
                  </button>
                  <button
                    className="btn text-uppercase 
                    btn-green text-white mt-4 mr-3 ml-3"
                    onClick={() => {
                      handleButtonChange(10);
                    }}
                  >
                    NOVO SERVIÇO
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
