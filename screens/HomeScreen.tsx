import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen: FC = ({navigation}) => {
  return (
    <SafeAreaView>

      <Text>Hola soy HomeScreen</Text>
      <TouchableOpacity
      onPress={() => navigation.navigate('AddCrypto')}>
        <Text>Add crypto</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
