//IMPORTES
import React, { useState, useCallback } from "react";
import {
  buscarProfissional,
  atualizarProfissional,
} from "../../../services/profissionais";
import { Form, Input } from "@rocketseat/unform";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastSuccess from "../toastSuccess";
import ToastError from "../toastError";
import * as Yup from "yup";

//VALIDAÇÕES (TERMINAR DPS)
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),
});

//-------------------MEU SERVIÇO -------------------------------
export default function MeuServiço(props) {
  const controller = props.controller;
  const user = props.user;

  //State usuário
  const [faxina, setFaxina] = useState(typeof user.servicos !== 'undefined' ? user.servicos.faxina : "");
  const [cozinhar, setCozinhar] = useState(typeof user.servicos !== 'undefined' ? user.servicos.cozinhar : "");
  const [roupa, setRoupa] = useState(typeof user.servicos !== 'undefined' ? user.servicos.passar_lavar_roupa : "");

  //Chamada no clique do botão cancelar
  const initialState = () => {
    setFaxina(user.servicos.faxina);
    setCozinhar(user.servicos.cozinhar);
    setRoupa(user.servicos.passar_lavar_roupa);
  };

  const inputHandler = useCallback((e) => {
    const { name } = e.target;

    switch (name) {
      case "faxina":
        faxina ? setFaxina(false) : setFaxina(true);
        break;
      case "roupa":
        roupa ? setRoupa(false) : setRoupa(true);
        break;
      case "cozinhar":
        cozinhar ? setCozinhar(false) : setCozinhar(true);
        break;
    }
  });

  //Chamada no submit do botão
  const handleSubmit = async (e) => {
    e.preventDefault();

    const retorno = await buscarProfissional(user.id);

    const usuario = await retorno.json();

    var rsData = usuario.dataNascimento.split("/");
    const data = rsData[2] + "-" + rsData[1] + "-" + rsData[0];
    usuario.dataNascimento = data;

    //Altera os dados
    usuario.servicos.passar_lavar_roupa = roupa;
    usuario.servicos.cozinhar = cozinhar;
    usuario.servicos.faxina = faxina;

    //Atualiza cliente ou profissional
    const response = await atualizarProfissional(usuario);

    //Alterações necessárias para salvar no localstorage
    usuario.email = usuario.usuario.email;
    usuario.tipo = usuario.usuario.tipo;
    delete usuario.usuario;

    //Verifica se atualizou
    if (response.ok) {
      ToastSuccess();
      localStorage.setItem("user", JSON.stringify(usuario));
    } else {
      ToastError();
    }
  };

  // Caso o valor do estado de controller não for 5, não retorna nada
  if (controller !== 5) return null;
  else {
    return (
      <section className="bg-white">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 text-uppercase pl-5">
              <h1 className="mt-5 titulo-medio">SERVIÇOS</h1>
              <div className="form-check">
                {faxina ? (
                  <input
                    name="faxina"
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                    onChange={inputHandler}
                    value="true"
                    id="Check1"
                  />
                ) : (
                  <input
                    name="faxina"
                    className="form-check-input"
                    type="checkbox"
                    onChange={inputHandler}
                    value="true"
                    id="Check1"
                  />
                )}
                <label className="form-check-label" htmlFor="Check1">
                  faxina
                </label>
              </div>
              <div className="form-check">
                {roupa ? (
                  <input
                    name="roupa"
                    className="form-check-input"
                    type="checkbox"
                    onChange={inputHandler}
                    defaultChecked
                    value="true"
                    id="Check2"
                  />
                ) : (
                  <input
                    name="roupa"
                    className="form-check-input"
                    type="checkbox"
                    onChange={inputHandler}
                    value="true"
                    id="Check2"
                  />
                )}

                <label className="form-check-label" htmlFor="Check2">
                  lavar e passar roupa
                </label>
              </div>
              <div className="form-check">
                {cozinhar ? (
                  <input
                    name="cozinhar"
                    className="form-check-input"
                    type="checkbox"
                    onChange={inputHandler}
                    defaultChecked
                    value="true"
                    id="Check3"
                  />
                ) : (
                  <input
                    name="cozinhar"
                    className="form-check-input"
                    type="checkbox"
                    onChange={inputHandler}
                    value="true"
                    id="Check3"
                  />
                )}

                <label className="form-check-label" htmlFor="Check3">
                  cozinhar
                </label>
              </div>

              <h1 className="mt-4 titulo-medio">SUB-REGIÕES </h1>
              {/* <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="NORTE"
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Norte
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="LESTE"
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Leste
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="SUDESTE"
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Sudeste
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="SUDOESTE"
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Sudoeste
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="OESTE"
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Oeste
                </label>
              </div> */}
            </div>
            <div className="col-md-6"></div>
          </div>

          <div className="d-flex justify-content-center w-100 mt-4 pb-5">
            <button
              type="button"
              className="btn btn-blue-dark text-white w-35 text-uppercase mr-3"
              onClick={() => {
                initialState();
              }}
            >
              cancelar
            </button>
            <button
              type="submit"
              className="btn btn-green text-white w-35 text-uppercase ml-3"
            >
              Atualizar
            </button>
          </div>
        </form>
      </section>
    );
  }
}
