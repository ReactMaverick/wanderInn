import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H6, p, smallS } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputLabel: {
        fontSize: H6,
        marginBottom: deviceHeight * 1 / 50,
        fontFamily: 'LatoRegular',
        color: colors.headlineColor,
    },
    input: {
        borderRadius: deviceHeight * 1 / 80,
        padding: deviceHeight * 1 / 80,
        marginBottom: deviceHeight * 1 / 50,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: colors.inputColor,
        fontFamily: 'LatoRegular',
        fontSize: p,
    },
    requiredTextColor: {
        color: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: smallS,
        position: 'absolute',
        bottom: 0,
        left: deviceWidth * 1 / 50,
    },
});