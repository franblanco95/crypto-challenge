import { Action, Crypto } from "../../interfaces"
import { ADD_CRYPTO, READ_DATA, UPDATE_DATA } from "../actions/crypto.actions"

export type State = {
    cryptoList: Crypto[],
}

const initialState: State = {
    cryptoList: []
}

export const CryptoReducer = (state: State = initialState, { type, payload }: Action): State => {
    switch (type) {
        case ADD_CRYPTO:
            return {
                ...state,
                cryptoList: [...state.cryptoList, payload]
            }

        case READ_DATA:
            return {
                ...state,
                cryptoList: payload
            }
        default:
            return state;
    }
}
