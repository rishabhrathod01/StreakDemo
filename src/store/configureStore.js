import { createStore , combineReducers } from 'redux';
import ModalReducer from "./reducers/ModalReducer";

const rootReducer = combineReducers({
    modal : ModalReducer,
});

const configureStore = () =>{
    return createStore(rootReducer);
}

export default configureStore;
