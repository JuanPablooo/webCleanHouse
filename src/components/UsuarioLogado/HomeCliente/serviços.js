import React from "react";

export default function Serviços(props) {
  const controller = props.controller;

  if (controller !== 0) return null;
  else {
    return (
      <>
        <h1>SERVIÇOS</h1>
      </>
    );
  }
}
