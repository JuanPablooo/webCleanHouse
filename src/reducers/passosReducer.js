import { actionsTypes, todosPassos, passoInicial } from '../constants/passosConstants';

const reducers = ( state = passoInicial, action) => {
    switch (action.type){
        case actionsTypes.MUDA_PASSO:
            return {...state, passo: todosPassos[1]}
        default:
            return state;
    }
}

export { reducers }