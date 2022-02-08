import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "react";
import { cryptos } from "../../constants/crypto";
import { Action, Crypto } from "../../interfaces";
import { RootState } from "..";

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

export const fetchData = async () => {
    const response = await fetch('https://data.messari.io/api/v2/assets?fields=id,name,symbol,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours')
    const result = await response.json()
    console.log(result.data);
}

export const addCripto = (textInput: string) => {
    return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
        const { cryptoList } = getState().cripto

        const newCrypto: Crypto | undefined = cryptos.find(({ name, initials }) => {
            const addedCrypto: Crypto | undefined = cryptoList.find(({ name, initials }) =>
                (textInput === name || textInput === initials)
            )
            return !addedCrypto && (name === textInput || initials === textInput)
        })
        if (newCrypto) {
            dispatch({
                type: ADD_CRYPTO,
                payload: newCrypto
            })

            const updatedList = [...cryptoList, newCrypto]
            try {
                await AsyncStorage.setItem('@coinList', JSON.stringify(updatedList))
            } catch (e) {
                console.error(e)
            }
        }
    }
}
