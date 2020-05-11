import { actionsTypes } from '../constants/passosConstants';


const actions = {
    mudaPasso: (passo) => ({
        type: actionsTypes.MUDA_PASSO,
        passo: passo
    })
}

export { actions }