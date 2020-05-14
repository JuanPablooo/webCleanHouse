import React from 'react';
import { useDispatch } from 'react-redux';

import ImgPasso1 from '../images/c1.png';
import { actions } from '../../actions/passosActions';
import { Field, ErrorMessage } from 'formik';

export default function Passo1Cliente(props){
    const dispatch = useDispatch();

    function proximoPasso () {
        dispatch(actions.mudaPasso(1));
    }


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
                <Field type="text" className="form-control" placeholder="digite seu nome" id="nome" name="nome"></Field> 
                <ErrorMessage className="text-danger" component="span" name="nome"/>
                </div>
            </div>

            <div className="col-md-5 col-sm-12">
                <div className="form-group">
                <label htmlFor="telefone"> Telefone</label>
                <Field type="text" className="form-control" placeholder="digite seu telefone" name="telefone" id="telefone"/>
                <ErrorMessage className="text-danger" component="span" name="telefone"/>
                </div>
            </div>

            </div>

            <div className="row justify-content-around">
            <div className="col-md-5 col-sm-12" >
                <div className="form-group">
                    <label htmlFor="email">Email<span className="text-danger">*</span> </label>
                    <Field type="email" className="form-control" placeholder="digite seu email" name="email" id="email"/>
                    <ErrorMessage className="text-danger" component="span" name="email"/>
                </div>
            </div>
            <div className="col-md-5 col-sm-12" >
                <div className="form-group">
                    <label htmlFor="celular">Celular<span className="text-danger">*</span> </label>
                    <Field type="text" className="form-control" placeholder="digite seu celular" id="celular" name="celular"/>
                    <ErrorMessage className="text-danger" name="celular" component="span" />
                </div>
            </div>
            </div>

            <div className="row justify-content-around">
            <div className="col-md-5 col-sm-12">
                <div className="form-group">
                <label htmlFor="cpf">CPF<span className="text-danger">*</span> </label>
                <Field type="text" className="form-control" placeholder="digite seu cpf" id="cpf" name="cpf"/>
                <ErrorMessage className="text-danger" name="cpf" component="span" />
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
                    <button  type="submit" className="btn btn-sair text-white" >CONTINUAR</button>
                    {/* <button  type="button" className="btn btn-sair text-white" onClick={proximoPasso}>CONTINUAR</button> */}
                </div>
            </div>

            </div>
        </div>
        </>
    )
}