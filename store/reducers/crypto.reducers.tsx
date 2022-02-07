import { Action, Crypto } from "../../interfaces"
import { ADD_CRYPTO, READ_DATA } from "../actions/crypto.actions"

type State = {
    cryptoList: Crypto[],
}

const initialState = {
    cryptoList: []
}

export const CryptoReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case ADD_CRYPTO:
            const addedCrypto = state.cryptoList.findIndex(item => item.id === action.payload.id)
            if (addedCrypto === -1) {
                const updateList = [...state.cryptoList, action.payload]
                return {
                    ...state,
                    cryptoList: updateList
                }
            }
            return {
                ...state,
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