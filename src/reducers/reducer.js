import { combineReducers } from 'redux';

import { reducers as passosReducers  } from './passosReducer';

const reducers = combineReducers({
    passosReducers
})
export { reducers }