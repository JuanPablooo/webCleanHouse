import React from 'react';
import ImgPasso1 from '../images/c1.png';

export default function Passo1Cliente(props){
    return(
        <>
        <section className="passo-a-passo  d-flex flex-column row my-3">
            <div className="align-self-center">
            <h2 className="text-primary" >Informações Pessoais</h2>
            </div>

            <div className="align-self-center">
            <p className="text-muted">Precisamos dessas informações para montar o seu perfil. Profissionais só terão acesso ao seu nome</p>
            </div>

            <div className="align-self-center col-sm-10 row d-flex justify-content-center">
            <img src={ImgPasso1} alt="passo 1" className="img-passos" ></img>
            </div>
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

        </>
    )
}