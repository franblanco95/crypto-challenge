import React, { FC, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { addCripto } from '../../store/actions/crypto.actions';
import colors from '../../assets/colors/colors';

interface Props {
    navigation: any,
}

const AddCryptoScreen: FC<Props> = ({ navigation }) => {

    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState<string>('');
    const [focus, setFocus] = useState<boolean>(false)

    const handlerAddCoin = () => {
        dispatch(addCripto(textInput))
        navigation.navigate('Home')
    }

    const handleFocus = () => setFocus(true)

    return (
        <SafeAreaView>
            <View style={styles.addCryptoContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.backText}>{`< Back to list`}</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Text style={styles.addCryptoText}>Add a Cryptocurrency</Text>
                    <TextInput
                        onChangeText={setTextInput}
                        onFocus={handleFocus}
                        value={textInput}
                        style={[styles.input, { borderColor: focus ? colors.inputoff : colors.input }]}
                        placeholder='Use a name or ticker symbol...'
                    />
                    <TouchableOpacity
                        onPress={handlerAddCoin}
                        style={styles.addButton}>
                        <Text style={textInput === '' ? styles.addTextOff : styles.addText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default AddCryptoScreen;
