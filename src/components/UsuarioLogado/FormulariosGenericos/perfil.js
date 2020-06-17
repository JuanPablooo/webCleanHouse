import React, { useState, useCallback, useEffect } from "react";
import { buscarCliente, atualizarCliente } from "../../../services/clientes";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

//Terminar validações
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),
});

const MsgErro = (props) => {
  if (props.mensagem) {
    return <span>{props.mensagem}</span>;
  } else return "";
};

export default function Perfil(props) {
  const controller = props.controller;
  const user = props.user;

  const [msgErro, setMsgErro] = useState("");

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

  const handleSubmit = async () => {
    var retorno = "";

    if (user.tipo === "cliente") {
      retorno = await buscarCliente(user.id);
    }

    const usuario = await retorno.json();

    //Altera os dados
    usuario.nomeCompleto = nomeCompleto;
    usuario.usuario.email = email;
    usuario.cpf = cpf;
    usuario.dataNascimento = dataNascimento;
    usuario.telefoneFixo = telefoneFixo;
    usuario.celular = celular;

    const response = await atualizarCliente(usuario);
    console.log(response);
  };

  if (controller !== 2) return null;
  else {
    return (
      <section className="w-50 bg-white h-75 form-container">
        <MsgErro mensagem={msgErro} />
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
