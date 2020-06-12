import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import "./Login.css";
import { signIn } from "../../services/auth";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});

export default function Login() {
  const handleSubmit = async (data) => {
    try {
      const user = {
        email: data.email,
        senha: data.password,
      };
      console.log(user);

      const response = await signIn(user);

      if (response.ok) {
        this.props.history.push("/home/cliente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-blue text-white">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-2">
              <div className="logotipo"></div>
            </div>

            <div className="col-md-8 mt-5 pt-5 text-center">
              <div className="d-flex flex-column justify-content-center">
                <h1 className="display-4">Descomplique a sua vida</h1>
                <p className="mt-2 lead">
                  Economize seu tempo! A clean house é a plataforma mais prática
                  de encontrar profissionais de confiança para cuidar da sua
                  casa.
                </p>
                <Link
                  className="btn btn-blue-dark btn-radius
                  ml-auto mr-auto text-capitalize"
                  to="/"
                >
                  Volte para a home
                </Link>
              </div>
            </div>

            <div className="col-md-2 d-flex justify-content-end align-items-start">
              <Link
                to="/cadastro"
                className="btn btn-blue-dark btn-radius mt-2"
              >
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row container-login">
            <div className="col-md-6 pt-5 pb-5 ">
              <Form
                schema={schema}
                onSubmit={handleSubmit}
                className="d-flex justify-content-center align-items-center
              flex-column mt-5"
              >
                <Input
                  className="form-control w-50"
                  type="email"
                  name="email"
                  placeholder="e-mail"
                />
                <Input
                  className="form-control mt-3 w-50"
                  type="password"
                  placeholder="senha"
                  name="password"
                />
                <div className="d-flex justify-content-between w-50 mt-4">
                  <Link to="/" className="text-blue">
                    Esqueci minha senha
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-blue-dark text-white"
                  >
                    Entrar
                  </button>
                </div>
              </Form>
            </div>
            <div className="col-md-6 d-flex justify-content-start align-items-center">
              <div className="icon-login login1"></div>
              <div className="icon-login login2"></div>
            </div>
          </div>
          <div className="svg"></div>
        </div>
      </section>
    </>
  );
}
