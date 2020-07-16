import React, { useState } from "react";
import axios from 'axios'

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

        <div className="align-self-center">
          <p className="text-muted">{infoSubtitulo}</p>
        </div>

        <div className="align-self-center col-sm-10 row d-flex justify-content-center">
          <img src={imgPasso} alt="passo 1" className="img-passos"></img>
        </div>
      </section>
      <div className="formulario col w-75 mx-auto">
        <div className="row justify-content-around">
          <FormGroup
            id="cep"
            type="text"
            require
            titulo="Cep"
            placeholder="Digite seu cep"
            // onChange={async (e) => {
            //   const cep = e.target.value
              
            //   if (e.target.value.length === 9) {
            //     try {
            //       const { data } = await axios.get(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`)
                  
            //       setLogradouro(data.logradouro)
            //       setUf(data.uf)
            //       setBairro(data.bairro)
            //       setLocalidade(data.localidade)
            //     } catch (error) {
            //       return console.log(error)
            //     }
            //   }
            // }}
          />
          <FormGroup
            id="estado"
            type="text"
            require
            titulo="Estado"
            placeholder="Digite seu estado"
          />
        </div>

        <div className="row justify-content-around">
          <FormGroup
            id="cidade"
            type="text"
            require
            titulo="Cidade"
            placeholder="Digite sua cidade"
          />
          <FormGroup
            id="bairro"
            type="text"
            require
            titulo="Bairo"
            placeholder="Digite seu bairro"
          />
        </div>

        <div className="row justify-content-around">
          <FormGroup
            id="rua"
            type="text"
            require
            titulo="Rua"
            placeholder="Digite sua Rua"
          />
          <FormGroup
            id="numero"
            type="text"
            require
            titulo="Numero"
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
          <div className="col-md-5 col-sm-12 d-flex  align-items-start">
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
