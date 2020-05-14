import React from 'react';
import { useDispatch } from 'react-redux';


import ImgPasso1 from '../images/c2.png';
import { actions } from '../../actions/passosActions';


export default function Passo2Cliente(props){
    const dispatch = useDispatch();

    function proximoPasso(){
        dispatch(actions.mudaPasso(2))
    }
    return(
        <>
        <section className="passo-a-passo  d-flex flex-column row my-3">
            <div className="align-self-center">
            <h2 className="text-primary" >Informações de endereço</h2>
            </div>

            <div className="align-self-center">
            <p className="text-muted">Precisamos de seu endereço para que o profissional vá até sua residência</p>
            </div>

            <div className="align-self-center col-sm-10 row d-flex justify-content-center">
            <img src={ImgPasso1} alt="passo 1" className="img-passos" ></img>
            </div>
        </section>
        <div className="formulario col w-75 mx-auto">

            <div className="row justify-content-around">
            <div className="col-md-5 col-sm-12 ">
                <div className="form-group">
                <label className="input-group" htmlFor="cep"> CEP<span className="text-danger">*</span> </label>
                <input type="text" className="form-control" id="cep" placeholder="digite seu cep"></input> 
                
                </div>
            </div>

            <div className="col-md-5 col-sm-12">
                <div className="form-group">
                <label htmlFor="uf"> Estado</label>
                <input type="number" className="form-control" id="uf" placeholder="digite seu estado"></input>
                </div>
            </div>

            </div>

            <div className="row justify-content-around">
            <div className="col-md-5 col-sm-12" >
                <div className="form-group">
                    <label htmlFor="cidade"> Cidade<span className="text-danger">*</span> </label>
                    <input type="email" className="form-control" id="cidade" placeholder="digite sua cidade" ></input>
                </div>
            </div>
            <div className="col-md-5 col-sm-12" >
                <div className="form-group">
                    <label htmlFor="bairro"> Bairro<span className="text-danger">*</span> </label>
                <input type="email" className="form-control" id="bairro" placeholder="digite seu celular" ></input>
                </div>
            </div>
            </div>

            <div className="row justify-content-around">
            <div className="col-md-5 col-sm-12">
                <div className="form-group">
                <label htmlFor="rua"> Rua<span className="text-danger">*</span> </label>
                <input  type="text" className="form-control" id="rua" placeholder="digite o nome de sua rua"></input>
                </div>
            </div>

            <div className="col-md-5 col-sm-12">
                <div className="form-group">
                <label htmlFor="numero"> Numero<span className="text-danger">*</span></label>
                <input type="password" className="form-control" id="numero" placeholder="digite senha" ></input>
                </div>
            </div>
            </div>

            <div className="row justify-content-around">
            <div className="col-md-5 col-sm-12">
                <div className="form-group">
                <label htmlFor="complemento">Complemento</label>
                <input type="password" className="form-control" id="data-nascimento" placeholder="digite sua data de nascimento" ></input>
                </div>
            </div>

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