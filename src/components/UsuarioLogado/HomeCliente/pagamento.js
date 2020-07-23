import React from 'react'

export default function Pagamento(props) {
    const controller = props.controller
    const profissional = props.profissional
    const handleButtonChange = props.handleButtonChange

    if (controller === 12) {
        return (
            <div>
                <h1 className="text-center">Pagamento</h1>
                <p className="text-center">Insira os dados do seu cartão de crédito</p>
            </div>
        )
    } else {
        return null
    }
}