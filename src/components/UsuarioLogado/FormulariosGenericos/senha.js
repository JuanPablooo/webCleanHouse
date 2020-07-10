//IMPORTES
import React, { useState, useCallback, useEffect } from "react";
import api from "../../../services/apiAxios";
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
  var url = "";
  tipo === "cliente" ? (url = "/clientes/") : (url = "/profissionais/");

  const [mensagemSenha, setMensagemSenha] = useState("");
  const [mensagemSenhaAtual, setMensagemSenhaAtual] = useState("");

  //State usuário
  const [senha, setSenha] = useState("");
  const [newSenha, setNewSenha] = useState("");
  const [confirmNewSenha, setConfirmNewSenha] = useState("");
  const [senhaUsuario, setSenhaUsuario] = useState("");

  const resgataSenha = async () => {
    try {
      const retorno = await api.get(url + user.id);
      setSenhaUsuario(retorno.data.usuario.senha);
    } catch (error) {
      return console.log(error.response);
    }
  };

  //Executado assim que o componente é renderizado
  useEffect(() => {
    resgataSenha();
  }, []);

  //-----Chamada no evento da input
  const inputHandler = useCallback((e) => {
    const { name, value } = e.target;

    //-----Verifica o name da input para atualizar o state certo-----
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
    //-----Verifica o name da input para atualizar o state certo-----
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
    usuario.usuario.senha = senhaUsuario;

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
      usuario.usuario.senha = newSenha;

      try {
        const response = await api.put(url + usuario.id, usuario);
        initialState();
        ToastSuccess();
      } catch (error) {
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
