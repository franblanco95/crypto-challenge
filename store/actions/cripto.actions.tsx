import AsyncStorage from "@react-native-async-storage/async-storage";

export const ADD_CRIPTO = 'ADD_CRIPTO'
export const READ_DATA = 'READ_DATA'

export const addCripto = (coin: string) => ({
    type: ADD_CRIPTO,
    payload: coin
})

export const readData = () => {
    return async dispatch => {
        const coins = await AsyncStorage.getItem('@coin')
        if (coins !== null) {
            dispatch({
                type: READ_DATA,
                coins
            })
        }
    }
}