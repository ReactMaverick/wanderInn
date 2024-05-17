import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H4, H5, H6, p } from "@/constants/fontConstants";
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
        paddingHorizontal: deviceWidth / 30,
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
    ProfileBoxOuter: {
        backgroundColor: colors.screenBg,
        borderRadius: deviceHeight / 40,
        padding: deviceWidth / 20,
        marginVertical: deviceHeight / 50,
        minHeight: deviceHeight / 4.5,
        shadowColor: colors.primary, // Assuming colors.primary is defined elsewhere for your primary color
        shadowOffset: {
            width: 0, // Remove horizontal shadow offset
            height: 7, // Set vertical shadow offset to 7px
        },
        shadowRadius: 24,
        elevation: 12,
        justifyContent: 'space-between',
    },
    ProfileBoxTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ProfileBoxTopLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: deviceWidth / 30,
    },
    ProfileBoxTopRight: {
        flexDirection: 'row',
    },
    ProfileBoxBottom: {
        flexDirection: 'row',
    },
    ProfileImage: {
        width: deviceHeight / 12,
        height: deviceHeight / 12,
        borderRadius: deviceHeight / 20,
    },
    ProfileName: {
        fontSize: H5,
        color: colors.headlineColor,
        lineHeight: deviceHeight / 30,
        fontFamily: 'LatoBold',
    },
    ProfileEmail: {
        fontSize: p,
        color: colors.darkColor,
        lineHeight: deviceHeight / 30,
        fontFamily: 'LatoRegular',
    },
    EditProfileBtn: {
        // backgroundColor: colors.primary,
        height: deviceHeight / 20,
        width: deviceHeight / 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: deviceHeight / 40,
    },
    EditProfileIcon: {
        color: colors.primary,
        fontSize: H4,
        lineHeight: deviceHeight / 20,
        fontFamily: 'LatoBold',
    },
    ProgressBarText: {
        fontSize: p,
        color: colors.borderDarkColor,
        lineHeight: deviceHeight / 30,
        fontFamily: 'LatoRegular',
    },
    ProgressBarArea: {
        width: '100%',

    },
    ProgressBarAdd: {
        fontSize: p,
        color: colors.borderDarkColor,
        lineHeight: deviceHeight / 30,
        fontFamily: 'LatoRegular',
        textAlign: 'right',
    },

    ProgressBarAreaText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: deviceWidth / 50,
    },
    IconListBox: {
        backgroundColor: colors.screenBg,
        borderRadius: deviceHeight / 40,
        marginVertical: deviceHeight / 50,
        minHeight: deviceHeight / 4.5,
        shadowColor: colors.primary, // Assuming colors.primary is defined elsewhere for your primary color
        shadowOffset: {
            width: 0, // Remove horizontal shadow offset
            height: 7, // Set vertical shadow offset to 7px
        },
        shadowRadius: 24,
        elevation: 12,
        justifyContent: 'space-between',
    },
    IconListBoxUL: {
        justifyContent: 'space-between',
        paddingVertical: deviceHeight / 70,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderLightColor,
    },
    IconListBoxULnew: {
        justifyContent: 'space-between',
        paddingVertical: deviceHeight / 70,
    },
    IconListItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: deviceWidth / 30,
        paddingHorizontal: deviceWidth / 20,
        paddingVertical: deviceHeight / 40 - 3,
    },
    IconListIcon: {
        height: deviceHeight / 30,
        width: deviceHeight / 30,
    },
    IconListText: {
        fontSize: H6,
        lineHeight: deviceHeight / 30,
        fontFamily: 'LatoRegular',
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
    IconListBox1: {
        backgroundColor: colors.screenBg,
        borderRadius: deviceHeight / 40,
        marginVertical: deviceHeight / 50,
        shadowColor: colors.primary, // Assuming colors.primary is defined elsewhere for your primary color
        shadowOffset: {
            width: 0, // Remove horizontal shadow offset
            height: 7, // Set vertical shadow offset to 7px
        },
        shadowRadius: 24,
        elevation: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    IconListItem1: {
        alignItems: 'center',
        gap: deviceWidth / 30,
        paddingHorizontal: deviceWidth / 20,
        paddingVertical: deviceHeight / 40 - 3,
    },
    RegionImage: {
        width: deviceHeight / 25,
        height: deviceHeight / 35,
        objectFit: 'contain',
    },
});