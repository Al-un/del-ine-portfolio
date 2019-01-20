import { createStore } from 'redux';
import rootReducer from './root.ducks';

const store = createStore(rootReducer);

export default store;
