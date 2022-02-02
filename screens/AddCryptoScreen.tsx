import React, { FC } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Touchable } from 'react-native';
import colors from '../assets/colors/colors';

const AddCryptoScreen: FC = ({ navigation }: any) => {
  return (
    <View style={styles.addCryptoContainer}>

      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.backText}>Back to list</Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Text style={styles.addCryptoText}>Add a Cryptocurrency</Text>
            <TextInput
              style={styles.input}
              placeholder='Use a name or ticker symbol...'
            />

          </View>

          <TouchableOpacity
            onPress={() => console.log('Buenas')}
            style={styles.addButton}>
            <Text style={styles.addText}>Add</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddCryptoScreen;

const styles = StyleSheet.create({
  addCryptoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  backText: {
    fontWeight: '400',
    fontSize: 16,
    color: colors.primary,
  },
  inputContainer: {


  },
  addCryptoText: {
    fontWeight: '700',
    color: colors.dark,
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    paddingVertical: 16,
    paddingLeft: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#B7C0C6',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#FBD24D',
    alignItems: 'center',
    justifyContent: 'center',
    width: 155,
    height: 48,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginTop: 16,
  },
  addText: {
    fontWeight: '600',
    fontSize: 18,
  }
});
