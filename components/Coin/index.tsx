import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

MaterialIcon.loadFont();

interface Props {
    crypto: any
}

const Coin: FC<Props> = ({ crypto }) => (
    <View style={styles.cryptoContainer}>
        <View style={styles.rowDirection}>
            <Image
                source={crypto.image}
                style={styles.cryptoImage} />
            <View>
                <Text style={styles.cryptoTextName}>{crypto.name}</Text>
                <Text style={styles.cryptoTextInitials}>{crypto.initials}</Text>
            </View>
        </View>
        <View style={styles.cryptoValuesContainer}>
            <Text style={styles.cryptoTextName}>$ {crypto.value}</Text>
            <View style={styles.rowDirection}>
                <MaterialIcon name={crypto.icon} size={17} color={crypto.color} />
                <Text style={{ color: (crypto.color) }}>{crypto.metric} %</Text>
            </View>
        </View>
    </View>
);


export default Coin;