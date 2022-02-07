import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
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
    addCryptoTextContainer: {
        marginTop: 48,
    },
    addCryptoText: {
        fontWeight: '400',
        fontSize: 16,
        alignSelf: 'center',
        color: colors.primary
    }
});