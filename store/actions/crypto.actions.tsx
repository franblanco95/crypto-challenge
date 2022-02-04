import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { Action } from "../../interfaces";

export const READ_DATA = 'READ_DATA'

export const readData = () => {
    return async (dispatch: Dispatch<Action>) => {
        await AsyncStorage.getItem('@coin')
            .then(data => {
                if (data) {
                    const array = JSON.parse(data);
                    dispatch({
                        type: READ_DATA,
                        payload: array
                    })
                }
            })
            .catch(err => { throw (err) })

    }
}

