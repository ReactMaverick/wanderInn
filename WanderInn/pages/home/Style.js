import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H5, p } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        paddingHorizontal: deviceWidth / 30,
    },
    LocSearchBox: {
        position: 'relative',
        paddingHorizontal: deviceWidth / 20,
    },
    LocBoxDevider: {
        height: deviceHeight / 8,
        width: deviceWidth,
        backgroundColor: colors.BGColor,
        borderBottomEndRadius: deviceHeight / 10,
        borderBottomStartRadius: deviceHeight / 10,
        paddingHorizontal: deviceWidth / 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
    },
    TitleRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: deviceHeight / 60,
    },
    Title: {
        fontSize: H5,
        fontFamily: 'LatoBold',
        color: colors.blueDarkColor,
    },
    ViewAll: {
        fontSize: p,
        fontFamily: 'LatoRegular',
        color: colors.blueDarkColor,
    },
    PopularHotelsRow: {
        flex: 1,
        justifyContent: "space-between",
        marginBottom: deviceHeight / 50,
    },
});