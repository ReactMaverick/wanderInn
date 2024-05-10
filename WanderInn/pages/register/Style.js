import { colors } from "@/constants/colors";
import { deviceWidth } from "@/constants/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: deviceWidth * 5 / 100,
        backgroundColor: colors.screenBg,
    },
    titleContainer: {
        marginBottom: 40,
        width: deviceWidth * 0.75,
        alignItems: "center",
    },
    headerText: {
        fontSize: 32,
        fontFamily: 'LatoBold',
        lineHeight: 51.2,
        marginBottom: 10,
        color: colors.headlineColor,
    },
    headerSubText: {
        fontSize: 16,
        color: colors.gray,
        textAlign: 'center',
        fontFamily: 'LatoRegular',
        lineHeight: 20.32,
    },
    formContainer: {
        width: deviceWidth * 5 / 5.6,
    },
    registerButton: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    registerButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    orLoginWithText: {
        color: colors.gray,
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    orLoginWith: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    orLoginWithLine: {
        height: 1,
        width: '20%',
        backgroundColor: colors.borderDarkColor,
    },
    loginLinkContainer: {
        marginTop: 40,
    },
    loginLink: {
        color: colors.primary,
        fontSize: 16,
        textAlign: 'center',
    }
});