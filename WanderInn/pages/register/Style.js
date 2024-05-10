import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H1BIG, H6, p } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: deviceWidth * 5 / 100,
        paddingHorizontal: deviceWidth * 5 / 100,
        paddingTop: deviceHeight * 5 / 100,
        minHeight: deviceHeight,
    },
    InputContainer: {
        alignItems: 'center',
    },
    titleContainer: {
        marginBottom: 40,
        width: deviceWidth * 0.75,
        alignItems: "center",
    },
    headerText: {
        fontSize: H1BIG,
        fontFamily: 'LatoBold',
        lineHeight: 51.2,
        marginBottom: 5,
        color: colors.headlineColor,
    },
    headerSubText: {
        fontSize: p,
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
        fontSize: H6,
        fontFamily: 'LatoRegular',
        lineHeight: 20.32,
        textDecorationColor: colors.primary,
        textDecorationLine: 'underline',
    },
    SocialMediaLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 20,
    },
    SocoalButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.borderLightColor,
        borderWidth: 1,
        height: deviceHeight * 1 / 13,
        width: deviceHeight * 1 / 13,
        borderRadius: deviceWidth * 1,
    },
    socialMediaIcon: {
        width: deviceHeight * 1 / 18,
        height: deviceHeight * 1 / 18,
        objectFit: 'cover',
    },
});