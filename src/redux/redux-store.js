import {combineReducers, createStore} from "redux";
import listReducer from "./list-reduser";

// объединяем редьюсеры в объект
let reducers = combineReducers({
    listPage: listReducer
});

// создаем store
// передаем ему редьюсеры
let store = createStore(reducers);
window.store = store;
export default store;