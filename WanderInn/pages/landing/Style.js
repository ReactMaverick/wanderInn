import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 50,
        paddingHorizontal: 20,
    },
    TextTitle: {
        marginTop: 100,
        height: 396,
        flexDirection: "column",
        justifyContent: "center",
    },
    heading: {
        fontSize: 42,
        color: colors.headlineColor,
        lineHeight: 68,
        fontFamily: "LatoBlack",
        textTransform: "capitalize",
    },
});