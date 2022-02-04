import { Action, Crypto } from "../../interfaces"
import { READ_DATA } from "../actions/crypto.actions"

type State = {
    cryptoList: Crypto[],
}

const initialState = {
    cryptoList: []
}

export const CryptoReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case READ_DATA:
            return {
                ...state,
                cryptoList: action.payload
            }
        default:
            return state;
    }
}