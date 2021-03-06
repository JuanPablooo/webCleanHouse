import React from "react";
import "./CadastroIntermedio.css";
import { Link } from "react-router-dom";

export default function CadastroIntermedio(props) {
  return (
    <>
      <section className="bg-blue text-white">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-2">
              <div className="logotipo"></div>
            </div>

            <div className="col-md-8 mt-5 pt-5 text-center">
              <div className="d-flex flex-column justify-content-center">
                <h1 className="display-4">Escolha o seu tipo de perfil</h1>
                <p className="mt-2 lead">
                  Para iniciar, informe-nos a seguir se você deseja limpar casas
                  ou se quer sua casa limpa.
                </p>
                <Link
                  className="btn btn-blue-dark btn-radius
                  ml-auto mr-auto"
                  to="/"
                >
                  Voltar para Home
                </Link>
              </div>
            </div>

            <div className="col-md-2 d-flex justify-content-end align-items-start">
              <Link to="/login" className="btn btn-blue-dark btn-radius text-capitalize mt-2">
                entrar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex flex-md-row text-center">
        <div className="bg-blue2 w-md-50 d-flex center end text-white">
          <div
            className="profile-type-container d-flex flex-column 
            align-items-center pt-5 pb-5"
          >
            <p className="p-size text-capitalize">sou cliente</p>
            <div id="imagem_cliente"></div>
            <p className="mt-2 lead">
              Clique no botão se deseja contratar serviços domésticos
            </p>
            <button
              className="btn btn-lg btn-blue btn-radius mb-1"
              onClick={() => {
                props.history.push("/cadastro/cliente");
              }}
            >
              Registre-se
            </button>
          </div>
        </div>
        <div className="w-md-50 d-flex center start">
          <div
            className="profile-type-container d-flex flex-column 
            align-items-center pt-5 pb-5"
          >
            <p className="p-size text-capitalize">sou profissional</p>
            <div id="imagem_profissional"></div>
            <p className="mt-2 lead">
              Clique no botão se deseja realizar serviços domésticos
            </p>
            <button
              className="btn btn-lg btn-blue-dark btn-radius mb-1"
              onClick={() => {
                props.history.push("/cadastro/profissional");
              }}
            >
              Registre-se
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
