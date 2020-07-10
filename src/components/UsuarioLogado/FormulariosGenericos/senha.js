//IMPORTES
import React, { useState, useCallback, useEffect } from "react";
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

//MENSAGEM
const Mensagem = (props) => {
  if (props.mensagem) {
    return <span>{props.mensagem}</span>;
  } else return "";
};

//-------------------SENHA-------------------------------
export default function Senha(props) {
  //Resgate das props
  const controller = props.controller;
  const user = props.user;
  const tipo = user.usuario.tipo;

  const [mensagemSenha, setMensagemSenha] = useState("");
  const [mensagemSenhaAtual, setMensagemSenhaAtual] = useState("");

  //State usuário
  const [senha, setSenha] = useState("");
  const [newSenha, setNewSenha] = useState("");
  const [confirmNewSenha, setConfirmNewSenha] = useState("");
  const [senhaUsuario, setSenhaUsuario] = useState("");

  const resgataSenha = async () => {
    var retorno = "";

    //Busca cliente ou profissional
    if (tipo === "cliente") {
      retorno = await buscarCliente(user.id);
    } else if (tipo === "profissional") {
      retorno = await buscarProfissional(user.id);
    }

    var senha = await retorno.json();
    senha = senha.usuario.senha;
    setSenhaUsuario(senha);
  };

  //Executado assim que o componente é renderizado
  useEffect(() => {
    resgataSenha();
  }, []);

  //Chamada no evento da input, atualizando o estado do usuário
  const inputHandler = useCallback((e) => {
    const { name, value } = e.target;

    //Verifica o name da input para atualizar o state certo
    switch (name) {
      case "senha":
        setSenha(value);
        break;
      case "newSenha":
        setNewSenha(value);
        break;
      case "confirmNewSenha":
        setConfirmNewSenha(value);
        break;
    }
  });

  //Chamada no clique do botão cancelar
  const initialState = () => {
    setSenha("");
    setNewSenha("");
    setConfirmNewSenha("");
  };

  toast.configure();

  //Chamada no submit do botão
  const handleSubmit = async () => {
    //Volta o state inicial das mensagens
    setMensagemSenha("");
    setMensagemSenhaAtual("");

    //Definindo variáveis
    var response = "";
    var status = true;

    var usuario = JSON.parse(localStorage.getItem("user"));
    usuario.usuario.senha = senha;

    //Verifica se a nova senha não é igual a confirmar nova senha
    if (newSenha !== confirmNewSenha) {
      setMensagemSenha("Senhas não correspondem");
      status = false;
    }

    //verifica se a senha atual não é igual a senha salva no bd
    if (usuario.usuario.senha !== senha) {
      setMensagemSenhaAtual("Senha incorreta");
      status = false;
    }

    //verifica a quantidade de caracteres da nova senha
    if (newSenha.length < 8) {
      setMensagemSenha("A senha deve ter no mínimo 8 caracteres");
      status = false;
    }

    //Verifica status
    if (status) {
      var rsData = usuario.dataNascimento.split("/");
      const data = rsData[2] + "-" + rsData[1] + "-" + rsData[0];

      usuario.dataNascimento = data;

      //Altera os dados
      usuario.usuario.senha = newSenha;

      // //Atualiza cliente ou profissional
      if (tipo === "cliente") {
        response = await atualizarCliente(usuario);
      } else if (tipo === "profissional") {
        response = await atualizarProfissional(usuario);
      }

      //Verifica se atualizou
      if (response.ok) {
        initialState();
        ToastSuccess();
      } else {
        ToastError();
      }
    }
  };

  // Caso o valor do estado de controller não for 3, não retorna nada
  if (controller !== 3) return null;
  else {
    return (
      <section className="bg-white">
        <Form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center align-items-center
              flex-column mt-5"
        >
          <Input
            className="form-control w-75"
            required
            type="password"
            name="senha"
            value={senha}
            placeholder="Senha atual"
            onChange={inputHandler}
          />
          <Mensagem mensagem={mensagemSenhaAtual} />
          <Input
            className="form-control mt-3 w-75"
            required
            type="password"
            name="newSenha"
            value={newSenha}
            placeholder="Nova senha"
            onChange={inputHandler}
          />
          <Mensagem mensagem={mensagemSenha} />
          <Input
            className="form-control mt-3 w-75"
            required
            type="password"
            value={confirmNewSenha}
            name="confirmNewSenha"
            placeholder="Confirmar nova senha"
            onChange={inputHandler}
          />
          <Mensagem mensagem={mensagemSenha} />
          <div className="d-flex justify-content-center w-100 mt-4 pb-5">
            <button
              type="button"
              className="btn btn-blue-dark text-white w-35 text-uppercase mr-3"
              onClick={() => {
                initialState();
              }}
            >
              Cancelar
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
