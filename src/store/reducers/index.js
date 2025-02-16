import { combineReducers, legacy_createStore as createStore } from 'redux';
import menuHeaderReducer from './menuHeaderReducer';
import menuReducer from './menuReducer';



const rootReducer = combineReducers({
    menuHeader: menuHeaderReducer,
    menu: menuReducer
});

const store = createStore(rootReducer);

export default store;