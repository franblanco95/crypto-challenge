import { Action, Crypto } from "../../interfaces"
import { ADD_CRYPTO, READ_DATA } from "../actions/crypto.actions"

export type State = {
    cryptoList: Crypto[],
}

const initialState = {
    cryptoList: []
}

export const CryptoReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ADD_CRYPTO:
            const updateList = [...state.cryptoList, action.payload]
            return {
                ...state,
                cryptoList: updateList
            }

        case READ_DATA:
            return {
                ...state,
                cryptoList: action.payload
            }
        default:
            return state;
    }
}