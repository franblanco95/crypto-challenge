import { crypto } from "../../constants/crypto";
import { Cripto } from "../../interfaces/types";
import { ADD_CRIPTO, READ_DATA } from "../actions/cripto.actions"

const initialState = {
    list: crypto,
    list2: []
}

type Action = {
    type: string,
    payload?: string,
}

export const CriptoReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case ADD_CRIPTO:
            const list2 = state.list2
            list2.push(state.list.find((coin) => coin.name === action.payload || coin.initials === action.payload) as Cripto)
            console.log(list2);
            return {
                ...state,
                list2
            }
        case READ_DATA:
            return {
                ...state,
                list2: action.coins
            }

        default:
            return state;
    }

}