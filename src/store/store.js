import { legacy_createStore as createStore } from 'redux';
import menuHeaderReduce from './reducers/menuHeaderReduce';


export const myStore = createStore(menuHeaderReduce);