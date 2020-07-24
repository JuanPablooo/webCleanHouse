import React, { useState } from "react";
import api from "../../../services/apiAxios";

export default function Pagamento(props) {
  const { controller, handleButtonChange, passo1, passo2, user } = props;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    function diasNoMesSearch(mes, ano) {
      let data = new Date(ano, mes, 0);
      return data.getDate();
    }

    let mesAtual = new Date().getMonth() + 1;
    let anoAtual = new Date().getFullYear();
    let diasNoMes = diasNoMesSearch(mesAtual, anoAtual);
    let diaAtual = new Date().getDate();
    if (diaAtual === diasNoMes) {
      diaAtual = 1; //se tivermos no ultimo dia do mês. vamos setar 1 como dia seguinte!
    } else {
      diaAtual += +1; //caso não estejamos no ultimo dia do mês, vamos fazer um incremento de +1.
    }

    const data = anoAtual + "-0" + mesAtual + "-" + diaAtual;

    const solicitaco = {
      idCliente: user.id,
      idProfissional: passo2,
      residencia: {
        id: passo1.residencia,
      },
      servicos: {
        passar_lavar_roupa: passo1.roupa,
        cozinhar: passo1.cozinhar,
        faxina: passo1.faxina,
      },
      data: data,
      preco: 100.0,
      observacao: passo1.observacao,
      status: "Aguardando confirmação",
    };

    try {
      const { data } = await api.post("/solicitacao/servico", solicitaco);
      console.log(data);
    } catch (e) {
      return console.log(e);
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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="input1"></label>
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  name="numeroCartao"
                  value={numeroCartao}
                  onChange={inputHandler}
                  required
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
                  required
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
                      required
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
                      required
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
                  required
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
