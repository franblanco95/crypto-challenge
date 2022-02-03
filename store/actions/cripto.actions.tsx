import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { Action, Cripto } from "../../interfaces/types";

export const READ_DATA = 'READ_DATA'

export const readData = () => {
    return async (dispatch: Dispatch<Action>) => {
        await AsyncStorage.getItem('@coin').then(data => {
            if (data !== null) {
                const array = JSON.parse(data);
                console.log(array);
                console.log(`Estoy en async storage ${array}`);

                dispatch({
                    type: READ_DATA,
                    payload: array
                })
            } else {
                console.log('No hay nada en async storage');
            }
        })

    }
}

