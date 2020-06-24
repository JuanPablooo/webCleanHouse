//IMPORTES
import React, { useState, useCallback } from "react";
import { buscarCliente, atualizarCliente } from "../../../services/clientes";
import {
  buscarProfissional,
  atualizarProfissional,
} from "../../../services/profissionais";
import { Form, Input } from "@rocketseat/unform";

//VALIDAÇÕES (TERMINAR DPS)

//MENSAGEM
const Mensagem = (props) => {
  if (props.mensagem) {
    return <span>{props.mensagem}</span>;
  } else return "";
};

//-------------------ENDEREÇOS-------------------------------
export default function Endereços(props) {
  //Resgate das props
  const controller = props.controller;
  const user = props.user;

  const [mensagem, setMensagem] = useState("");

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

  //Chamada no submit do botão
  const handleSubmit = async () => {
    //Definindo variáveis
    var retorno = "";
    var response = "";
    var tipo = user.tipo;

    //Busca cliente ou profissional
    if (tipo === "cliente") {
      retorno = await buscarCliente(user.id);
    } else if (tipo === "profissional") {
      retorno = await buscarProfissional(user.id);
    }

    const usuario = await retorno.json();

    //Altera os dados
    usuario.enderecos[0].cep = cep;
    usuario.enderecos[0].rua = rua;
    usuario.enderecos[0].complemento = complemento;
    usuario.enderecos[0].estado = estado;
    usuario.enderecos[0].numero = numero;
    usuario.enderecos[0].bairro = bairro;

    // //Atualiza cliente ou profissional
    if (tipo === "cliente") {
      response = await atualizarCliente(usuario);
    } else if (tipo === "profissional") {
      response = await atualizarProfissional(usuario);
    }

    console.log(usuario);

    //Verifica se atualizou
    if (response.ok) {
      setMensagem("Usuário atualizado com sucesso");
    } else {
      setMensagem(
        "Erro ao atualizar, certifique-se de que seus dados estão corretos."
      );
    }
  };

  // Caso o valor do estado de controller não for 3, não retorna nada
  if (controller !== 3) return null;
  else {
    return (
      <section className="w-50 bg-white h-75 form-container">
        <Mensagem mensagem={mensagem} />

        <Form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center align-items-center
              flex-column mt-5"
        >
          <Input
            className="form-control w-75"
            type="text"
            name="cep"
            value={cep}
            placeholder="CEP"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={rua}
            name="rua"
            placeholder="Rua"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={bairro}
            name="bairro"
            placeholder="Bairro"
            onChange={inputHandler}
          />

          <div class="d-flex w-75 justify-content-between">
            <Input
              className="form-control mt-3 w-47"
              type="text"
              value={numero}
              name="numero"
              placeholder="Numero"
              onChange={inputHandler}
            />

            <Input
              className="form-control mt-3 w-47"
              type="text"
              value={estado}
              name="estado"
              placeholder="Estado"
              onChange={inputHandler}
            />
          </div>

          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={complemento}
            name="complemento"
            placeholder="Complemento"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={pontoReferencia}
            name="pontoReferencia"
            placeholder="Ponto de referencia"
            onChange={inputHandler}
          />
          <div className="d-flex justify-content-center w-100 mt-4 pb-5">
            <button
              type="button"
              className="btn btn-blue-dark text-white w-35 text-uppercase mr-3"
            >
              Mudar Senha
            </button>
            <button
              type="submit"
              className="btn btn-green text-white w-35 text-uppercase ml-3"
            >
              Atualizar
            </button>
          </div>
        </Form>
      </section>
    );
  }
}
