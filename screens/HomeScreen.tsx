import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import colors from '../assets/colors/colors';
import Coin from '../components/Coin';
import { crypto } from '../constants/crypto';

const HomeScreen: FC = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.homeContainer}>

      {/* Header */}

      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image source={require('../assets/images/girl.png')} />
      </View>

      {/* Crypto Coins */}

      <View>
        {crypto.map((item) => (
          <Coin key={item.id} crypto={item} />

        ))}
        <TouchableOpacity
          onPress={() => navigation.navigate('AddCrypto')}
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
