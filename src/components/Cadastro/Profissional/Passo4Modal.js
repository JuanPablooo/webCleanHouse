import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import todasCidades from './cidades'
import { Field } from 'formik'

const customStyles = {
    content: {
        width: '500px',
        height: '300px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export default function Passo4Modal({ zona, showModal, setShowModal }) {
    const cidadesZona = zona ? todasCidades[zona] : false

    const [cidades, setCidades] = useState({})
    const [cidadesSelected, setCidadesSelected] = useState({})

    useEffect(() => {
        if (cidadesZona) {
            let cidadesLocal = {}

            cidadesZona.forEach(cidade => {
                cidadesLocal = { ...cidadesLocal, [cidade]: false }
            })

            setCidades(cidadesLocal)
            setCidadesSelected({})
        }
    }, [cidadesZona])

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
            ariaHideApp={false}
        >
            <h2 style={{ marginBottom: 10 }}>
                Zona {zona.charAt(0).toUpperCase() + zona.slice(1)}
            </h2>
            <div>
                {cidadesZona ? cidadesZona.map(cidade => {

                    return (
                        <Field key={cidade} component={({ field, form }) => {
                            return (
                                <div>
                                    <input
                                        type="checkbox"
                                        style={{ marginRight: 10 }}
                                        checked={cidades[cidade]}
                                        onChange={e => {
                                            setCidades({ ...cidades, [cidade]: e.target.checked })
                                        
                                            if (e.target.checked) {
                                                setCidadesSelected({
                                                    ...cidadesSelected,
                                                    [cidade]: true
                                                })

                                                form.setFieldValue(zona, {
                                                    ...cidadesSelected,
                                                    [cidade]: true
                                                }) 
                                            }
                                        }}
                                    />
                                    {cidade}
                                </div>
                            )
                        }} />
                    )
                }) : <></>}
            </div>
        </Modal>
    )
}