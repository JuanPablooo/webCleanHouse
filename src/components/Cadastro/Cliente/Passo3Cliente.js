import React, { useState, useMemo, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Field } from "formik";

//import { useSelector, useDispatch } from 'react-redux';
import ImgPasso3 from "../../images/c3.png";
import { actions } from "../../../actions/passosActions";
import { element } from "prop-types";

export default function Passo3Cliente(props) {
  const [redirect, setRedirect] = useState(false);

  const [imagem, setImagem] = useState("");

  const preview = useMemo(() => {
    return imagem ? URL.createObjectURL(imagem) : null;
  }, [imagem]);

  const dispatch = useDispatch();
  function anterior() {
    dispatch(actions.mudaPasso(1));
  }

  const encodeImageFileAsURL = (form) => {
    //
    var element = document.getElementById("fle-image");
    var file = element.files[0];
    var reader = new FileReader();
    //
    reader.onloadend = function () {
      const result = reader.result;

      var array = result.split(";", 2);
      array = array[0].split(":");
      console.log(array[1]);

      let IndeceDeinformacoesDesnecessarias = result.indexOf("base64,") + 7; // pega o idice da informaca desnecessaria
      let base64Limpo = result.substring(
        IndeceDeinformacoesDesnecessarias,
        result.length
      ); //substring parte uma string a partir de um indice
      console.log(base64Limpo);

      form.setFieldValue("imagem", { mimeType: array[1], base64: base64Limpo });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
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
                <Field
                  name="image"
                  component={({ field, form }) => {
                    return (
                      <input
                        id="fle-image"
                        name="imagem"
                        accept="image/png, image/jpeg"
                        type="file"
                        className="form-control"
                        onChange={(e) => {
                          setImagem(e.target.files[0]);
                          encodeImageFileAsURL(form);
                        }}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-around  ">
          <div className="col-md-5 col-sm-12 ">
            <div className="preview cor-teste" id="preview">
              <img src={preview} style={{ width: "inherit", height: "auto" }} />
            </div>
          </div>
          <div className="col-md-5 col-sm-12 d-flex  align-items-end">
            <div className="row w-100 justify-content-around">
              <button
                type="button"
                className="btn btn-blue-dark text-white col-md-5 col-sm-12"
              >
                PULAR
              </button>
              <button
                type="submit"
                className="btn btn-blue-dark text-white col-md-5 col-sm-12"
              >
                CONTINUAR
              </button>
              <button
                type="button"
                className="btn mt-3 btn-blue-dark text-white col-md-5 col-sm-12"
                onClick={anterior}
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
