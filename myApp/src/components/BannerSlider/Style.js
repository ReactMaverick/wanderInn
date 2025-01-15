import {colors} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../constants/constants';
import {H3, H4, H5, H6, p, small, smallS} from '../../constants/fontConstants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    height: deviceHeight / 3.4,
    borderRadius: deviceHeight / 50,
    overflow: 'hidden',
  },

  SliderBg: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: deviceHeight / 50,
    position: 'relative',
  },
  slide: {
    flex: 1,
    paddingHorizontal: deviceHeight / 35,
    paddingVertical: deviceHeight / 50,
  },

  Dots: {
    backgroundColor: colors.white,
    width: deviceWidth / 50,
    height: deviceWidth / 50,
    borderRadius: deviceWidth / 50,
    marginHorizontal: deviceWidth / 100,
    top: deviceHeight / 50,
  },
  ActiveDot: {
    backgroundColor: colors.primary,
    width: deviceWidth / 50,
    height: deviceWidth / 50,
    borderRadius: deviceWidth / 50,
    marginHorizontal: deviceWidth / 100,
    top: deviceHeight / 50,
  },

  SliderImg: {
    width: deviceWidth / 2.8,
    height: deviceHeight / 3.5,
    resizeMode: 'contain',
    position: 'absolute',
    top: deviceHeight / 100,
    right: deviceWidth / 20,
  },
  SliderImg1: {
    width: deviceWidth / 2.2,
    height: deviceHeight / 3.5,
    resizeMode: 'contain',
    position: 'absolute',
    top: deviceHeight / 100,
    right: deviceWidth / 45 - 5,
  },
  SliderImg2: {
    width: deviceWidth / 2.2,
    height: deviceHeight / 3.5,
    resizeMode: 'contain',
    position: 'absolute',
    top: deviceHeight / 100,
    right: deviceWidth / 45 - 5,
  },

  slideContent: {
    // position: 'relative',
    width: deviceWidth / 2.2,
    // backgroundColor: 'red'
  },
  slideOFFContentText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: deviceWidth / 40,
  },

  slideContentText: {
    fontSize: H4,
    color: colors.primary,
    fontFamily: 'LatoBlack',
    lineHeight: deviceHeight / 22,
  },
  slideContentTextWhite: {
    fontSize: H4,
    color: colors.white,
    fontFamily: 'LatoBlack',
    lineHeight: deviceHeight / 22,
  },
  OffImg: {
    width: deviceWidth / 8,
    height: deviceHeight / 8,
    resizeMode: 'contain',
  },
  OfferBg: {
    // position: 'absolute',
    // top: deviceHeight / 25,
    // left: deviceWidth / 6.5,
    height: deviceHeight / 22,
    width: deviceHeight / 22,
    objectFit: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  OfferBgtext: {
    fontSize: smallS,
    color: colors.white,
    fontFamily: 'LatoBlack',
  },
  slideSubText: {
    fontSize: small,
    color: colors.darkColor,
    fontFamily: 'LatoRegular',
    lineHeight: deviceHeight / 40,
    marginTop: deviceHeight / 55,
  },
  slideSubTextWhite: {
    fontSize: small,
    color: colors.white,
    fontFamily: 'LatoRegular',
    lineHeight: deviceHeight / 40,
    marginTop: deviceHeight / 55,
  },
  SliderBtn: {
    backgroundColor: colors.primary,
    paddingVertical: (deviceHeight * 1) / 100,
    borderRadius: 10,
    width: deviceWidth / 3,
    marginTop: deviceHeight / 50,
  },
  SliderBtnText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: p,
    fontFamily: 'LatoBold',
    lineHeight: (deviceHeight * 1) / 25,
  },
});
