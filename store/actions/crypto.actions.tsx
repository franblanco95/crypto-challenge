import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { Action, Crypto } from "../../interfaces";
import { RootState } from "..";
import { Alert } from "react-native";
import { API_URL } from '@env'

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
            .catch(err => { console.error(err) })
    }
}

export const addCripto = (textInput: string) => {
    return async (dispatch: Dispatch<Action>, getState: () => RootState) => {

        const { cryptoList } = getState().cripto

        try {
            const response = await fetch(`${API_URL}/v1/assets/${textInput.toLowerCase()}/metrics?fields=id,symbol,name,market_data/price_usd,market_data/percent_change_usd_last_24_hours`)

            if (response.ok) {
                const result = await response.json()

                const addedCrypto: Crypto | undefined = cryptoList.find(({ name, symbol }) =>
                    (textInput.toLowerCase() === name.toLowerCase() || textInput.toLowerCase() === symbol.toLowerCase())
                )
                if (addedCrypto) {
                    Alert.alert('Error', 'This cryptocurrency is already added',
                        [
                            {
                                text: 'Ok',
                            }
                        ]
                    )
                } else {
                    dispatch({
                        type: ADD_CRYPTO,
                        payload: result.data
                    })
                    const updatedList = [...cryptoList, result.data]
                    try {
                        await AsyncStorage.setItem('@coinList', JSON.stringify(updatedList))
                    } catch (e) {
                        console.error(e)
                    }
                }

            } else {
                let message = "There was a problem"
                const errorResponse = await response.json()
                const errorID = errorResponse.status.error_message
                if (errorID === "Not Found") message = "This cryptocurrency doesn't exist"
                Alert.alert('Error', message,
                    [
                        {
                            text: 'Retry'
                        }
                    ]
                )

            }
        } catch (err) {
            console.error(err)
        }
    }
}
