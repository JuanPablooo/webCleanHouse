import React, { useState } from "react";

export default function Pagamento(props) {
  const { controller, handleButtonChange, idProfissional, servicos } = props;

  const [numeroCartao, setNumeroCartao] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [dataVencimento, setDataVencimento] = useState("");
  const [codigoSeguranca, setCodigoSeguranca] = useState("");
  const [cpfTitular, setCpfTitular] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "numeroCartao":
        setNumeroCartao(value);
        break;
      case "nomeCompleto":
        setNomeCompleto(value);
        break;
      case "dataVencimento":
        setDataVencimento(value);
        break;
      case "codigoSeguranca":
        setCodigoSeguranca(value);
        break;
      case "cpfTitular":
        setCpfTitular(value);
        break;
    }
  };

  if (controller === 10) {
    return (
      <div>
        <h1 className="text-center mt-5">Pagamento</h1>
        <p className="text-center">Insira os dados do seu cartão de crédito</p>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="input1"></label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  name="numeroCartao"
                  value={numeroCartao}
                  onChange={inputHandler}
                  placeholder="Número do Cartão"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="input2"
                  name="nomeCompleto"
                  value={nomeCompleto}
                  onChange={inputHandler}
                  placeholder="Nome Completo do Titular"
                />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="dataVencimento"
                      value={dataVencimento}
                      onChange={inputHandler}
                      placeholder="Data de Vencimento"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="codigoSeguranca"
                      value={codigoSeguranca}
                      onChange={inputHandler}
                      placeholder="Código de Segurança"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="input3"
                  name="cpfTitular"
                  value={cpfTitular}
                  onChange={inputHandler}
                  placeholder="CPF do Titular"
                />
              </div>
              <div className="w-100 d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Coninuar
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
