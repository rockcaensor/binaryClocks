import { createStore, combineReducers } from "redux";
import ClocksReducer from "./ClocksReducer";

let reducers = combineReducers({
  ClocksPage: ClocksReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
