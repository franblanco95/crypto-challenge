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

export const addCripto = (textInput: string) => {
    return async (dispatch): Dispatch<Action> => {
        try {
            const response = await fetch(`https://data.messari.io/api/v1/assets/${textInput.toLowerCase()}/metrics?fields=id,symbol,name,market_data/price_usd,market_data/percent_change_usd_last_24_hours`)
            const result = await response.json()
            dispatch({
                type: ADD_CRYPTO,
                payload: result.data
            })
        } catch (err) {
            console.error(err)
        }
    }
}

// export const addCripto = (textInput: string) => {
//     return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
//         const { cryptoList } = getState().cripto

//         const newCrypto: Crypto | undefined = cryptos.find(({ name, initials }) => {
//             const addedCrypto: Crypto | undefined = cryptoList.find(({ name, initials }) =>
//                 (textInput === name || textInput === initials)
//             )
//             return !addedCrypto && (name === textInput || initials === textInput)
//         })
//         if (newCrypto) {
//             dispatch({
//                 type: ADD_CRYPTO,
//                 payload: newCrypto
//             })

//             const updatedList = [...cryptoList, newCrypto]
//             try {
//                 await AsyncStorage.setItem('@coinList', JSON.stringify(updatedList))
//             } catch (e) {
//                 console.error(e)
//             }
//         }
//     }
// }
