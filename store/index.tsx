import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { CryptoReducer } from "./reducers/crypto.reducers";

export type RootState = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
    cripto: CryptoReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk))