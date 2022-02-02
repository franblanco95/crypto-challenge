import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { CriptoReducer } from "./reducers/cripto.reducers";

const RootReducer = combineReducers({
    cripto: CriptoReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))