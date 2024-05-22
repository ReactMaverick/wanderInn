import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H1, H3, H6, p, small, smallS } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: deviceWidth / 20,
        // height: deviceHeight,
        paddingVertical: deviceHeight / 30,
    },
    BackHeader: {
        width: deviceWidth,
        paddingVertical: deviceHeight / 20,
        justifyContent: "center",
        paddingHorizontal: deviceWidth / 20,
    },
    BackHeaderInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backHeaderBtn: {
        flex: 1,
    },
    backBtn: {
        borderRadius: deviceHeight / 20,
        height: deviceHeight / 20,
        width: deviceHeight / 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.inputColor,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 10,
        elevation: 10,
    },
    backBtnIcon: {
        fontSize: H6,
        color: colors.blueDarkColor,
    },
    backHeaderTitle: {
        flex: 8,
        alignItems: 'center',
    },
    HeaderTitle: {
        fontSize: H3,
        color: colors.blueDarkColor,
        fontFamily: 'LatoBold',
    },
    reviewRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: deviceHeight / 50,
        backgroundColor: colors.screenBg,
        borderRadius: deviceHeight / 40,
        shadowColor: colors.primary, // Assuming colors.primary is defined elsewhere for your primary color
        shadowOffset: {
            width: 0, // Remove horizontal shadow offset
            height: 5, // Set vertical shadow offset to 7px
        },
        shadowRadius: 10,
        elevation: 4,
    },
    reviewLeftBox: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: deviceHeight / 8,
        borderRadius: deviceHeight / 60,
    },
    reviewTitle: {
        fontSize: H1,
        color: colors.white,
        fontFamily: 'LatoBold',
    },
    reviewSubTitle: {
        fontSize: H6,
        color: colors.white,
        fontFamily: 'LatoBold',
    },
    reviewRightBox: {
        flex: 2.6,
        // gap: deviceHeight / 70,
    },
    reviewRightBoxInner: {
        paddingLeft: deviceHeight / 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    reviewRightBoxTitle: {
        fontSize: small,
        color: colors.borderDarkColor,
        fontFamily: 'LatoRegular',
        lineHeight: deviceHeight / 40,
    },
    reviewRightBoxProgress: {
        flexDirection: 'row',
        alignItems: 'center',
        width: deviceWidth / 3,
    },
    reviewRightProgressBar: {
        flex: 1,
        paddingHorizontal: deviceWidth / 30,
    },
    ReviewCatagoryBox: {
        backgroundColor: colors.screenBg,
        borderRadius: deviceHeight / 80,
        margin: deviceHeight / 80,
        justifyContent: 'space-between',
        borderColor: colors.lightBlue,
        borderWidth: 1,
    },
    ReviewCatagoryBoxTitle: {
        fontSize: p,
        color: colors.blueDarkColor,
        fontFamily: 'LatoBold',
        padding: deviceHeight / 60,
    },

});
