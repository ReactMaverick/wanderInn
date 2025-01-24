import {colors} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../constants/constants';
import {H1, H3, H5, H6, p, small, smallS} from '../../constants/fontConstants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: deviceWidth / 20,
    // height: deviceHeight,
    paddingVertical: deviceHeight / 30,
  },
  BackHeader: {
    width: deviceWidth,
    paddingBottom: deviceHeight / 40,
    paddingTop: deviceHeight / 20,
    justifyContent: 'center',
    paddingHorizontal: deviceWidth / 20,
  },
  BackHeaderInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  reviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: deviceHeight / 50,
    backgroundColor: colors.screenBg,
    borderRadius: deviceHeight / 40,
    shadowColor: colors.primary, // Assuming colors.primary is defined elsewhere for your primary color
    shadowOffset: {
      width: 0, // Remove horizontal shadow offset
      height: 5, // Set vertical shadow offset to 7px
    },
    shadowRadius: 10,
    elevation: 4,
  },

  reviewLeftBox: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    height: deviceHeight / 8,
    borderRadius: deviceHeight / 60,
  },
  reviewTitle: {
    fontSize: H1,
    color: colors.white,
    fontFamily: 'LatoBold',
  },
  reviewSubTitle: {
    fontSize: H6,
    color: colors.white,
    fontFamily: 'LatoBold',
  },
  reviewRightBox: {
    flex: 2.6,
    // gap: deviceHeight / 70,
  },
  reviewRightBoxInner: {
    paddingLeft: deviceHeight / 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewRightBoxTitle: {
    fontSize: small,
    color: colors.borderDarkColor,
    fontFamily: 'LatoRegular',
    lineHeight: deviceHeight / 40,
  },
  reviewRightBoxProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth / 3,
  },
  reviewRightProgressBar: {
    flex: 1,
    paddingHorizontal: deviceWidth / 30,
  },
  ReviewCatagoryBox: {
    backgroundColor: colors.screenBg,
    borderRadius: deviceHeight / 80,
    marginHorizontal: deviceHeight / 95 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.lightBlue,
    minWidth: deviceWidth / 3.5,
    borderWidth: 1,
  },
  ReviewCatagoryBoxTitle: {
    fontSize: p,
    color: colors.blueDarkColor,
    fontFamily: 'LatoBold',
    padding: deviceHeight / 60,
  },
  reviewHeadTitle: {
    fontSize: H5,
    color: colors.blueDarkColor,
    fontFamily: 'LatoBold',
    padding: deviceHeight / 50 / 3,
  },
  reviewMAinBox: {
    justifyContent: 'space-between',
    paddingBottom: deviceHeight / 20,
    paddingTop: deviceHeight / 40,
    paddingHorizontal: deviceWidth / 30,
    backgroundColor: colors.screenBg,
    borderRadius: deviceHeight / 40,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 4,
  },
  reviewHead: {
    marginBottom: deviceHeight / 50,
  },
  reviewBodyHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: deviceHeight / 50,
  },
  UserINfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 6,
  },
  UserImage: {
    height: deviceHeight / 12,
    width: deviceHeight / 12,
    borderRadius: deviceHeight / 10,
    marginRight: deviceHeight / 50,
  },
  ReviewStarBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: deviceWidth / 100,
    backgroundColor: colors.inputColor,
    paddingHorizontal: deviceWidth / 35,
    paddingVertical: deviceHeight / 100 / 1.5,
    borderRadius: deviceHeight / 100,
  },
  ReviewStarText: {
    fontSize: H6,
    color: colors.gray,
    fontFamily: 'LatoBold',
  },
  ReviewStar: {
    fontSize: small,
    color: colors.secondary,
  },
  UserINfo: {
    gap: deviceWidth / 100,
    flex: 1,
  },
  UserName: {
    fontSize: H5,
    color: colors.blueDarkColor,
    fontFamily: 'LatoBold',
  },
  UserPostDateBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Dot: {
    height: deviceHeight / 100 / 1.5,
    width: deviceHeight / 100 / 1.5,
    borderRadius: deviceHeight / 100,
    backgroundColor: colors.borderDarkColor,
    marginHorizontal: deviceHeight / 100,
  },
  UserDate: {
    fontSize: small,
    color: colors.borderDarkColor,
    fontFamily: 'LatoRegular',
  },
  ReviewDetailsBoxTitle: {
    fontSize: H5,
    color: colors.blueDarkColor,
    fontFamily: 'LatoBold',
    marginBottom: deviceHeight / 80,
  },
  ReviewDetailsText: {
    fontSize: p,
    color: colors.borderDarkColor,
    fontFamily: 'LatoRegular',
  },
  ReviewDetailsImagesRow: {
    flexDirection: 'row',
    gap: deviceWidth / 30,
    alignItems: 'center',
    marginVertical: deviceHeight / 50,
  },
  ReviewDetailsImages: {
    height: deviceHeight / 15,
    width: deviceHeight / 15,
    borderRadius: deviceHeight / 90,
  },
  ReviewDetailsFooter: {
    flexDirection: 'row',
    gap: deviceWidth / 20,
    alignItems: 'center',
  },
  likeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: deviceWidth / 50,
  },
  likeBtnIcon: {
    fontSize: H6,
  },
  likeBtnText: {
    fontSize: small,
    fontFamily: 'LatoBold',
  },
  devider: {
    height: 1,
    backgroundColor: colors.borderLightColor,
    marginVertical: deviceHeight / 50,
  },
});
