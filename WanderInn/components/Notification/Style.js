import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H4, H5, H6, p, small, smallS } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    notificationBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-end',
    },
    notificationBoxInner: {
        flexDirection: "row",
        alignItems: 'center',
    },
    notificationImage: {
        width: deviceHeight / 12,
        height: deviceHeight / 12,
        borderRadius: deviceHeight / 24,
    },
    notificationTextBox: {
        marginLeft: deviceWidth / 20,
        width: deviceWidth / 2.5,
        // backgroundColor: colors.primary,
    },
    notificationTitle: {
        color: colors.blueDarkColor,
        fontSize: p,
        fontFamily: 'LatoBold',
        lineHeight: deviceHeight / 35,
    },

    notificationText: {
        color: colors.darkColor,
        fontSize: small,
        fontFamily: 'LatoRegular',
        lineHeight: deviceHeight / 30,
    },
    ViewBtn: {
        paddingHorizontal: deviceWidth / 20,
        paddingVertical: deviceHeight / 60 / 2,
    },
    ViewBtnText: {
        color: colors.primary,
        fontSize: p,
        fontFamily: 'LatoBold',
        lineHeight: deviceHeight / 30,
        textAlign: "center",
    },
});