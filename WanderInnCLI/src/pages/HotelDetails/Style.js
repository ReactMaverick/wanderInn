import {colors} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../constants/constants';
import {H3, H4, H5, H6, p, small, smallS} from '../../constants/fontConstants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: deviceWidth / 20,
  },
  bgImage: {
    width: deviceWidth,
    height: deviceHeight / 2.2,
    position: 'relative',
  },

  CustomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: deviceHeight / 60,
    paddingHorizontal: deviceWidth / 30,
    position: 'absolute',
    top: deviceHeight / 30,
    left: 0,
    width: deviceWidth,
  },
  backBtn: {
    borderRadius: deviceHeight / 50,
    height: deviceHeight / 25,
    width: deviceHeight / 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F0F975',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  backBtnIcon: {
    fontSize: H6,
    color: colors.white,
  },

  HeartIconBox: {
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
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: deviceHeight / 40,
    left: 0,
    marginHorizontal: deviceWidth / 30,
    paddingVertical: deviceHeight / 80 / 1.3,
    paddingHorizontal: deviceWidth / 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: deviceWidth - deviceWidth / 15,
    borderRadius: deviceHeight / 100,
  },
  imageCol: {
    borderRadius: deviceHeight / 85,
    height: deviceHeight / 15,
    width: deviceHeight / 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  plusImageBox: {
    borderRadius: deviceHeight / 85,
    height: deviceHeight / 15,
    width: deviceHeight / 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
    position: 'relative',
    overflow: 'hidden',
  },

  imageCol1: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  plusImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000059',
  },
  plusImageText: {
    color: colors.white,
    fontSize: H6,
    lineHeight: deviceHeight / 35,
    fontFamily: 'LatoBold',
  },
  divider: {
    height: deviceHeight / 100,
    backgroundColor: colors.borderDarkColor,
    borderRadius: deviceHeight / 100,
    width: deviceWidth / 3.5,
  },
  deviderBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceHeight / 80,
  },

  HotelCardContentInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: deviceHeight / 70,
  },
  HotelCardTop: {
    justifyContent: 'space-evenly',
    width: deviceWidth / 2,
  },
  HotelCardRight: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight / 12,
    width: deviceHeight / 12,
    backgroundColor: colors.inputColor,
    borderRadius: deviceHeight / 100,
  },

  HotelCardTitle: {
    fontSize: H3,
    color: colors.headlineColor,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },
  HotelLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HotelLocationIcon: {
    fontSize: p,
    color: colors.gray,
    marginRight: deviceWidth / 50,
  },

  HotelLocationText: {
    fontSize: p,
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
    fontSize: H4,
    color: colors.primary,
    fontFamily: 'LatoBold',
  },
  HotelPrice1: {
    fontSize: small,
    color: colors.primary,
    fontFamily: 'LatoRegular',
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
  HotelReviewTitle: {
    fontSize: H5,
    color: colors.headlineColor,
    fontFamily: 'LatoRegular',
    lineHeight: deviceHeight / 30,
  },
  HotelReviewOuterBoxTop: {
    justifyContent: 'space-evenly',
    width: deviceWidth / 2,
  },
  HotelReviewOuterBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginVertical: deviceHeight / 70 - 5,
  },
  seeAllBtn: {
    borderRadius: deviceHeight / 100,
    paddingHorizontal: deviceWidth / 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: deviceWidth / 50,
  },
  seeAllBtnText: {
    color: colors.primary,
    fontSize: p,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },
  seeAllBtnIcon: {
    fontSize: H6,
    color: colors.primary,
  },
  UsersGroupImgs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: deviceHeight / 70,
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
  outerBox: {
    backgroundColor: colors.white,
    borderRadius: deviceHeight / 40,
    padding: deviceWidth / 35,
    marginVertical: deviceHeight / 50,
    shadowColor: colors.primary,
    overflow: 'hidden',

    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
  },
  HotelCalender: {
    fontSize: H6,
    color: colors.primary,
    fontFamily: 'LatoBold',
    // lineHeight: deviceHeight / 40,
    textAlign: 'center',
  },
  HotelCalender1: {
    fontSize: small,
    color: colors.primary,
    fontFamily: 'LatoRegular',
    // lineHeight: deviceHeight / 40,
    textAlign: 'center',
  },
  HotelTravelTitle: {
    fontSize: H6,
    color: colors.headlineColor,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },
  HotelCheckInRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HotelCheckIn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: deviceHeight / 60 - 10,
  },
  Dot: {
    height: deviceHeight / 100,
    width: deviceHeight / 100,
    borderRadius: deviceHeight / 100,
    backgroundColor: colors.darkColor,
    marginHorizontal: deviceHeight / 70,
  },
  HotelCheckInBig: {
    fontSize: p,
    color: colors.darkColor,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },
  HotelCheckInSmall: {
    fontSize: small,
    color: colors.darkColor,
    fontFamily: 'LatoRegular',
    lineHeight: deviceHeight / 30,
  },
  roomsDatesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // gap: deviceWidth / 55,
  },
  roomsDatesCol: {
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth / 2.4 - 1,
    justifyContent: 'space-between',
    backgroundColor: colors.inputColor,
    borderRadius: deviceHeight / 70 - 5,
    padding: deviceWidth / 35,
    marginVertical: deviceHeight / 50,
    shadowColor: colors.primary,
    overflow: 'hidden',
    borderColor: colors.borderColor2,
    borderWidth: 1,
  },
  roomsDatesColIcon: {
    width: deviceHeight / 35,
    height: deviceHeight / 35,
  },
  roomsDatesColText: {
    fontSize: p,
    color: colors.primary,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },
  MainTitle: {
    paddingVertical: deviceHeight / 50,
    position: 'relative',
  },
  readMoreBtn: {
    position: 'absolute',
    bottom: deviceHeight / 55 - 5,
    right: 0,
    paddingVertical: deviceWidth / 60,
    paddingHorizontal: deviceWidth / 30,
  },
  readMoreBtnText: {
    fontSize: p,
    color: colors.primary,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 40,
    textDecorationLine: 'underline',
  },

  FacilityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FacilityCol: {
    width: deviceWidth / 6,
    alignItems: 'center',
  },
  FacilityIconBox: {
    backgroundColor: colors.inputColor,
    height: deviceHeight / 12,
    width: deviceHeight / 12,
    padding: deviceHeight / 70,
    borderRadius: deviceHeight / 60,
    marginBottom: deviceHeight / 80 - 5,
  },
  FacilityIcon: {
    height: '100%',
    width: '100%',
  },
  FacilityText: {
    fontSize: small,
    color: colors.darkColor,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 35,
  },
  Map: {
    width: '100%',
    height: deviceHeight / 3.8,
    objectFit: 'cover',
    borderRadius: deviceHeight / 50,
  },
  SimilarHotelsList: {
    // paddingBottom: deviceHeight / 20,
  },
  BookNowBtn: {
    backgroundColor: colors.primary,
    paddingVertical: deviceHeight / 50,
    borderRadius: deviceHeight / 50,
    marginHorizontal: deviceWidth / 30,
    width: deviceWidth - deviceWidth / 15,
    borderRadius: deviceHeight / 100,
    marginVertical: deviceHeight / 30,
  },
  BookNowBtnText: {
    color: colors.white,
    fontSize: H6,
    textAlign: 'center',
    lineHeight: deviceHeight / 30,
    fontFamily: 'LatoBold',
  },
});
