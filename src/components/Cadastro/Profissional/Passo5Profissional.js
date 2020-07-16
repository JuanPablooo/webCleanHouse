import React, { useState, useMemo } from 'react'
import { Field } from 'formik'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import ImgPasso5 from '../../images/p5.png';

import { actions } from '../../../actions/passosProfActions';

export default function Passo5Profissional(props) {
    const [redirect, setRedirect] = useState(false)

    const [imagem, setImagem] = useState("")
    const [video, setVideo] = useState("")

    const preview = useMemo(() => {
        return imagem ? URL.createObjectURL(imagem) : null
    }, [imagem])

    return (
        <>
            {redirect ? <Redirect to={{ pathname: "/login" }} /> : null}

            <section className="passo-a-passo  d-flex flex-column row my-3">
                <div className="align-self-center">
                    <h2 className="text-primary">Foto de perfil</h2>
                </div>

                <div className="align-self-center">
                    <p className="text-muted">
                        Complete o seu perfil colocando a sua foto
                    </p>
                </div>

                <div className="align-self-center col-sm-10 row d-flex justify-content-center">
                    <img src={ImgPasso5} alt="passo 5" className="img-passos"></img>
                </div>


                <div className="formulario col w-75 mx-auto">
                    <div className="row justify-content-start">
                        <div className="col-md-6 col-sm-12">
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <Field name="imagem" component={({ field, form }) => {
                                        return (<>
                                            <input
                                                name="imagem"
                                                accept="image/png, image/jpeg"
                                                type="file"
                                                className="form-control"
                                                onChange={e => {
                                                    setImagem(e.target.files[0])
                                                    console.log(e.target.files[0])
                                                    form.setFieldValue('imagem', e.target.files[0])
                                                }}
                                            />
                                        </>)
                                    }} />
                                </div>
                            </div>
                            <img src={preview} style={{ width: 'auto', height: '150px' }} />
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <Field name="video" component={({ field, form }) => {
                                        return (<>
                                            <input
                                                name="video"
                                                accept="video/*"
                                                type="file"
                                                className="form-control"
                                                onChange={e => {
                                                    form.setFieldValue('video', e.target.files[0])
                                                }}
                                            />
                                        </>)
                                    }} />
                                </div>
                            </div>
                            <div>
                                <Field name="imagem" component={({ field, form }) => {
                                    return (<>
                                        <textarea 
                                            style={{ resize: 'none', width: '100%', height: 100 }}
                                            onChange={(e) => {
                                                form.setFieldValue('detalhes', e.target.value)
                                            }}   
                                        ></textarea>
                                    </>)
                                }} />

                                <button
                                    style={{ width: '100%' }}
                                    type="submit"
                                    className="btn btn-blue-dark text-white col-md-5 col-sm-12"
                                >
                                    CONTINUAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}