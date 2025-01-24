import {colors} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../constants/constants';
import {H4, H5, H6, p, small, smallS} from '../../constants/fontConstants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  HotelCard: {
    backgroundColor: colors.screenBg,
    borderRadius: deviceHeight / 40,
    // padding: deviceWidth / 35,
    marginVertical: deviceHeight / 50,
    shadowColor: colors.primary,
    overflow: 'hidden',
    borderColor: colors.lightBlue,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  HotelCardImgBox: {
    width: deviceWidth / 1.4,
    height: deviceHeight / 4,
    borderRadius: deviceHeight / 50,
    overflow: 'hidden',
    position: 'relative',
    margin: deviceWidth / 35,
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
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  HeartIcon: {
    fontSize: H6,
    color: colors.secondary,
  },

  HotelCardReviewbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: colors.boxBG,
    paddingHorizontal: deviceWidth / 50,
    paddingVertical: deviceHeight / 70,
    width: '100%',
  },
  HotelCardReview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HotelCardReviewText: {
    fontSize: smallS,
    color: colors.white,
    marginRight: deviceWidth / 50,
    fontFamily: 'LatoBold',
  },
  UsersGroupImgs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: deviceHeight / 70 - 5,
  },
  UsersGroupImg: {
    width: deviceHeight / 30,
    height: deviceHeight / 30,
    borderRadius: deviceHeight / 30,
    marginRight: -deviceHeight / 60,
  },
  UsersGroupImgPlusBox: {
    position: 'relative',
    borderRadius: deviceHeight / 30,
    width: deviceHeight / 30,
    height: deviceHeight / 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UsersGroupImgPlus: {
    width: deviceHeight / 30,
    height: deviceHeight / 30,
    borderRadius: deviceHeight / 30,
  },
  UsersOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: deviceHeight / 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UsersGroupImgText: {
    fontSize: H4,
    color: colors.white,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },
  ReviewBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: deviceWidth / 50,
    backgroundColor: 'rgba(255, 255, 255, 0.21)',
    borderRadius: deviceHeight / 100,
  },
  ReviewText: {
    fontSize: p,
    color: colors.white,
    fontFamily: 'LatoBold',
    marginRight: deviceWidth / 50,
    lineHeight: deviceHeight / 35,
  },
  ReviewStar: {
    fontSize: p,
    color: colors.secondary,
  },
  HotelCardContent: {
    paddingBottom: deviceWidth / 35,
    paddingHorizontal: deviceWidth / 35,
  },

  HotelCardContentInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: deviceHeight / 70 - 5,
  },
  HotelCardTop: {
    justifyContent: 'space-between',
    width: deviceWidth / 2,
  },
  HotelCardRight: {
    justifyContent: 'space-between',
    flex: 1,
  },

  HotelCardTitle: {
    fontSize: H5,
    color: colors.headlineColor,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },
  HotelLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HotelLocationIcon: {
    fontSize: small,
    color: colors.gray,
    marginRight: deviceWidth / 50,
  },

  HotelLocationText: {
    fontSize: small,
    color: colors.gray,
    lineHeight: deviceHeight / 35,
    fontFamily: 'LatoRegular',
    flexShrink: 1,
  },
  Hoteldistance: {
    fontSize: p,
    color: colors.gray,
    lineHeight: deviceHeight / 35,
    fontFamily: 'LatoRegular',
    marginBottom: deviceHeight / 70 - 5,
  },
  HotelPrice: {
    fontSize: small,
    color: colors.primary,
    fontFamily: 'LatoBold',
  },
  DistanceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: deviceHeight / 70 - 5,
  },
  DistanceText: {
    fontSize: small,
    color: colors.gray,
    lineHeight: deviceHeight / 35,
  },
  OfferBox: {
    backgroundColor: colors.secondary,
    paddingHorizontal: deviceWidth / 30,
    borderRadius: 5,
  },

  OfferText: {
    color: colors.headlineColor,
    fontSize: small,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },
  HotelCardBottom: {
    marginTop: deviceHeight / 70 - 5,
    backgroundColor: colors.primary,
    flex: 1,
  },
  HotelCardBottomText: {
    color: colors.white,
    fontSize: small,
    fontFamily: 'LatoRegular',
    textAlign: 'center',
    lineHeight: deviceHeight / 30,
  },
});
