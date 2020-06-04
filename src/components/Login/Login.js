import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export default function Login() {
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
                <h1 className="display-4">Descomplique a sua vida</h1>
                <p className="mt-2 lead">
                  Economize seu tempo! A clean house é a plataforma mais prática
                  de encontrar profissionais de confiança para cuidar da sua
                  casa.
                </p>
                <Link
                  className="btn btn-blue-dark btn-radius
                  ml-auto mr-auto text-capitalize"
                  to="/"
                >
                  Volte para a home
                </Link>
              </div>
            </div>

            <div className="col-md-2 d-flex justify-content-end align-items-start">
              <Link
                to="/cadastro"
                className="btn btn-blue-dark btn-radius mt-2"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row container-login">
            <div className="col-md-6 pt-5 pb-5 ">
              <div
                className="d-flex justify-content-center align-items-center
              flex-column mt-5"
              >
                <input
                  class="form-control w-50"
                  type="text"
                  placeholder="e-mail"
                />
                <input
                  class="form-control mt-3 w-50"
                  type="text"
                  placeholder="senha"
                />
                <div className="d-flex justify-content-between w-50 mt-4">
                  <Link className="text-blue">Esqueci minha senha</Link>
                  <button
                    type="button"
                    className="btn btn-blue-dark text-white"
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center"></div>
            </div>
          </div>
          <div className="svg"></div>
        </div>
      </section>
    </>
  );
}
