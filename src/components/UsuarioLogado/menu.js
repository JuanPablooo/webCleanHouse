import React from "react";
import PropTypes from "prop-types";

//Menu lateral
export default function Menu(props) {
  const handleButtonChange = props.handleButtonChange;
  const foto = props.foto;

  //Botões que mudam de acordo com o tipo do usuário
  const button1 = props.button1;
  const button2 = props.button2;

  return (
    <div id="container-controller">
      <div className="foto-grande ml-auto mr-auto">
        <img src={foto} alt="foto-perfil" />
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-green-water text-uppercase 
               text-white mt-3"
          onClick={() => {
            handleButtonChange(1);
          }}
        >
          Editar
        </button>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <button
          className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-4 mr-3 ml-3"
          onClick={() => {
            handleButtonChange(2);
          }}
        >
          Meu Perfil
        </button>
        <button
          className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
          onClick={() => {
            handleButtonChange(3);
          }}
        >
          Meu endereço
        </button>
        <button
          className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
        >
          {button1}
        </button>
        <button
          className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
        >
          {button2}
        </button>
        <button
          className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
        >
          Histórico
        </button>
      </div>
    </div>
  );
}

//Definindo o tipo das propriedades
Menu.propTypes = {
  button1: PropTypes.string,
  button2: PropTypes.string,
  handleButtonChange: PropTypes.func.isRequired,
};
