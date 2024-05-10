import { colors } from "@/constants/colors";
import { deviceHeight } from "@/constants/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 18,
        marginBottom: 8,
        fontFamily: 'LatoRegular',
    },
    input: {
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: colors.inputColor,
        fontFamily: 'LatoRegular',
    },
    requiredTextColor: {
        color: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
});