import React, { useState } from "react";
import axios from 'axios'
import { Field, ErrorMessage } from "formik";

export default function Passo2(props) {
  const FormGroup = props.formGroup;
  const proximoPasso = props.proximoPasso;
  const anterior = props.passoAnterior;
  const imgPasso = props.img;
  const infoSubtitulo = props.infoSubtitulo;

  const [cep, setCep] = useState("")
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [localidade, setLocalidade] = useState("")
  const [uf, setUf] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")

  return (
    <>
      <section className="passo-a-passo  d-flex flex-column row my-3">
        <div className="align-self-center">
          <h2 className="text-primary">Informações de endereço</h2>
        </div>

        <div className="align-self-center mb-4">
          <p className="text-muted">{infoSubtitulo}</p>
        </div>

        <div className="align-self-center col-sm-10 row d-flex justify-content-center ">
          <img src={imgPasso} alt="passo 1" className="img-passos"></img>
        </div>
      </section>
      <div className="formulario col w-75 mx-auto">
        <div className="row justify-content-around">
          <Field
            name="estado"
            component={({ field, form }) => {
              return (
                <div className="col-md-5 col-sm-12 ">
                  <div className="form-group">
                    <label className="input-group" htmlFor="cep">
                      CEP
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Digite seu CEP"
                      name="cep"
                      id="cep"
                      value={cep}
                      onChange={async (e) => {
                        const cep = e.target.value
                        
                        form.setFieldValue("cep", cep)
                        setCep(cep)

                        if (e.target.value.length === 9) {
                          try {
                            const { data } = await axios.get(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`)
                            console.log(data)
          
                            setUf(data.uf)
                            form.setFieldValue("estado", data.uf)
          
                            setLogradouro(data.logradouro)
                            form.setFieldValue("rua", data.logradouro)

                            setBairro(data.bairro)
                            form.setFieldValue("bairro", data.bairro)

                            setLocalidade(data.localidade)
                            form.setFieldValue("cidade", data.localidade)

                          } catch (error) {
                            return console.log(error)
                          }
                        }
                      }}
                    />
                    <ErrorMessage className="text-danger" name="cep" component="span" />
                  </div>
                </div>
              );
            }}
          />
          <Field
            name="estado"
            component={({ field, form }) => {
              return (
                <div className="col-md-5 col-sm-12 ">
                  <div className="form-group">
                    <label className="input-group" htmlFor="estado">
                      Estado
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Digite seu estado"
                      name="estado"
                      id="estado"
                      value={uf}
                      onChange={() => {
                        form.setFieldValue("estado", uf)
                      }}
                    />
                    <ErrorMessage className="text-danger" name="estado" component="span" />
                  </div>
                </div>
              );
            }}
          />
        </div>

        <div className="row justify-content-around">
        <Field
            name="cidade"
            component={({ field, form }) => {
              return (
                <div className="col-md-5 col-sm-12 ">
                  <div className="form-group">
                    <label className="input-group" htmlFor="cidade">
                      Cidade
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Digite sua cidade"
                      name="cidade"
                      id="cidade"
                      value={localidade}
                      onChange={() => {
                        form.setFieldValue("cidade", localidade)
                      }}
                    />
                    <ErrorMessage className="text-danger" name="cidade" component="span" />
                  </div>
                </div>
              );
            }}
          />
          <Field
            name="bairro"
            component={({ field, form }) => {
              return (
                <div className="col-md-5 col-sm-12 ">
                  <div className="form-group">
                    <label className="input-group" htmlFor="bairro">
                      Bairro
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Digite seu bairro"
                      name="bairro"
                      id="bairro"
                      value={bairro}
                      onChange={() => {
                        form.setFieldValue("bairro", bairro)
                      }}
                    />
                    <ErrorMessage className="text-danger" name="bairro" component="span" />
                  </div>
                </div>
              );
            }}
          />
        </div>

        <div className="row justify-content-around">
        <Field
            name="rua"
            component={({ field, form }) => {
              return (
                <div className="col-md-5 col-sm-12 ">
                  <div className="form-group">
                    <label className="input-group" htmlFor="rua">
                      Rua
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Digite sua rua"
                      name="rua"
                      id="rua"
                      value={logradouro}
                      onChange={() => {
                        form.setFieldValue("rua", logradouro)
                      }}
                    />
                    <ErrorMessage className="text-danger" name="rua" component="span" />
                  </div>
                </div>
              );
            }}
          />
          <FormGroup
            id="numero"
            type="text"
            require
            titulo="Número"
            placeholder="Digite o numero da sua casa"
          />
        </div>

        <div className="row justify-content-around">
          <FormGroup
            id="complemento"
            type="text"
            titulo="Complemento"
            placeholder="Digite o complemento"
          />
          <div className="col-md-5 col-sm-12 d-flex align-items-start">
            <div className="form-group row w-100 justify-content-around">
              <button
                type="button"
                className="btn btn-blue-dark text-white col-md-5 col-sm-12"
                onClick={anterior}
              >
                VOLTAR
              </button>
              <button
                type="button"
                className="btn btn-blue-dark text-white col-md-5 col-sm-12"
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
