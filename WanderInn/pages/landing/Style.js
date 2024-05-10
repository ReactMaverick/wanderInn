import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50,
        paddingHorizontal: 20,
    },
    MainBg: {
        flex: 1,
        justifyContent: "space-between",
    },
    TextTitle: {
        marginTop: 100,
        height: 396,
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
    },
    BgImg: {
        position: "absolute",
        top: "41%",
        left: -10,
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
    },
    BottomBox: {

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