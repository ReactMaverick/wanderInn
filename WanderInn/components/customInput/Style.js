import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 16,
        color: 'black',
        marginBottom: 5,
    },
    input: {
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: colors.inputColor
    },
    requiredTextColor: {
        color: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
});