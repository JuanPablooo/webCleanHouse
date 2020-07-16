import React from 'react';
import { useDispatch } from 'react-redux';

import ImgPasso1 from '../../images/c1.png';
import Passo1 from '../PassosGenericos/Passo1';
import { actions } from '../../../actions/passosActions';

export default function Passo1Cliente(props){
    const trocaPagina = ( urlPagina ) => props.history.push('/' + urlPagina);
    const FormGroup = props.formGroup;
    const dispatch = useDispatch();
    const subtitulo = 'Profissionais só terão acesso ao seu nome'

    function proximoPasso () {
        dispatch(actions.mudaPasso(1));
    }
    function anterior () {
        trocaPagina('cadastro')
    }


    return(
        <>
            <Passo1 formGroup={FormGroup} proximoPasso={proximoPasso}
             img={ImgPasso1} infoSubtitulo={subtitulo} anterior={anterior}/>
        </>
    )
}