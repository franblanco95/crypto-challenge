import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    cryptoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        paddingVertical: 10,
        marginVertical: 10,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
    },
    rowDirection: {
        flexDirection: 'row'
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
        color: colors.text,
    },

    cryptoValuesContainer: {
        alignItems: 'flex-end'
    }
});
