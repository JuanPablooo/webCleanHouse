import React from "react";
import { Form, Input } from "@rocketseat/unform";

function FormEnderecos(props) {
  const handleSubmit = props.handleSubmit;
  const inputHandler = props.inputHandler;
  const zeraEtapa = props.zeraEtapa;
  const cep = props.cep;
  const rua = props.rua;
  const bairro = props.bairro;
  const numero = props.numero;
  const estado = props.estado;
  const complemento = props.complemento;
  const pontoReferencia = props.pontoReferencia;
  const cidade = props.cidade;

  const id = props.id;
  const botao = props.botao;

  return (
    <Form
      onSubmit={() => handleSubmit(id)}
      className="d-flex justify-content-center align-items-center
              flex-column "
    >
      <Input
        className="form-control w-75"
        type="text"
        name="cep"
        value={cep}
        placeholder="CEP"
        required
        onChange={inputHandler}
      />
      <Input
        className="form-control mt-3 w-75"
        type="text"
        value={rua}
        name="rua"
        placeholder="Rua"
        required
        onChange={inputHandler}
      />
      <Input
        className="form-control mt-3 w-75"
        type="text"
        value={bairro}
        name="bairro"
        placeholder="Bairro"
        required
        onChange={inputHandler}
      />
      <Input
        className="form-control mt-3 w-75"
        type="text"
        value={cidade}
        name="cidade"
        placeholder="Cidade"
        required
        onChange={inputHandler}
      />

      <div className="d-flex w-75 justify-content-between">
        <Input
          className="form-control mt-3 w-47"
          type="text"
          value={numero}
          name="numero"
          placeholder="Numero"
          required
          onChange={inputHandler}
        />

        <Input
          className="form-control mt-3 w-47"
          type="text"
          value={estado}
          name="estado"
          placeholder="Estado"
          required
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
          onClick={() => {
            zeraEtapa();
          }}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="btn btn-green text-white w-35 text-uppercase ml-3"
        >
          {botao}
        </button>
      </div>
    </Form>
  );
}

export default FormEnderecos;
