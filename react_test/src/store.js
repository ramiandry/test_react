import { createStore } from 'redux';
import formReducer from './reducers/formReducer.js';

const store = createStore(formReducer);

export default store;