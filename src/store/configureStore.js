import { createStore, combineReducers } from "redux";
import ModalReducer from "./reducers/ModalReducer";
import WatchListReducer from "./reducers/WatchListReducer";

const rootReducer = combineReducers({
  modal: ModalReducer,
  watchList: WatchListReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
