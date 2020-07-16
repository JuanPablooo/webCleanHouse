import React from 'react';
import { useDispatch } from 'react-redux';

import ImgPasso1 from '../../images/p1.png';
import Passo1 from '../PassosGenericos/Passo1';
import { actions } from '../../../actions/passosProfActions';

export default function Passo1Profissional(props){
    const FormGroup = props.formGroup;
    const dispatch = useDispatch();
    const subtitulo = 'Profissionais só terão acesso ao seu nome'

    function proximoPasso () {
        dispatch(actions.mudaPasso(1));
    }

    return(
        <>
            <Passo1 formGroup={FormGroup} proximoPasso={proximoPasso}
             img={ImgPasso1} infoSubtitulo={subtitulo}/>
        </>
    )
}