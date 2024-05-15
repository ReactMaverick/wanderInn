import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H4, H5, H6, p, small, smallS } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    HotelCard: {
        backgroundColor: colors.screenBg,
        borderRadius: deviceHeight / 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: deviceHeight / 60 - 5,
        shadowColor: colors.primary,
        padding: deviceWidth / 40,
        overflow: 'hidden',
        borderColor: colors.lightBlue,
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 10,
        elevation: 10,
        margin: deviceWidth / 35,
    },
    HotelCardImgBox: {
        position: 'relative',
        height: deviceHeight / 9,
        overflow: 'hidden',
        width: deviceWidth / 3.4,
        borderRadius: deviceHeight / 50,
    },
    CatagoryBox: {
        position: 'absolute',
        top: deviceHeight / 100,
        right: deviceWidth / 50,
        backgroundColor: colors.BGYellowColor,
        paddingHorizontal: deviceWidth / 50,
        paddingVertical: deviceHeight / 100 - 5,
        borderRadius: deviceHeight / 50 - 10,
        zIndex: 1,
    },
    CatagoryText: {
        color: colors.white,
        fontSize: smallS,
    },
    HotelCardImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    HotelCardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "auto",
        paddingLeft: deviceWidth / 45,
        paddingVertical: deviceHeight / 100 - 5,
        paddingRight: deviceWidth / 50,
    },
    HotelCardContentLeft: {
        width: deviceWidth / 2.4,
        justifyContent: 'space-between',
    },
    HotelCardContentLeftTop: {
        // marginBottom: deviceHeight / 100,
        gap: deviceHeight / 100 - 5,
    },
    HotelCardTitle: {
        fontSize: H5,
        color: colors.headlineColor,
        fontFamily: 'LatoBold',
    },
    HotelLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    HotelLocationIcon: {
        fontSize: small,
        color: colors.gray,
    },
    HotelLocationText: {
        fontSize: small,
        color: colors.gray,
        lineHeight: deviceHeight / 40,
        fontFamily: 'LatoRegular',
        flexShrink: 1,
    },
    HotelCardContentLeftBottom: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: deviceHeight / 70 - 5,
    },
    ReviewBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: deviceWidth / 100,
    },
    ReviewText: {
        fontSize: H6,
        color: colors.gray,
        fontFamily: 'LatoBold',
    },
    ReviewStar: {
        fontSize: small,
        color: colors.secondary,
    },
    HotelCardLocation: {
        fontSize: smallS,
        color: colors.gray,
        fontFamily: 'LatoRegular',
    },
    HotelCardContentRight: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: deviceWidth / 7,
    },
    HeartIconBox: {
        padding: deviceWidth / 50,
        backgroundColor: colors.inputColor,
        borderRadius: deviceHeight / 40,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 10,
        elevation: 10,
    },
    HeartIcon: {
        fontSize: p,
        color: colors.secondary,
    },
    HotelCardReviewbox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: deviceWidth / 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HotelCardReview: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    HotelCardPAckPrice: {
        fontSize: H5,
        color: colors.primary,
        fontFamily: 'LatoBold',
        textAlign: 'right',
    },
    HotelCardPAckTime: {
        fontSize: small,
        color: colors.gray,
        fontFamily: 'LatoRegular',
        textAlign: 'right',
    },
    HotelCardPAckAge: {

    },


});