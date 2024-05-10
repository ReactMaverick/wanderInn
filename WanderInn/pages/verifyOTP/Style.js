import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H1BIG, H3, H5, H6, p } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: deviceWidth * 5 / 100,
        paddingHorizontal: deviceWidth * 5 / 100,
        backgroundColor: colors.screenBg,
        paddingTop: deviceHeight * 0.1,
        minHeight: deviceHeight
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
    loginLinkContainer: {
        marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 5,
    },
    orLoginWithText: {
        color: colors.placeholderColor,
        fontSize: p,
        textAlign: 'center',
        marginHorizontal: deviceHeight * 1 / 50,
    },
    loginLink: {
        color: colors.primary,
        fontSize: H6,
        fontFamily: 'LatoRegular',
        lineHeight: 20.32,
        textDecorationColor: colors.primary,
        textDecorationLine: 'underline',
    },
    InputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: deviceWidth * 0.90,
        // backgroundColor: 'red',
    },
    otpBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: deviceHeight * 1 / 13,
        height: deviceHeight * 1 / 13,
        backgroundColor: colors.inputColor,
        borderRadius: deviceHeight * 1 / 50,
        shadowColor: '#1E335008',
        shadowOffset: {
            width: 1,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 6.5,
    },
});