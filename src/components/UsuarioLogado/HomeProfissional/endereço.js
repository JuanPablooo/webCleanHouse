//IMPORTES
import React, { useState, useCallback, useEffect } from "react";
import {
  buscarProfissional,
  atualizarProfissional,
} from "../../../services/profissionais";
import api from "../../../services/apiAxios";
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
  const [cidade, setCidade] = useState(user.enderecos[0].cidade);
  const [complemento, setComplemento] = useState(user.enderecos[0].complemento);
  const [estado, setEstado] = useState(user.enderecos[0].estado);
  const [pontoReferencia, setPontoReferencia] = useState(
    user.enderecos[0].pontoReferencia
  );
  const [senha, setSenha] = useState("");

  const resgataSenha = async () => {
    try {
      const retorno = await api.get("/profissionais/" + user.id);
      setSenha(retorno.data.usuario.senha);
    } catch (error) {
      return console.log(error.response);
    }
  };

  //Executado assim que o componente é renderizado
  useEffect(() => {
    resgataSenha();
  }, []);

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
      case "cidade":
        setCidade(value);
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
    setCidade(user.enderecos[0].cidade);
  };

  //Chamada no submit do botão
  const handleSubmit = async () => {
    var usuario = JSON.parse(localStorage.getItem("user"));

    const dataNascimento = usuario.dataNascimento;
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
    usuario.enderecos[0].cidade = cidade;
    usuario.enderecos[0].pontoReferencia = pontoReferencia;
    usuario.usuario.senha = senha;

    // //Atualiza cliente ou profissional
    try {
      const response = await api.put("/profissionais/" + usuario.id, usuario);
      ToastSuccess();

      //------Alterações para salvar no localstorage------
      delete usuario.usuario.senha;
      usuario.dataNascimento = dataNascimento;
      localStorage.setItem("user", JSON.stringify(usuario));
      //------Alterações para salvar no localstorage------
    } catch (error) {
      ToastError();
    }
  };

  // Caso o valor do estado de controller não for 3, não retorna nada
  if (controller !== 4) return null;
  else {
    return (
      <section className="bg-white">
        <FormEnderecos
          handleSubmit={handleSubmit}
          inputHandler={inputHandler}
          initialState={initialState}
          cep={cep}
          rua={rua}
          cidade={cidade}
          bairro={bairro}
          numero={numero}
          estado={estado}
          botao={"ATUALIZAR"}
          pontoReferencia={pontoReferencia}
          complemento={complemento}
        />
      </section>
    );
  }
}
