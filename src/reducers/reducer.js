import { combineReducers } from 'redux';

import { reducers as passosReducers  } from './passosReducer';
import { reducers as passosProfReducers } from './passosProfReducer'

const reducers = combineReducers({
    passosReducers,
    passosProfReducers
})

export { reducers }