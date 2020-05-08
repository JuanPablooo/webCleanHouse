import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImgPasso3 from '../images/'

export default function Passo3Cliente(){


    return (
        <>
        <section className="passo-a-passo  d-flex flex-column row my-3">
            <div className="align-self-center">
            <h2 className="text-primary" >Foto de perfil</h2>
            </div>

            <div className="align-self-center">
            <p className="text-muted">Complete o seu perfil colocando a sua foto</p>
            </div>

            <div className="align-self-center col-sm-10 row d-flex justify-content-center">
                <img src={ImgPasso1} alt="passo 1" className="img-passos" ></img>
            </div>
        </section>
        </>
    )
}