import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { crypto } from "../../constants/crypto";
import { Action } from "../../interfaces";


export const READ_DATA = 'READ_DATA'
export const ADD_CRYPTO = 'ADD_CRYPTO'

export const readData = () => {
    return async (dispatch: Dispatch<Action>) => {
        await AsyncStorage.getItem('@coinList')
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

export const addCripto = (textInput: string) => {
    return async (dispatch: Dispatch<Action>) => {
        crypto.map(cryptos => {
            if (textInput === cryptos.name || textInput === cryptos.initials) {
                const moneda = cryptos
                dispatch({
                    type: ADD_CRYPTO,
                    payload: moneda
                })
            } else {
                console.log('else');
            }
        })
    }
}

try {
    await AsyncStorage.setItem('@coinList', JSON.stringify(value))
    console.log('Se agrego a Async Storage');
} catch (e) {
    console.log(e);
    console.log('Hay un error');
}
}
