import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Button } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../assets/colors/colors';
import Coin from '../components/Coin';
import { Crypto } from '../interfaces/types';
import { RootState } from '../store';

const HomeScreen: FC = ({ navigation }: any) => {

  const list = useSelector((state: RootState) => state.cripto.cryptoList)

  return (
    <ScrollView style={styles.homeContainer}>

      {/* Header */}

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image source={require('../assets/images/girl.png')} />
      </View>

      {/* Crypto Coins */}

      <View>
        {list?.map((item: Crypto) => (
          <Coin key={item.id} crypto={item} />

        ))}
        <TouchableOpacity
          onPress={() => console.log('Futura Screen')}
          style={{ marginTop: 48 }}>
          <Text style={styles.addCryptoText}>+ Add a Cryptocurrency</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    height: 130,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  headerTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.white,
    lineHeight: 28,
  },
  addCryptoText: {
    fontWeight: '400',
    fontSize: 16,
    alignSelf: 'center',
    color: '#385775'
  }
});
