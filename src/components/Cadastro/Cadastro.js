import React from 'react';


import "./cadastro.css"
import imgFundoLogo from '../images/pin.png';

export default function Cadastro(props){
  //const {estado, setEstado} = useState(0)
  
  
  return(
    <>
      <div className="container-fluid">
        <header className="bg-header h-header text-white row justify-content-around ">
            <div className="logo mt-3 col-3">
              <img src={imgFundoLogo}></img>
            </div>
            <div className=" col-6 saudacao align-self-end mb-3 ">
                <h2>A Clean House le deseja boas vindas!</h2>
            </div>

            <div className="col-3">
              <button className="btn btn-sair text-white col-3">Sair</button>
            </div>
        </header>
        <div className="">
          <section className="passo-a-passo">
              passo-a-passo
          </section>
          <div className="formulario col w-75 mx-auto">

            <div className="row justify-content-around">
              <div className="col-md-5 col-sm-12 ">
                <div className="form-group">
                  <label className="input-group" htmlFor="nome"> Nome Completo<span className="text-danger">*</span> </label>
                  <input type="text" className="form-control" placeholder="digite seu nome" id="nome"></input> 
                  
                </div>
              </div>

              <div className="col-md-5 col-sm-12">
                <div className="form-group">
                  <label htmlFor="telefone"> Telefone</label>
                  <input type="number" className="form-control" placeholder="digite seu telefone" id="telefone"></input>
                </div>
              </div>

            </div>

            <div className="row justify-content-around">
              <div className="col-md-5 col-sm-12" >
                <div className="form-group">
                    <label htmlFor="email">Email<span className="text-danger">*</span> </label>
                    <input type="email" className="form-control" placeholder="digite seu email" id="email"></input>
                </div>
              </div>
              <div className="col-md-5 col-sm-12" >
                <div className="form-group">
                    <label htmlFor="celular">Celular<span className="text-danger">*</span> </label>
                  <input type="email" className="form-control" placeholder="digite seu celular" id="celular"></input>
                </div>
              </div>
            </div>

            <div className="row justify-content-around">
              <div className="col-md-5 col-sm-12">
                <div className="form-group">
                  <label htmlFor="cpf">CPF<span className="text-danger">*</span> </label>
                  <input  type="text" className="form-control" placeholder="digite seu cpf"></input>
                </div>
              </div>

              <div className="col-md-5 col-sm-12">
                <div className="form-group">
                  <label htmlFor="senha">Senha<span className="text-danger">*</span></label>
                  <input type="password" id="senha" className="form-control" placeholder="digite senha" ></input>
                </div>
              </div>
            </div>

            <div className="row justify-content-around">
              <div className="col-md-5 col-sm-12">
                <div className="form-group">
                  <label htmlFor="data-nascimento">Data de Nascimento<span className="text-danger">*</span></label>
                  <input type="password" id="data-nascimento" className="form-control" placeholder="digite sua data de nascimento" ></input>
                </div>
              </div>

              <div className="col-md-5 col-sm-12">
                <div className="form-group">
                  <button  type="button" className="btn btn-sair text-white" >CONTINUAR</button>
                </div>
              </div>

            </div>
            
          




          </div>

        </div>
        <div className="svgm"></div>
      </div>
    
    </>
  )

}