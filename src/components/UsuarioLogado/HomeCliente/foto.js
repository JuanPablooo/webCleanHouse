import React from "react";

export default function Foto(props) {
  const controller = props.controller;

  if (controller !== 1) return null;
  else {
    return (
      <>
        <h1>FOTO</h1>
      </>
    );
  }
}
