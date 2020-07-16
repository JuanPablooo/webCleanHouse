import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Field } from 'formik'

import ImgPasso3 from '../../images/p3.png';
import { actions } from '../../../actions/passosProfActions';

export default function Passo3Profissional(props) {
    const FormGroup = props.formGroup;
    const dispatch = useDispatch();

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

                <div className="align-self-center">
                    <p className="text-muted">Precisamos saber qual(is) serviço(s) você realiza para enviarmos ofertas específicas </p>
                </div>

                <div className="align-self-center col-sm-10 row d-flex justify-content-center">
                    <img src={ImgPasso3} alt="passo 3" className="img-passos"></img>
                </div>

                <div className="container align-self-center">
                    <div className="row">
                        <div className="col-md-4">
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
                                        Cozinha
                                    </div>
                                )
                            }} />
                        </div>

                        <div className="col-md-4">
                            <Field component={({ field, form }) => {
                                return (
                                    <div>
                                        <input
                                            type="checkbox"
                                            style={{ marginRight: 10 }}
                                            checked={lavar}
                                            onChange={e => {
                                                setLavar(e.target.checked)
                                                form.setFieldValue('lavar', e.target.checked)
                                            }}
                                        />
                                        Limpar
                                    </div>
                                )
                            }} />
                        </div>

                        <div className="col-md-4">
                            <Field component={({ field, form }) => {
                                return (
                                    <div>
                                        <input
                                            type="checkbox"
                                            style={{ marginRight: 10 }}
                                            checked={passar}
                                            onChange={e => {
                                                setPassar(e.target.checked)
                                                form.setFieldValue('passar', e.target.checked)
                                            }}
                                        />
                                        Passar
                                    </div>
                                )
                            }} />
                        </div>
                    </div>
                </div>

                <div className="col-md-5 col-sm-12 d-flex  align-items-start">
                    <div className="form-group row w-100 justify-content-around">
                        <button
                            type="button"
                            className="btn btn-blue-dark text-white col-md-5 col-sm-12"
                        >
                            VOLTAR
                        </button>
                        <button
                            type="button"
                            className="btn btn-blue-dark text-white col-md-5 col-sm-12"
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