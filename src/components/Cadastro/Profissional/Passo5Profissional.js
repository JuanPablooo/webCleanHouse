import React, { useState, useMemo } from "react";
import { Field } from "formik";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import ImgPasso5 from "../../images/p5.png";

import { actions } from "../../../actions/passosProfActions";

export default function Passo5Profissional(props) {
  const [redirect, setRedirect] = useState(false);

  const [imagem, setImagem] = useState("");
  const [video, setVideo] = useState("");

  const preview = useMemo(() => {
    return imagem ? URL.createObjectURL(imagem) : null;
  }, [imagem]);

  const encodeImageFileAsURL = (form, tipo) => {
    var element = "";

    tipo == "imagem"
      ? (element = document.getElementById("fle-images"))
      : (element = document.getElementById("fle-video"));

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

      form.setFieldValue(tipo, { mimeType: array[1], base64: base64Limpo });
    };
    reader.readAsDataURL(file);
  };

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
          <img src={ImgPasso5} alt="passo 5" className="img-passos"></img>
        </div>

        <div className="formulario col w-75 mx-auto">
          <div className="row justify-content-start">
            <div className="col-md-6 col-sm-12">
              <div className="input-group mb-3">
                <div className="custom-file">
                  <Field
                    name="imagem"
                    component={({ field, form }) => {
                      return (
                        <>
                          <input
                            name="imagem"
                            accept="image/png, image/jpeg"
                            type="file"
                            id="fle-images"
                            className="form-control"
                            onChange={(e) => {
                              setImagem(e.target.files[0]);
                              encodeImageFileAsURL(form, "imagem");
                            }}
                          />
                        </>
                      );
                    }}
                  />
                </div>
              </div>
              <img src={preview} style={{ width: "auto", height: "150px" }} />
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="input-group mb-3">
                <div className="custom-file">
                  <Field
                    name="video"
                    component={({ field, form }) => {
                      return (
                        <>
                          <input
                            name="video"
                            accept="video/*"
                            type="file"
                            id="fle-video"
                            className="form-control"
                            onChange={(e) => {
                              encodeImageFileAsURL(form, "video");
                            }}
                          />
                        </>
                      );
                    }}
                  />
                </div>
              </div>
              <div>
                <Field
                  name="imagem"
                  component={({ field, form }) => {
                    return (
                      <>
                        <textarea
                          style={{ resize: "none", width: "100%", height: 100 }}
                          onChange={(e) => {
                            form.setFieldValue("detalhes", e.target.value);
                          }}
                        ></textarea>
                      </>
                    );
                  }}
                />

                <button
                  style={{ width: "100%" }}
                  type="submit"
                  className="btn btn-blue-dark text-white col-md-5 col-sm-12"
                >
                  CONTINUAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
