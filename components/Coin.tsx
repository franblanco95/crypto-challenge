import React, { FC } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// import Feather from 'react-native-vector-icons/Feather';

// import FeatherIcon from 'react-native-vector-icons/Feather';


// Feather.loadFont().then();


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
            {/* <FeatherIcon name="ios-person" size={30} color="#4F8EF7" />
            <FeatherIcon name="film" size={30} color="#4F8EF7" /> */}
            <View style={styles.cryptoValuesContainer}>
                <Text style={styles.cryptoTextName}>$ {crypto.value}</Text>
                <Text style={styles.cryptoTextMetric}>{crypto.metric} %</Text>
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
    cryptoTextMetric: {
        fontWeight: '600',
        color: '#0A8150',

    },
    cryptoValuesContainer: {
        alignItems: 'flex-end'
    }
});
