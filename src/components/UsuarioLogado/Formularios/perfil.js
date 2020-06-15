import React, { useState, useCallback } from "react";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

// Terminar validações
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
  const [usuario, setUsuario] = useState(user);

  const inputHandler = useCallback((e) => {
    const { name, value } = e.target;
    setUsuario({ [name]: value });
  });

  const handleSubmit = async (data) => {};

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
            name="nome"
            value={usuario.nomeCompleto}
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="email"
            value={usuario.email}
            name="email"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={usuario.cpf}
            name="cpf"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={usuario.dataNascimento}
            name="dataNascimento"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={
              usuario.telefoneFixo !== null ? usuario.telefoneFixo : "Telefone"
            }
            name="telefoneFixo"
            onChange={inputHandler}
          />
          <Input
            className="form-control mt-3 w-75"
            type="text"
            value={usuario.celular}
            name="celular"
            onChange={inputHandler}
          />
          <div className="d-flex justify-content-center w-100 mt-4 pb-5">
            <button
              type="submit"
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
