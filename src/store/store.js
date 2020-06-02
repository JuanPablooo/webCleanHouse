import { createStore } from 'redux';
import { reducers } from '../reducers/passosReducer';


const store = createStore(reducers);

export { store };

