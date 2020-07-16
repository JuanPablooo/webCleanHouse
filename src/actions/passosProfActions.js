import { actionsTypes } from '../constants/passosProfConstants';

const actions = {
    mudaPasso: (passo) => ({
        type: actionsTypes.MUDA_PASSO,
        passo: passo
    })
}

export { actions }