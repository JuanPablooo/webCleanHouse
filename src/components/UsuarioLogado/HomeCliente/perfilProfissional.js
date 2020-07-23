import React, { useEffect, useState } from "react";
import "./HomeCliente.css";

export default function PerfilProfissional(props) {
    const controller = props.controller
    const profissional = props.profissional
    const handleButtonChange = props.handleButtonChange

    if (controller === 11) {
        return (
            <div>
                {console.log(profissional)}
                
                <h1 className="mt-5 mb-5 text-center">PERFIL DO PROFISSIONAL</h1>
                <div className="row">
                    <div className="col-md-6" style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 150, height:150, background: '#000', borderRadius: 50 }}>

                        </div>
                    </div>

                    <div className="col-md-6" style={{ height: 100 }}>
                        <textarea className="mb-5" style={{ width: 150, height:150, resize: 'none'}} readOnly>
                            
                            {profissional.nomeCompleto}
                            
                        </textarea>
                    </div>

                    <h1 className="text-center mt-5 mt-t">VÍDEO DE APRESENTAÇÃO</h1>
                </div>

                <button className="btn mt-2 btn-green text-white" onClick={() => handleButtonChange(12)}>
                    Pagar
                </button>  
            </div>
        )
    } else {
        return null
    }
}