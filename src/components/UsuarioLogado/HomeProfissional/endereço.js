//IMPORTES
import React, { useState, useCallback } from "react";
import {
  buscarProfissional,
  atualizarProfissional,
} from "../../../services/profissionais";
import { Form, Input } from "@rocketseat/unform";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastSuccess from "../toastSuccess";
import ToastError from "../toastError";
import FormEnderecos from "../FormulariosGenericos/endereços";

//VALIDAÇÕES (TERMINAR DPS)

//-------------------ENDEREÇOS-------------------------------
export default function Endereços(props) {
  //Resgate das props
  const controller = props.controller;
  const user = props.user;

  //State usuário
  const [cep, setCep] = useState(user.enderecos[0].cep);
  const [rua, setRua] = useState(user.enderecos[0].rua);
  const [numero, setNumero] = useState(user.enderecos[0].numero);
  const [bairro, setBairro] = useState(user.enderecos[0].bairro);
  const [complemento, setComplemento] = useState(user.enderecos[0].complemento);
  const [estado, setEstado] = useState(user.enderecos[0].estado);
  const [pontoReferencia, setPontoReferencia] = useState(
    user.enderecos[0].pontoReferencia
  );

  toast.configure();

  //Chamada no evento da input, atualizando o estado do usuário
  const inputHandler = useCallback((e) => {
    const { name, value } = e.target;

    //Verifica o name da input para atualizar o state certo
    switch (name) {
      case "cep":
        setCep(value);
        break;
      case "rua":
        setRua(value);
        break;
      case "complemento":
        setComplemento(value);
        break;
      case "estado":
        setEstado(value);
        break;
      case "numero":
        setNumero(value);
        break;
      case "bairro":
        setBairro(value);
        break;
      case "pontoReferencia":
        setPontoReferencia(value);
        break;
    }
  });

  //Chamada no clique do botão cancelar
  const initialState = () => {
    setCep(user.enderecos[0].cep);
    setRua(user.enderecos[0].rua);
    setComplemento(user.enderecos[0].complemento);
    setEstado(user.enderecos[0].estado);
    setNumero(user.enderecos[0].numero);
    setBairro(user.enderecos[0].bairro);
    setPontoReferencia(user.enderecos[0].pontoReferencia);
  };

  //Chamada no submit do botão
  const handleSubmit = async () => {
    //Definindo variáveis
    var retorno = "";
    var response = "";

    retorno = await buscarProfissional(user.id);

    const usuario = await retorno.json();

    var rsData = usuario.dataNascimento.split("/");
    const data = rsData[2] + "-" + rsData[1] + "-" + rsData[0];

    //Altera os dados
    usuario.dataNascimento = data;
    usuario.enderecos[0].cep = cep;
    usuario.enderecos[0].rua = rua;
    usuario.enderecos[0].complemento = complemento;
    usuario.enderecos[0].estado = estado;
    usuario.enderecos[0].numero = numero;
    usuario.enderecos[0].bairro = bairro;
    usuario.enderecos[0].pontoReferencia = pontoReferencia;

    // //Atualiza cliente ou profissional
    response = await atualizarProfissional(usuario);

    //Alterações necessárias para salvar no localstorage
    usuario.email = usuario.usuario.email;
    usuario.tipo = usuario.usuario.tipo;
    delete usuario.usuario;

    //Verifica se atualizou
    if (response.ok) {
      ToastSuccess();
      localStorage.setItem("user", JSON.stringify(usuario));
    } else {
      ToastError();
    }
  };

  // Caso o valor do estado de controller não for 3, não retorna nada
  if (controller !== 4) return null;
  else {
    return (
      <section className="w-50 bg-white h-75 form-container">
        <FormEnderecos
          handleSubmit={handleSubmit}
          inputHandler={inputHandler}
          initialState={initialState}
          cep={cep}
          rua={rua}
          bairro={bairro}
          numero={numero}
          estado={estado}
          botap={"ATUALIZAR"}
          pontoReferencia={pontoReferencia}
          complemento={complemento}
        />
      </section>
    );
  }
}
