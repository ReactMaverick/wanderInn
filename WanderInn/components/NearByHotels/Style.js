import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H6, p, small } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    HotelCard: {
        backgroundColor: colors.white,
        borderRadius: deviceHeight / 40,
        padding: deviceWidth / 35,
        marginVertical: deviceHeight / 50,
        shadowColor: colors.primary,
        borderColor: colors.borderDarkColor,
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 10,
        elevation: 10,
    },
    HotelCardImgBox: {
        width: deviceWidth / 1.5,
        height: deviceHeight / 4,
        borderRadius: deviceHeight / 50,
        overflow: 'hidden',
        position: 'relative',
    },
    HotelCardImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    CatagoryBox: {
        backgroundColor: colors.primary,
        paddingHorizontal: deviceWidth / 20,
        paddingVertical: deviceHeight / 70 - 5,
        borderRadius: 5,
        position: 'absolute',
        top: deviceHeight / 50 - 5,
        left: deviceWidth / 50,
        zIndex: 1,
    },
    CatagoryText: {
        color: colors.white,
        fontSize: small,
        lineHeight: deviceHeight / 35,
    },
    HeartIconBox: {
        position: 'absolute',
        top: deviceHeight / 50 - 5,
        right: deviceWidth / 50,
        zIndex: 1,
        backgroundColor: colors.white,
        borderRadius: deviceHeight / 50,
        height: deviceHeight / 25,
        width: deviceHeight / 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeartIcon: {
        fontSize: H6,
        color: colors.secondary,
    },




});