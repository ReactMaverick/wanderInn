import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H1, H3, H5, H6, p, small, smallS } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: deviceWidth / 20,
        paddingVertical: deviceHeight / 30,
    },
    BackHeader: {
        width: deviceWidth,
        paddingBottom: deviceHeight / 40,
        paddingTop: deviceHeight / 20,
        justifyContent: "center",
        paddingHorizontal: deviceWidth / 20,
    },
    BackHeaderInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backHeaderBtn: {
        flex: 1,
    },
    backBtn: {
        borderRadius: deviceHeight / 20,
        height: deviceHeight / 20,
        width: deviceHeight / 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.inputColor,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 10,
        elevation: 10,
    },
    backBtnIcon: {
        fontSize: H6,
        color: colors.blueDarkColor,
    },
    backHeaderTitle: {
        flex: 8,
        alignItems: 'center',
    },
    HeaderTitle: {
        fontSize: H3,
        color: colors.blueDarkColor,
        fontFamily: 'LatoBold',
    },
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
        elevation: 5,
    },
    HotelCardImgBox: {
        flex: 1,
        position: 'relative',
        height: deviceHeight / 7,
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
        flex: 2,
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
        gap: deviceHeight / 100 - 5,
    },
    HotelCardTitle: {
        fontSize: H6,
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
        height: deviceHeight / 32,
        width: deviceHeight / 32,
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
    HotelDetailsCard: {
        backgroundColor: colors.screenBg,
        borderRadius: deviceHeight / 40,
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
        elevation: 5,
    },
    HotelDetailsCardInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HotelDetailsCardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    HotelDetailsCardRight: {
        flex: 1.2,
        alignItems: 'center',
        height: deviceHeight / 13,
        justifyContent: 'center',
        backgroundColor: colors.inputColor,
        borderRadius: deviceHeight / 100,
    },
    HotelDetailsCardRightText: {
        color: colors.gray,
        fontSize: H5,
        fontFamily: 'LatoBold',
    },
    HotelDetailsCardRightText1: {
        color: colors.borderDarkColor,
        fontSize: p,
        fontFamily: 'LatoRegular',
        lineHeight: deviceHeight / 40,
    },
    HotelDetailsCard1: {
        justifyContent: 'center',
        gap: deviceHeight / 100 - 5,
    },
    arrowIcon: {
        fontSize: H5,
        color: colors.blueDarkColor,
        marginHorizontal: deviceWidth / 30,
    },
    HotelDetailsCard2: {
        justifyContent: 'center',
        gap: deviceHeight / 100 - 5,
    },
    HotelDetailsCardTitle: {
        fontSize: H6,
        color: colors.headlineColor,
        fontFamily: 'LatoBold',
        lineHeight: deviceHeight / 35,
    },
    HotelDetailsCardSubTitle: {
        fontSize: small,
        color: colors.gray,
        fontFamily: 'LatoRegular',
        lineHeight: deviceHeight / 40,
    },

    CancellationPolicy: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: deviceWidth / 100,
        marginBottom: deviceHeight / 100,
    },
    HotelDetailsCardLeftMain: {
        flex: 5,
        gap: deviceWidth / 30,
    },

});
