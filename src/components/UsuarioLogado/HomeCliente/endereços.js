//IMPORTES
import React, { useState, useCallback } from "react";
import { buscarCliente, atualizarCliente } from "../../../services/clientes";

import { Form, Input } from "@rocketseat/unform";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastSuccess from "../toastSuccess";
import ToastError from "../toastError";
import Endereco from "./endereco";
import FormEnderecos from "../FormulariosGenericos/endereços";

//VALIDAÇÕES (TERMINAR DPS)

//-------------------ENDEREÇOS-------------------------------
export default function Endereços(props) {
  //Resgate das props
  const controller = props.controller;
  const user = props.user;

  var userLocalhost = localStorage.getItem("user");
  userLocalhost = JSON.parse(userLocalhost);

  //ETAPA
  const [etapa, setEtapa] = useState(0);
  //ETAPA

  //State usuário
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [pontoReferencia, setPontoReferencia] = useState("");
  const [cidade, setCidade] = useState("");
  const [id, setId] = useState(0);

  const etapaHandler = (residencia, id) => {
    //Muda etapa
    setEtapa(1);

    setId(id);
    setCep(residencia.endereco.cep);
    setRua(residencia.endereco.rua);
    setNumero(residencia.endereco.numero);
    setBairro(residencia.endereco.bairro);
    setComplemento(residencia.endereco.complemento);
    setEstado(residencia.endereco.estado);
    setPontoReferencia(residencia.endereco.pontoReferencia);
    setCidade(residencia.endereco.cidade);
  };

  const zeraEtapa = () => {
    setEtapa(0);
  };

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

  //Chamada no submit do botão
  const handleSubmit = async (id) => {
    //Definindo variáveis
    var retorno = "";
    var response = "";

    //Busca cliente
    retorno = await buscarCliente(user.id);

    const usuario = await retorno.json();

    var rsData = usuario.dataNascimento.split("/");
    const data = rsData[2] + "-" + rsData[1] + "-" + rsData[0];

    // //Altera os dados
    usuario.dataNascimento = data;

    if (id === 0) {
      const novoEndereco = {
        quantidadeQuartos: 0,
        endereco: {
          cep: cep,
          rua: rua,
          bairro: bairro,
          estado: estado,
          cidade: cidade,
          pais: "Brasil",
          complemento: complemento,
          pontoReferencia: pontoReferencia,
          numero: numero,
        },
      };

      usuario.residencias = [...usuario.residencias, novoEndereco];
    } else {
      const residencias = usuario.residencias;

      //Laço para veririficar qual indice de residencias deve ser atualizado
      for (var i = 0; i < residencias.length; i++) {
        if (usuario.residencias[i].id === id) {
          usuario.residencias[i].endereco.cep = cep;
          usuario.residencias[i].endereco.rua = rua;
          usuario.residencias[i].endereco.complemento = complemento;
          usuario.residencias[i].endereco.estado = estado;
          usuario.residencias[i].endereco.numero = numero;
          usuario.residencias[i].endereco.bairro = bairro;
          usuario.residencias[i].endereco.cidade = cidade;
        }
      }
    }

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
      zeraEtapa();
    } else {
      ToastError();
    }
  };

  // Caso o valor do estado de controller não for 3, não retorna nada
  if (controller !== 4) return null;
  else {
    return (
      <section className="w-50 bg-white h-75 form-container">
        <h1 className="text-center mt-4"> Meus Endereços </h1>
        {etapa === 0 ? (
          userLocalhost.residencias.map((residencia) => {
            return (
              <Endereco
                key={residencia.id}
                residencia={residencia}
                etapaHandler={etapaHandler}
              />
            );
          })
        ) : etapa === 1 ? (
          <FormEnderecos
            handleSubmit={handleSubmit}
            inputHandler={inputHandler}
            zeraEtapa={zeraEtapa}
            cep={cep}
            rua={rua}
            id={id}
            cidade={cidade}
            bairro={bairro}
            numero={numero}
            estado={estado}
            pontoReferencia={pontoReferencia}
            complemento={complemento}
            botao={"ATUALIZAR"}
          />
        ) : (
          <FormEnderecos
            handleSubmit={handleSubmit}
            inputHandler={inputHandler}
            zeraEtapa={zeraEtapa}
            cep={cep}
            rua={rua}
            id={id}
            cidade={cidade}
            bairro={bairro}
            numero={numero}
            estado={estado}
            pontoReferencia={pontoReferencia}
            complemento={complemento}
            botao={"SALVAR"}
          />
        )}

        {etapa === 0 ? (
          <button
            type="button"
            onClick={() => setEtapa(2)}
            className="btn btn-blue-dark text-white w-35 text-uppercase ml-5 mb-4"
          >
            Adicionar
          </button>
        ) : (
          <span></span>
        )}
      </section>
    );
  }
}
