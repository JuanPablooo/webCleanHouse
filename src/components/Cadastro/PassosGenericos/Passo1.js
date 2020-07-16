import React, { useState } from "react";

export default function Passo1(props) {
  const FormGroup = props.formGroup;
  const proximoPasso = props.proximoPasso;
  const imgPasso = props.img;
  const infoSubtitulo = props.infoSubtitulo;

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [celular, setCelular] = useState('')
  const [cpf, setCpf] = useState('')
  const [dataNasc, setDataNasc] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <>
      <section className="passo-a-passo  d-flex flex-column row my-3">
        <div className="align-self-center">
          <h2 className="text-primary">Informações Pessoais</h2>
        </div>

        <div className="align-self-center">
          <p className="text-muted">
            Precisamos dessas informações para montar o seu perfil.{" "}
            {infoSubtitulo}
          </p>
        </div>

        <div className="align-self-center col-sm-10 row d-flex justify-content-center">
          <img src={imgPasso} alt="passo 1" className="img-passos"></img>
        </div>
      </section>
      <div className="formulario col w-75 mx-auto">
        <div className="row justify-content-around">
          <FormGroup
            id="nome"
            placeholder="Digite seu nome"
            type="text"
            titulo="Nome Completo"
            require
          />
          <FormGroup
            id="telefone"
            placeholder="Digite seu telefone"
            type="text"
            titulo="Telefone"
          />
        </div>

        <div className="row justify-content-around">
          <FormGroup
            id="email"
            type="email"
            require
            titulo="E-mail"
            placeholder="Digite seu email"
          />
          <FormGroup
            id="celular"
            type="text"
            require
            titulo="Celular"
            placeholder="Digite seu celular"
          />
        </div>

        <div className="row justify-content-around">
          <FormGroup
            id="cpf"
            type="text"
            require
            titulo="CPF"
            placeholder="Digite seu cpf"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
          />
          <FormGroup
            id="senha"
            type="password"
            require
            titulo="Senha"
            placeholder="Digite sua senha"
          />
        </div>

        <div className="row justify-content-around">
          <FormGroup
            id="dataNascimento"
            placeholder="Digite sua data de nascimento"
            require
            type="text"
            titulo="Data de nascimento"
          />
          <div className="col-md-5 col-sm-12">
            <div className="form-group">
              <button
                type="button"
                className="btn btn-blue-dark text-white"
                onClick={proximoPasso}
              >
                CONTINUAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
