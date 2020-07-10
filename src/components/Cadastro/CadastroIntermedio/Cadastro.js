import React from 'react';
import './CadastroIntermedio.css';
import Navbar from '../../Navbar';
import { Link } from "react-router-dom";

export default function CadastroIntermedio(props) {
    return (
        <div>
            <Navbar/>
            
                <section className="bg-blue text-white h-header" >
                    <div className="container mt-n1 text-center">
                        <div className="mt-n1">
                            <h1 className="display-4 text-center mt-n1"> Escolha o tipo de perfil</h1>
                            <p className="text-center mt-n1">Para iniciar, informe-nos a seguir se você deseja limpar casas ou quer sua casa limpa</p>
                            <Link
                                className="btn btn-blue-dark btn-radius
                                ml-auto mr-auto text-capitalize mt-n1"
                                to="/">
                                Voltar para Home
                            </Link>
                        </div>
                        
                    </div>
                </section>
            
                <section className="bg-blue2 w-50 text-white h-header2 float-left">
                    <p className="font-weight-bold pr-half">Sou Cliente</p>
                    <div id="imagem_cliente"></div>
                    <p className="font-weight-bold mt-2 ml-5 " id="para_direita">
                        Clique no botão se deseja contratar serviços domésticos
                    </p>
                    <button
                      className="btn btn-blue-dark btn-radius btn-primary btn-lg float-right mr-5 mb-1" 
                      onClick={() => {
                        props.history.push("/cadastro/cliente");
                      }}>
                        Registre-se
                    </button>
                </section>
                <section className="bg-white w-50 text-black h-header2 float-right">
                    <p className="font-weight-bold pl-half">Sou Profissional</p>
                    <div id="imagem_profissional"></div>
                    <p className="font-weight-bold mt-2 ml-5"> 
                        Clique no botão se deseja realizar serviços domésticos 
                    </p>
                    <button
                      className="btn btn-blue-dark btn-radius btn-primary btn-lg ml-5 mb-1" >
                        Registre-se
                    </button>
                </section>
        </div>
    )
}
