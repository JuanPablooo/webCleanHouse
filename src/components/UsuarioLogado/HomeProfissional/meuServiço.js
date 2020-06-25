//IMPORTES
import React, { useState, useCallback } from "react";
import { buscarCliente, atualizarCliente } from "../../../services/clientes";
import {
  buscarProfissional,
  atualizarProfissional,
} from "../../../services/profissionais";
import { Form, Input } from "@rocketseat/unform";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastSuccess from "../toastSuccess";
import ToastError from "../toastError";
import * as Yup from "yup";

//VALIDAÇÕES (TERMINAR DPS)
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),
});

//-------------------MEU SERVIÇO -------------------------------
export default function MeuServiço(props) {
  const controller = props.controller;
  const user = props.user;

  //State usuário
  const [nomeCompleto, setNomeCompleto] = useState(user.nomeCompleto);
  const [email, setEmail] = useState(user.email);
  const [telefoneFixo, setTelefoneFixo] = useState(user.telefoneFixo);
  const [celular, setCelular] = useState(user.celular);
  const [cpf, setCpf] = useState(user.cpf);
  const [dataNascimento, setDataNascimento] = useState(user.dataNascimento);

  //Chamada no evento da input, atualizando o estado do usuário
  const inputHandler = useCallback((e) => {
    const { name, value } = e.target;

    //Verifica o name da input para atualizar o state certo
    switch (name) {
      case "nomeCompleto":
        setNomeCompleto(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "cpf":
        setCpf(value);
        break;
      case "dataNascimento":
        setDataNascimento(value);
        break;
      case "telefoneFixo":
        setTelefoneFixo(value);
        break;
      case "celular":
        setCelular(value);
        break;
    }
  });

  //Chamada no clique do botão cancelar
  const initialState = () => {
    setNomeCompleto(user.nomeCompleto);
    setEmail(user.email);
    setCpf(user.cpf);
    setDataNascimento(user.dataNascimento);
    setTelefoneFixo(user.telefoneFixo);
    setCelular(user.celular);
  };

  toast.configure();

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
    usuario.nomeCompleto = nomeCompleto;
    usuario.usuario.email = email;
    usuario.cpf = cpf;
    usuario.dataNascimento = dataNascimento;
    usuario.telefoneFixo = telefoneFixo;
    usuario.celular = celular;

    //Atualiza cliente ou profissional
    if (tipo === "cliente") {
      response = await atualizarCliente(usuario);
    } else if (tipo === "profissional") {
      response = await atualizarProfissional(usuario);
    }

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

  // Caso o valor do estado de controller não for 5, não retorna nada
  if (controller !== 5) return null;
  else {
    return (
      <section className="w-50 bg-white h-75 form-container">
        <h1>Ignorem esse formulário, estou aguardando o back</h1>
        <Form
          schema={schema}
          onSubmit={handleSubmit}
          className="d-flex justify-content-center align-items-center
              flex-column mt-5"
        >
          <Input
            className="form-control w-75"
            type="text"
            name="nomeCompleto"
            value={nomeCompleto}
            placeholder="nome completo"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="email"
            value={email}
            name="email"
            placeholder="email"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={cpf}
            name="cpf"
            placeholder="cpf"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={dataNascimento}
            name="dataNascimento"
            placeholder="data de nascimento"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={telefoneFixo !== null ? telefoneFixo : ""}
            name="telefoneFixo"
            placeholder="telefone"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={celular}
            name="celular"
            placeholder="celular"
            onChange={inputHandler}
          />
          <div className="d-flex justify-content-center w-100 mt-4 pb-5">
            <button
              type="button"
              className="btn btn-blue-dark text-white w-35 text-uppercase mr-3"
              onClick={() => {
                initialState();
              }}
            >
              cancelar
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
