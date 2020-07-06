import React from "react";
import PropTypes from "prop-types";

//Menu lateral, chamado em HomeCliente e HomeProfissional
export default function Menu(props) {
  //Função chamada no clique do botão
  //Para mudar o estado de controller
  const handleButtonChange = props.handleButtonChange;
  const foto = props.foto; //foto do usuário

  //Botões que mudam de acordo com o tipo do usuário
  const button1 = props.button1;
  const button2 = props.button2;
  const button3 = props.button3;

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
          Senha
        </button>
        <button
          className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
          onClick={() => {
            handleButtonChange(4);
          }}
        >
          Meu endereço
        </button>
        <button
          className="btn btn-controller text-uppercase 
                bg-blue-dark text-white mt-3 mr-3 ml-3"
          onClick={() => {
            handleButtonChange(5);
          }}
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
          {button3}
        </button>
      </div>
    </div>
  );
}

//Definindo o tipo das propriedades
Menu.propTypes = {
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
  handleButtonChange: PropTypes.func.isRequired,
};
