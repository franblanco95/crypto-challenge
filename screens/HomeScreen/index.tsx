import React, { FC, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userPhoto } from '../../assets/images';
import Coin from '../../components/Coin';
import { Crypto } from '../../interfaces/types';
import { Routes } from '../../navigation/Routes';
import { RootState } from '../../store';
import { readData } from '../../store/actions/crypto.actions';
import styles from './styles';

interface Props {
  navigation: any,
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch()
  const cryptoList = useSelector((state: RootState) => state.cripto.cryptoList)

  const orderList = (a: Crypto, b: Crypto) => a.name.localeCompare(b.name)

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(readData())
    }, 15000)
    return () => clearInterval(interval)

  }, [cryptoList])

  const renderItem: ListRenderItem<Crypto> = ({ item }) => <Coin crypto={item} />

  return (
    <View style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image source={userPhoto} />
      </View>
      <View>
        <FlatList
          data={cryptoList.sort(orderList)}
          keyExtractor={item => String(item.id)}
          renderItem={renderItem}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.ADD_CRYPTO)}
          style={styles.addCryptoTextContainer}
        >
          <Text style={styles.addCryptoText}>+ Add a Cryptocurrency</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
