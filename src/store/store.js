import { createStore, combineReducers } from "redux";

import { reducers as passo } from "../reducers/passosReducer";
import { reducers as passoProf } from "../reducers/passosProfReducer" 

const store = createStore(combineReducers({
    passoCliente: passo,
    passoProf: passoProf
}));

export { store };
