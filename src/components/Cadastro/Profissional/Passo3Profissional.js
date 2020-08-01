import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Field } from 'formik'

import ImgPasso3 from '../../images/p3.png';
import { actions } from '../../../actions/passosProfActions';

export default function Passo3Profissional(props) {
    const FormGroup = props.formGroup;
    const dispatch = useDispatch();

    function passoAnterior() {
        dispatch(actions.mudaPasso(1));
    }

    function proximoPasso() {
        dispatch(actions.mudaPasso(3));
    }

    const [cozinhar, setCozinhar] = useState(false)
    const [lavar, setLavar] = useState(false)
    const [passar, setPassar] = useState(false)

    return (
        <div>
            <section className="passo-a-passo  d-flex flex-column row my-3">
                <div className="align-self-center">
                    <h2 className="text-primary">Informações de serviço</h2>
                </div>

                <div className="align-self-center mb-4">
                    <p className="text-muted">
                        Precisamos saber qual(is) serviço(s) você realiza para enviarmos
                        ofertas específicas 
                    </p>
                </div>

                <div className="align-self-center col-sm-10 row d-flex justify-content-center mt-3 mb-3">
                    <img src={ImgPasso3} alt="passo 3" className="img-passos"></img>
                </div>

                <div className="form-control mt-5 mb-5 form-control-lg container form-check-inline justify-content-around">
                    <div className="row">

                        <div className=" ml-5 mr-5 mt-3">
                            <Field component={({ field, form }) => {
                                return (
                                    <div >
                                        <input 
                                            type="checkbox"
                                            style={{ marginRight: 10 }}
                                            checked={lavar}
                                            onChange={e => {
                                                setLavar(e.target.checked)
                                                form.setFieldValue('lavar', e.target.checked)
                                            }}
                                        />
                                        Limpar a casa
                                    </div>
                                )
                            }} />
                        </div>

                        <div className="custom-checkbox checkbox-xl mt-3">
                            <Field component={({ field, form }) => {
                                return (
                                    <div>
                                        <input
                                            type="checkbox"
                                            style={{ marginRight: 10 }}
                                            checked={cozinhar}
                                            onChange={e => {
                                                setCozinhar(e.target.checked)
                                                form.setFieldValue('cozinhar', e.target.checked)
                                            }}
                                        />
                                        Cozinhar
                                    </div>
                                )
                            }} />
                        </div>

                        <div className=" custom-checkbox checkbox-xl ml-5 mt-3">
                            <Field component={({ field, form }) => {
                                return (
                                    <div>
                                        <input
                                            className="custom-checkbox checkbox-xl justify-content-around"
                                            type="checkbox"
                                            style={{ marginRight: 10 }}
                                            checked={passar}
                                            onChange={e => {
                                                setPassar(e.target.checked)
                                                form.setFieldValue('passar', e.target.checked)
                                            }}
                                        />
                                        Lavar e passar
                                    </div>
                                )
                            }} />
                        </div>
                    </div>
                </div>

                <div className="col-md-5 d-flex flex-row-reverse align-self-end">
                    <div className="form-group row w-100 justify-content-around">
                        <button
                            type="button"
                            className="btn btn-blue-dark text-white col-md-4 col-sm-12"
                            onClick={passoAnterior}
                        >
                            VOLTAR
                        </button>
                        <button
                            type="button"
                            className="btn btn-blue-dark text-white col-md-4 col-sm-12"
                            onClick={proximoPasso}
                        >
                            CONTINUAR
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}