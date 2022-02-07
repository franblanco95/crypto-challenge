import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    addCryptoContainer: {
        paddingHorizontal: 24,
    },
    backText: {
        fontWeight: '400',
        fontSize: 16,
        color: colors.primary,
    },
    inputContainer: {
        marginTop: 200,
        justifyContent: 'center',
    },
    addCryptoText: {
        fontWeight: '700',
        color: colors.dark,
        fontSize: 24,
        marginBottom: 24,
    },
    input: {
        paddingVertical: 16,
        paddingLeft: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: colors.input,
        fontSize: 16,
    },
    addButton: {
        backgroundColor: colors.buttonbkg,
        alignItems: 'center',
        justifyContent: 'center',
        width: 155,
        height: 48,
        borderRadius: 4,
        alignSelf: 'flex-end',
        marginTop: 16,
    },
    addText: {
        fontWeight: '600',
        fontSize: 18,
    }
});
