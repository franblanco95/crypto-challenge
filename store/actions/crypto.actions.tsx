import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { Action, Crypto } from "../../interfaces";
import { RootState } from "..";
import { Alert } from "react-native";
import { API_URL } from '@env'

export const READ_DATA = 'READ_DATA'
export const ADD_CRYPTO = 'ADD_CRYPTO'
export const UPDATE_DATA = 'UPDATE_DATA'

export const readData = () => {

    const newArray: Crypto[] = []

    return async (dispatch: Dispatch<Action>) => {
        await AsyncStorage.getItem('@coinList')
            .then(data => {
                if (data) {
                    const array = JSON.parse(data);
                    if (array.length > 0) {
                        array.map(async (item: Crypto) => {
                            const response = await fetch(`${API_URL}/v1/assets/${item.name.toLowerCase()}/metrics?fields=id,symbol,name,market_data/price_usd,market_data/percent_change_usd_last_24_hours`)
                            const result = await response.json()
                            newArray.push(result.data)
                            if (newArray.length === array.length) {
                                dispatch({
                                    type: READ_DATA,
                                    payload: newArray
                                })
                            }
                        })
                    }
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
            const result = await response.json()

            if (response.ok) {
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
                const { status: { error_message, error_code } } = result
                if (error_message === "Not Found") {
                    message = "This cryptocurrency doesn't exist"
                    Alert.alert('Error', message,
                        [
                            {
                                text: 'OK',
                            }
                        ]
                    )
                } else if (error_code === 500) {
                    message = "The server encountered an unexpected condition, please try again later"
                    Alert.alert('Error', message,
                        [
                            {
                                text: 'Retry',
                                onPress: () => addCripto(textInput)
                            }
                        ]
                    )
                }

            }
        } catch (err) {
            console.error(err)
        }
    }
}