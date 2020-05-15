import React from 'react';
import { useDispatch } from 'react-redux';

import ImgPasso1 from '../images/c1.png';
import { actions } from '../../actions/passosActions';
import { Field, ErrorMessage } from 'formik';

export function FormGroup(props){
    // const input = props.field;
    const name  = props.id;
    const tituloDoCampo = props.titulo;
    const messageDeErro = props.errorMessage;
    const type = props.type;
    const placeholder = props.placeholder;
    const require = props.require;

    return(
    <div className="col-md-5 col-sm-12 ">
        <div className="form-group">
    <label className="input-group" htmlFor={ name } > { tituloDoCampo }{ require && <span className="text-danger">*</span> }</label>
            <Field type={ type } className="form-control" placeholder={ placeholder } name={ name } id={ name }/>
            <ErrorMessage className="text-danger" name={ name } component="span" />
        </div>
    </div>

    )
}

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
                <FormGroup  id="name" placeholder="Digite seu nome" type="text" titulo="Nome Completo" require/>
                <FormGroup  id="telefone" placeholder="Digite seu telefone" type="text" titulo="Telefone"/>
            </div>

            <div className="row justify-content-around">
                <FormGroup id="email" type="email" require titulo="E-mail" placeholder="Digite seu email"/>
                <FormGroup id="celular" type="text" require titulo="Celular" placeholder="Digite seu celular"/>
            </div>

            <div className="row justify-content-around">
                <FormGroup id="cpf" type="text" require titulo="CPF" placeholder="Digite seu cpf"/>
                <FormGroup id="senha" type="password" require titulo="Senha" placeholder="Digite sua senha"/>
            </div>

            <div className="row justify-content-around">
                <FormGroup id="data-nascimento" placeholder="Digite sua data de nascimento" require type="text" titulo="Data de nascimento" />
                <div className="col-md-5 col-sm-12">
                    <div className="form-group">                       
                        <button  type="button" className="btn btn-sair text-white" onClick={proximoPasso}>CONTINUAR</button>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}