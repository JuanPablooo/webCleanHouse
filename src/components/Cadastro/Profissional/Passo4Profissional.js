import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import Passo4Modal from './Passo4Modal'

import ImgPasso4 from '../../images/p4.png';

import { actions } from '../../../actions/passosProfActions';

export default function Passo4Profissional(props) {
    const FormGroupCheckbox = props.formGroupCheckbox;
    const dispatch = useDispatch();

    function passoAnterior() {
        dispatch(actions.mudaPasso(1));
    }

    function proximoPasso() {
        dispatch(actions.mudaPasso(4));
    }

    const [showModal, setShowModal] = useState(false)
    const [modalZona, setModalZona] = useState("")
    const [zonaNorte, setZonaNorte] = useState(false)
    const [zonaSudeste, setZonaSudeste] = useState(false)
    const [zonaOeste, setZonaOeste] = useState(false)
    const [zonaLeste, setZonaLeste] = useState(false)
    const [zonaSudoeste, setZonaSudoeste] = useState(false)

    return (
        <div>
            <Passo4Modal zona={modalZona} showModal={showModal} setShowModal={setShowModal} />

            <div>
                <section className="passo-a-passo  d-flex flex-column row my-3">
                    <div className="align-self-center">
                        <h2 className="text-primary">Informações de serviço</h2>
                    </div>

                    <div className="align-self-center mb-4">
                        <p className="text-muted">
                            Precisamos saber em qual(is) região(ões) você deseja deseja trabalhar
                            para enviarmos ofertas específicas
                        </p>
                    </div>

                    <div className="align-self-center col-sm-10 row d-flex justify-content-center">
                        <img src={ImgPasso4} alt="passo 4" className="img-passos"></img>
                    </div>

                    <p className=" align-self-center mt-4 mb-5">
                        No momento, a aplicação está disponível para a
                        região metropolitana de São Paulo:
                    </p>

                    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>

                        <FormGroupCheckbox
                            id="norte"
                            type="checkbox"
                            titulo="Norte"
                            checked={zonaNorte}
                            onChange={e => {
                                setZonaNorte(e.target.checked)

                                if (e.target.checked) {
                                    setModalZona("norte")
                                    setShowModal(true)
                                }
                            }}
                        />

                        <FormGroupCheckbox
                            id="sudeste"
                            type="checkbox"
                            titulo="Sudeste"
                            checked={zonaSudeste}
                            onChange={e => {
                                setZonaSudeste(e.target.checked)

                                if (e.target.checked) {
                                    setModalZona("sudeste")
                                    setShowModal(true)
                                }
                            }}
                        />

                        <FormGroupCheckbox
                            id="leste"
                            type="checkbox"
                            titulo="Leste"
                            checked={zonaLeste}
                            onChange={e => {
                                setZonaLeste(e.target.checked)

                                if (e.target.checked) {
                                    setModalZona("leste")
                                    setShowModal(true)
                                }
                            }}
                        />

                        <FormGroupCheckbox
                            id="oeste"
                            type="checkbox"
                            titulo="Oeste"
                            checked={zonaOeste}
                            onChange={e => {
                                setZonaOeste(e.target.checked)

                                if (e.target.checked) {
                                    setModalZona("oeste")
                                    setShowModal(true)
                                }
                            }}
                        />

                        <FormGroupCheckbox
                            id="sudoeste"
                            type="checkbox"
                            titulo="Sudoeste"
                            checked={zonaSudoeste}
                            onChange={e => {
                                setZonaSudoeste(e.target.checked)

                                if (e.target.checked) {
                                    setModalZona("sudoeste")
                                    setShowModal(true)
                                }
                            }}
                        />

                    </div>

                    <div className="row align-self-end">
                        <div className="form-group col-12 d-flex">
                            <button
                                type="button"
                                className="btn btn-blue-dark text-white col-md-6 col-sm-12"
                                onClick={passoAnterior}
                            >
                                VOLTAR
                            </button>
                            <button
                                type="button"
                                className="btn btn-blue-dark text-white mr-5 ml-2 col-md-6 col-sm-12"
                                onClick={proximoPasso}
                            >
                                CONTINUAR
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    )
}