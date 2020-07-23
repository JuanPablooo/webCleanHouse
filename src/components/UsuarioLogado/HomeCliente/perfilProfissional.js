import React, { useEffect, useState } from "react";
import "./HomeCliente.css";

export default function PerfilProfissional(props) {
  const controller = props.controller;
  const handleButtonChange = props.handleButtonChange;

  if (controller === 9) {
    return (
      <div>
        <h1 className="mt-5 mb-5 text-center">PERFIL DO PROFISSIONAL</h1>

        <button
          className="btn mt-2 btn-green text-white"
          onClick={() => handleButtonChange(10)}
        >
          Pagar
        </button>
      </div>
    );
  } else {
    return null;
  }
}
