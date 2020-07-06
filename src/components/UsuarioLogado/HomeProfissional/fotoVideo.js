import React, { useState } from "react";

export default function FotoVideo(props) {
  const controller = props.controller;
  const user = props.user;

  if (controller !== 1) return null;
  else {
    return (
      <>
        <section className="w-50 bg-white h-75 form-container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="foto-xgrande ml-auto mr-auto mt-4">
              <img src={props.foto} alt="foto-perfil" />
            </div>

            <form className="mt-4 form-upload">
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <div className="d-flex justify-content-center mb-4">
                <button
                  type="submit"
                  className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-4 w-50"
                >
                  SALVAR
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
