import { actionsTypes, todosPassos, passoInicial } from '../constants/passosProfConstants';

const reducers = (state = passoInicial, action) => {
    switch (action.type) {
        case actionsTypes.MUDA_PASSO:
            return { ...state, passo: todosPassos[action.passo] }
        default:
            return state;
    }
}

export { reducers }