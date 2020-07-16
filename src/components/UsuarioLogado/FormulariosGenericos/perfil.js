//IMPORTES
import React, { useState, useCallback, useEffect } from "react";
import api from "../../../services/apiAxios";
import { Form, Input } from "@rocketseat/unform";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastSuccess from "../toastSuccess";
import ToastError from "../toastError";
import * as yup from "yup";

//VALIDAÇÕES (TERMINAR DPS)
/*
 Máscaras tel, cel, cpf e data de nascimento
 Validar cpf e data de nascimento (+18)
 */
const validations = yup.object().shape({
  nomeCompleto: yup
    .string()
    .min(3, "Seu nome deve ter no minimo 3 letras")
    .required("Preencha o campo do nome"),

  email: yup
    .string()
    .email("Digite um email valido")
    .required("Preencha o campo E-mail"),

  telefoneFixo: yup.string(),

  celular: yup.string(),
});

//-------------------PERFIL-------------------------------
export default function Perfil(props) {
  const controller = props.controller;
  const user = props.user;

  console.log(user)
  const tipo = user.tipo;
  var url = "";
  tipo === "cliente" ? (url = "/clientes/") : (url = "/profissionais/");

  //State usuário
  const [nomeCompleto, setNomeCompleto] = useState(user.nomeCompleto);
  const [email, setEmail] = useState(user.email);
  const [telefoneFixo, setTelefoneFixo] = useState(user.telefoneFixo);
  const [celular, setCelular] = useState(user.celular);
  const [cpf, setCpf] = useState(user.cpf);
  const [dataNascimento, setDataNascimento] = useState(user.dataNascimento);
  const [senha, setSenha] = useState("");

  const resgataSenha = async () => {
    try {
      const retorno = await api.get(url + user.id);
      setSenha(retorno.data.usuario.senha);
    } catch (error) {
      return console.log(error.response);
    }
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
    var rsData = dataNascimento.split("/");
    const data = rsData[2] + "-" + rsData[1] + "-" + rsData[0];

    var usuario = JSON.parse(localStorage.getItem("user"));

    //Altera os dados
    usuario.nomeCompleto = nomeCompleto;
    usuario.email = email;
    usuario.cpf = cpf;
    usuario.dataNascimento = data;
    usuario.telefoneFixo = telefoneFixo;
    usuario.celular = celular;
    usuario.senha = senha;

    try {
      const response = await api.put(url + usuario.id, usuario);
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

  // Caso o valor do estado de controller não for 2, não retorna nada
  if (controller !== 2) return null;
  else {
    return (
      <section className="bg-white">
        <Form
          schema={validations}
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
