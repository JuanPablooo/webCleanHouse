//IMPORTES
import React, { useState, useCallback } from "react";
import { buscarCliente, atualizarCliente } from "../../../services/clientes";

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
  const [cep, setCep] = useState(user.residencias[0].endereco.cep);
  const [rua, setRua] = useState(user.residencias[0].endereco.rua);
  const [numero, setNumero] = useState(user.residencias[0].endereco.numero);
  const [bairro, setBairro] = useState(user.residencias[0].endereco.bairro);
  const [complemento, setComplemento] = useState(
    user.residencias[0].endereco.complemento
  );
  const [estado, setEstado] = useState(user.residencias[0].endereco.estado);
  const [pontoReferencia, setPontoReferencia] = useState(
    user.residencias[0].endereco.pontoReferencia
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
    setCep(user.residencias[0].endereco.cep);
    setRua(user.residencias[0].endereco.rua);
    setComplemento(user.residencias[0].endereco.complemento);
    setEstado(user.residencias[0].endereco.estado);
    setNumero(user.residencias[0].endereco.numero);
    setBairro(user.residencias[0].endereco.bairro);
    setPontoReferencia(user.residencias[0].endereco.pontoReferencia);
  };

  //Chamada no submit do botão
  const handleSubmit = async () => {
    //Definindo variáveis
    var retorno = "";
    var response = "";
    var tipo = user.tipo;

    //Busca cliente ou profissional
    retorno = await buscarCliente(user.id);

    const usuario = await retorno.json();

    //Altera os dados
    usuario.residencias[0].endereco.cep = cep;
    usuario.residencias[0].endereco.rua = rua;
    usuario.residencias[0].endereco.complemento = complemento;
    usuario.residencias[0].endereco.estado = estado;
    usuario.residencias[0].endereco.numero = numero;
    usuario.residencias[0].endereco.bairro = bairro;

    // //Atualiza cliente ou profissional
    response = await atualizarCliente(usuario);

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
          pontoReferencia={pontoReferencia}
          complemento={complemento}
        />
      </section>
    );
  }
}
