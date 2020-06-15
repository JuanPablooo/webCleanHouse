import React from "react";

export default function Endereços(props) {
  const controller = props.controller;

  if (controller !== 3) return null;
  else {
    return (
      <>
        <h1>ENDEREÇO</h1>
      </>
    );
  }
}
