import React from "react";
import { Form, Input } from "@rocketseat/unform";

function FormEnderecos(props) {
  const handleSubmit = props.handleSubmit;
  const inputHandler = props.inputHandler;
  const initialState = props.initialState;
  const cep = props.cep;
  const rua = props.rua;
  const bairro = props.bairro;
  const numero = props.numero;
  const estado = props.estado;
  const complemento = props.complemento;
  const pontoReferencia = props.pontoReferencia;

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center
              flex-column mt-5"
    >
      <Input
        className="form-control w-75"
        type="text"
        name="cep"
        value={cep}
        placeholder="CEP"
        onChange={inputHandler}
      />
      <Input
        className="form-control mt-3 w-75"
        type="text"
        value={rua}
        name="rua"
        placeholder="Rua"
        onChange={inputHandler}
      />
      <Input
        className="form-control mt-3 w-75"
        type="text"
        value={bairro}
        name="bairro"
        placeholder="Bairro"
        onChange={inputHandler}
      />

      <div className="d-flex w-75 justify-content-between">
        <Input
          className="form-control mt-3 w-47"
          type="text"
          value={numero}
          name="numero"
          placeholder="Numero"
          onChange={inputHandler}
        />

        <Input
          className="form-control mt-3 w-47"
          type="text"
          value={estado}
          name="estado"
          placeholder="Estado"
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
  );
}

export default FormEnderecos;
