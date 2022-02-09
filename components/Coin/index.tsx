import React, { FC, useState } from 'react';
import { Text, View, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/colors/colors';
import { Crypto } from '../../interfaces';
import styles from './styles';
import { API_IMG } from '@env'

MaterialIcon.loadFont();

interface Props {
    crypto: Crypto
}

const nf = new Intl.NumberFormat('en-US')

const Coin: FC<Props> = ({ crypto }) => {

    const { name, symbol, market_data: { price_usd, percent_change_usd_last_24_hours } } = crypto

    const priceFormat = (price_usd: number) => new Intl.NumberFormat('en-US').format(price_usd.toFixed(2))
    const pctgFormat = (pctg: number) => Math.abs(pctg).toFixed(2)

    return (
        <View style={styles.cryptoContainer}>
            <View style={styles.rowDirection}>
                <Image
                    source={{ uri: `${API_IMG}${crypto.id}/128.png?v=2` }}
                    style={styles.cryptoImage} />
                <View>
                    <Text style={styles.cryptoTextName}>{name}</Text>
                    <Text style={styles.cryptoTextInitials}>{symbol}</Text>
                </View>
            </View>
            <View style={styles.cryptoValuesContainer}>
                <Text style={styles.cryptoTextName}>$ {priceFormat(price_usd)}</Text>
                <View style={styles.rowDirection}>
                    <MaterialIcon
                        name={percent_change_usd_last_24_hours >= 0 ? "north-east" : "south-west"}
                        size={17}
                        color={percent_change_usd_last_24_hours >= 0 ? colors.positive : colors.negative}
                    />
                    <Text
                        style={(percent_change_usd_last_24_hours <= 0) ? { color: colors.negative } : { color: colors.positive }}
                    >{pctgFormat(percent_change_usd_last_24_hours)} %</Text>
                </View>
            </View>
        </View >
    )
};


export default Coin;
