import React from 'react';
import { useDispatch } from 'react-redux';

import ImgPasso2 from '../../images/p2.png';
import Passo2 from '../PassosGenericos/Passo2';
import { actions } from '../../../actions/passosProfActions';


export default function Passo2Profissional(props){
    const FormGroup = props.formGroup;
    const dispatch = useDispatch();
    const subtitulo = 'Profissionais só terão acesso ao seu nome'

    function proximoPasso () {
        dispatch(actions.mudaPasso(2));
    }

    function passoAnterior() {
        dispatch(actions.mudaPasso(0));
    }

    return(
        <>
            <Passo2
                formGroup={FormGroup} 
                proximoPasso={proximoPasso}
                img={ImgPasso2} 
                infoSubtitulo={subtitulo}
                passoAnterior = {passoAnterior}
            />
        </>
    )
}