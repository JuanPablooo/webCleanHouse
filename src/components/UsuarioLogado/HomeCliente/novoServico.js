import React, { useState, useCallback } from "react";

export default function NovoServico(props) {
  const controller = props.controller;
  const user = props.user;

  const [faxina, setFaxina] = useState(true);
  const [roupa, setRoupa] = useState(false);
  const [cozinhar, setCozinhar] = useState(false);
  const [residencia, setResidencia] = useState(user.residencias[0].id);
  const [observacao, setObservacao] = useState("");
  const [data, setData] = useState("");

  const inputHandler = useCallback((e) => {
    const { name, value } = e.target;

    switch (name) {
      case "faxina":
        faxina ? setFaxina(false) : setFaxina(true);
        break;
      case "roupa":
        roupa ? setRoupa(false) : setRoupa(true);
        break;
      case "cozinhar":
        cozinhar ? setCozinhar(false) : setCozinhar(true);
        break;
      case "sltResidencias":
        setResidencia(value);
        break;
      case "observacao":
        setObservacao(value);
        break;
      case "data":
        setData(value);
        break;
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const passo1 = {
      faxina: faxina,
      roupa: roupa,
      cozinhar: cozinhar,
      residencia: residencia,
      observacao: observacao,
      data: data,
    };

    props.setandoPasso(passo1, "passo1");
    props.handleButtonChange(8);
  };

  if (controller === 7) {
    return (
      <>
        <section className="bg-white text-gray">
          <h1 className="text-center text-uppercase mt-3 mb-3">
            ENCONTRE O PROFISSIONAL IDEAL PARA VOCÊ!
          </h1>
          <form className="pl-5" onSubmit={handleSubmit}>
            <h1 className="mt-5 titulo-medio text-capitalize ml-5 mb-2">
              Quais serviços você deseja?
            </h1>
            <div className="form-check ml-5">
              <input
                name="faxina"
                className="form-check-input"
                type="checkbox"
                defaultChecked
                value="true"
                onChange={inputHandler}
                id="Check1"
              />
              <label className="form-check-label" htmlFor="Check1">
                faxina
              </label>
            </div>
            <div className="form-check ml-5">
              <input
                name="roupa"
                className="form-check-input"
                type="checkbox"
                onChange={inputHandler}
                value="true"
                id="Check2"
              />

              <label className="form-check-label" htmlFor="Check2">
                lavar e passar roupa
              </label>
            </div>
            <div className="form-check ml-5">
              <input
                name="cozinhar"
                className="form-check-input"
                type="checkbox"
                onChange={inputHandler}
                value="true"
                id="Check3"
              />

              <label className="form-check-label" htmlFor="Check3">
                cozinhar
              </label>
            </div>
            <select
              name="sltResidencias"
              className="custom-select mt-4 w-50 ml-5"
              onChange={inputHandler}
            >
              {user.residencias.map((residencia) => {
                return (
                  <option value={residencia.id} key={residencia.id}>
                    {residencia.endereco.cep}
                  </option>
                );
              })}
            </select>
            <div className="form-group">
              <label htmlFor="input1" className="mt-2 w-50 ml-5">
                Data do serviço
              </label>
              <input
                type="text"
                className="form-control w-50 ml-5"
                id="input1"
                name="data"
                value={data}
                onChange={inputHandler}
                required
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="form-group w-50 ml-5 mt-4">
              <label htmlFor="exampleFormControlTextarea1">Observação</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="observacao"
                onChange={inputHandler}
                value={observacao}
              ></textarea>
            </div>
            <div className="form-check ml-5 mt-4">
              <input
                name="termos"
                className="form-check-input"
                type="checkbox"
                required
                value="true"
                id="Check4"
              />

              <label className="form-check-label" htmlFor="Check4">
                Eu li e concordo com os termos
              </label>
            </div>

            <div className="d-flex justify-content-center w-100 mt-4 pb-5">
              <button
                type="submit"
                className="btn btn-green text-white w-35 text-uppercase ml-3"
              >
                Continuar
              </button>
            </div>
          </form>
        </section>
      </>
    );
  } else return null;
}
