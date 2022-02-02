import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

MaterialIcon.loadFont();

const Coin: FC = ({ crypto }: any) => {
    return (
        <View style={styles.cryptoContainer}>
            <View style={{ flexDirection: 'row' }}>
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
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcon name={crypto.icon} size={17} color={crypto.color} />
                    <Text style={{ color: (crypto.color) }}>{crypto.metric} %</Text>
                </View>
            </View>

        </View>
    );
};

export default Coin;

const styles = StyleSheet.create({
    cryptoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        paddingVertical: 10,
        marginVertical: 10,
        borderBottomColor: '#E4E8EB',
        borderBottomWidth: 1,
    },
    cryptoImage: {
        marginRight: 8,
    },
    cryptoTextName: {
        fontWeight: '600',
        fontSize: 16,
    },
    cryptoTextInitials: {
        fontWeight: '400',
        fontSize: 14,
        color: '#56626E'
    },

    cryptoValuesContainer: {
        alignItems: 'flex-end'
    }
});
