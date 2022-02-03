import { Action, Cripto } from "../../interfaces/types";
import { READ_DATA } from "../actions/cripto.actions"

type State = {
    list2: Cripto[],
}

const initialState = {
    list2: []
}

export const CriptoReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case READ_DATA:
            return {
                ...state,
                list2: action.payload
            }

        default:
            return state;
    }

}