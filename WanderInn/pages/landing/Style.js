import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: deviceHeight * 5 / 100,
        paddingHorizontal: deviceWidth * 5 / 100,
    },
    MainBg: {
        flex: 1,
        justifyContent: "space-between",
    },
    TextTitle: {
        marginTop: deviceHeight * 5 / 50,
        height: deviceHeight * 30 / 50,
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        // backgroundColor: 'red'
    },
    BgImg: {
        position: "absolute",
        top: deviceHeight * 20 / 80,
        left: deviceWidth * -2 / 100,
        width: "70%",
        height: 70,
        objectFit: "cover",
    },

    heading: {
        fontSize: 42,
        color: colors.white,
        lineHeight: 68,
        fontFamily: 'LatoRegular',
        textTransform: "capitalize",
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 6,
    },
    paraHighlight: {
        fontSize: 28,
        color: colors.white,
        fontFamily: 'LatoRegular',
        textTransform: "capitalize",
        lineHeight: 34.72,
        paddingRight: deviceWidth * 10 / 100,
    },

    btn: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 32,
        width: "100%",
    },
    btnText: {
        textAlign: "center",
        color: colors.white,
        fontSize: 20,
        fontFamily: 'LatoRegular',
        lineHeight: 32,
    },

});