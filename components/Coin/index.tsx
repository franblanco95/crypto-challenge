import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

MaterialIcon.loadFont();

interface Props {
    crypto: any
}

const nf = new Intl.NumberFormat('en-US')

const Coin: FC<Props> = ({ crypto }) => (
    <View style={styles.cryptoContainer}>
        <View style={styles.rowDirection}>
            <Image
                source={{ uri: `https://messari.io/asset-images/${crypto.id}/128.png?v=2` }}
                style={styles.cryptoImage} />
            <View>
                <Text style={styles.cryptoTextName}>{crypto.name}</Text>
                <Text style={styles.cryptoTextInitials}>{crypto.symbol}</Text>
            </View>
        </View>
        <View style={styles.cryptoValuesContainer}>
            <Text style={styles.cryptoTextName}>$ {nf.format(crypto.market_data.price_usd.toFixed(2))}</Text>
            <View style={styles.rowDirection}>
                <MaterialIcon name={crypto.icon} size={17} color={crypto.color} />
                <Text style={{ color: (crypto.color) }}>{(crypto.market_data.percent_change_usd_last_24_hours).toFixed(2)} %</Text>
            </View>
        </View>
    </View>
);


export default Coin;
