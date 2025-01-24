import { deviceHeight, deviceWidth } from "../../constants/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",
    },

    LogoImg: {
        height: deviceHeight / 4,
        width: deviceWidth / 3 * 2,
        resizeMode: 'contain',
        textAlign: 'center',
        bottom: "0",
    },
});