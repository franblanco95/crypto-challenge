import React, { FC, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Coin from '../../components/Coin';
import { Crypto } from '../../interfaces/types';
import { RootState } from '../../store';
import { readData } from '../../store/actions/crypto.actions';
import styles from './styles';
import userPhoto from '../../assets/images/girl.png'

interface Props {
  navigation: any,
}

const HomeScreen: FC<Props> = ({ navigation }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(readData())
  }, [])

  const list = useSelector((state: RootState) => state.cripto.cryptoList)

  const renderItem: ListRenderItem<Crypto> = ({ item }) => <Coin crypto={item} />

  return (
    <View style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>CryptoTracker Pro</Text>
        <Image source={userPhoto} />
      </View>
      <View>
        <FlatList
          data={list}
          keyExtractor={item => item.name}
          renderItem={renderItem}
        />
        <TouchableOpacity
          onPress={() => console.log('Futura Screen')}
          style={styles.addCryptoTextContainer}>
          <Text style={styles.addCryptoText}>+ Add a Cryptocurrency</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;


