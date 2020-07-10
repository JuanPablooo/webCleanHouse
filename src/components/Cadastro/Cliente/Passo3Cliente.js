import React, { useState } from "react";
import { Redirect } from "react-router-dom"

//import { useSelector, useDispatch } from 'react-redux';
import ImgPasso3 from "../../images/c3.png";

export default function Passo3Cliente() {
  const [redirect, setRedirect] = useState(false)

  return (
    <>
      {redirect ? <Redirect to={{ pathname: "/login" }} /> : null}

      <section className="passo-a-passo  d-flex flex-column row my-3">
        <div className="align-self-center">
          <h2 className="text-primary">Foto de perfil</h2>
        </div>

        <div className="align-self-center">
          <p className="text-muted">
            Complete o seu perfil colocando a sua foto
          </p>
        </div>

        <div className="align-self-center col-sm-10 row d-flex justify-content-center">
          <img src={ImgPasso3} alt="passo 1" className="img-passos"></img>
        </div>
      </section>
      <div className="formulario col w-75 mx-auto">
        <div className="row justify-content-start">
          <div className="col-md-5 col-sm-12 ">
            <div className="input-group mb-3">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                />
                <label className="custom-file-label" for="inputGroupFile01">
                  Escolher arquivo
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-around  ">
          <div className="col-md-5 col-sm-12 ">
            <div className="preview cor-teste" id="preview"></div>
          </div>
          <div className="col-md-5 col-sm-12 d-flex  align-items-end">
            <div className="form-group row w-100 justify-content-around">
              <button
                type="button"
                className="btn btn-blue-dark text-white col-md-5 col-sm-12"
              >
                PULAR
              </button>
              <button
                type="submit"
                className="btn btn-blue-dark text-white col-md-5 col-sm-12"
                onClick={() => {
                  setRedirect(true)
                }}
              >
                CONTINUAR
              </button>
              <button
                type="button"
                className="btn mt-3 btn-blue-dark text-white col-md-5 col-sm-12"
              >
                VOLTAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
