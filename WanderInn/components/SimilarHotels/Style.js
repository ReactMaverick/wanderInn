import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H4, H5, H6, p, small, smallS } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    HotelCard: {
        backgroundColor: colors.white,
        borderRadius: deviceHeight / 40,
        marginVertical: deviceHeight / 50,
        marginHorizontal: deviceWidth / 25,
        shadowColor: colors.primary,
        overflow: 'hidden',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 10,
        elevation: 10,
    },
    HotelCardImgBox: {
        width: '100%',
        height: deviceHeight / 4,
        position: 'relative',
    },
    HotelCardImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    HeartIconBox: {
        height: deviceHeight / 30,
        width: deviceHeight / 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.inputColor,
        borderRadius: deviceHeight / 40,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 10,
        elevation: 10,
        position: 'absolute',
        top: deviceHeight / 100,
        right: deviceWidth / 20 - 5,
        zIndex: 1,
    },
    HeartIcon: {
        fontSize: p,
        color: colors.secondary,
    },
    CatagoryBox: {
        position: 'absolute',
        top: deviceHeight / 100,
        left: deviceWidth / 20 - 5,
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
    HotelCardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "auto",
        marginLeft: deviceWidth / 30,
        marginTop: deviceHeight / 40,
        marginRight: deviceWidth / 30,
        paddingBottom: deviceHeight / 30,
    },
    HotelCardContentNext: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "auto",
        marginTop: deviceHeight / 50 - 5,
        marginLeft: deviceWidth / 30,
        marginRight: deviceWidth / 30,
        marginBottom: deviceHeight / 40,
    },

    HotelCardContentLeft: {
        width: deviceWidth / 2.4,
        justifyContent: 'space-between',
        gap: deviceHeight / 70 - 2,
    },
    HotelCardContentLeftTop: {
        // marginBottom: deviceHeight / 100,
        gap: deviceHeight / 100 - 2,
    },
    HotelCardTitle: {
        fontSize: H5,
        color: colors.headlineColor,
        fontFamily: 'LatoBold',
        lineHeight: deviceHeight / 40,
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
        // backgroundColor: colors.inputColor,
        // paddingHorizontal: deviceWidth / 55,
        // paddingVertical: deviceHeight / 100 - 5,
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
        width: deviceWidth / 4.5,
        gap: deviceHeight / 70,
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
    HotelCardTop: {
        gap: deviceHeight / 100 - 2,
    },
    HotelCardBottom: {
        gap: deviceHeight / 100 - 2,
    },
    HotelCardButton: {
        backgroundColor: colors.primary,
        paddingHorizontal: deviceHeight / 100 - 2,
        paddingVertical: deviceHeight / 60,
        borderRadius: deviceHeight / 50 - 5,
        width: '100%',
    },
    HotelCardButtonText: {
        color: colors.white,
        fontSize: H6,
        textAlign: 'center',
        lineHeight: deviceHeight / 40,
        fontFamily: 'LatoBold',
    },
    HotelCardButton2: {
        backgroundColor: colors.inputColor,
        paddingHorizontal: deviceHeight / 100 - 2,
        paddingVertical: deviceHeight / 60,
        borderRadius: deviceHeight / 50 - 5,
        width: '100%',
    },
    HotelCardButton2Text: {
        color: colors.darkColor,
        fontSize: H6,
        textAlign: 'center',
        lineHeight: deviceHeight / 40,
        fontFamily: 'LatoBold',
    },
    HotelCardSubTitle: {
        fontSize: p,
        color: colors.gray,
        fontFamily: 'LatoRegular',
        lineHeight: deviceHeight / 40,
    },
    HotelCardLeft: {
        width: deviceWidth / 2.5,
        gap: deviceHeight / 50,
    },
    HotelCardRight: {
        width: deviceWidth / 2.5,
        gap: deviceHeight / 50,
    },


});