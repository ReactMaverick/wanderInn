import {colors} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../constants/constants';
import {H1BIG, H3, H5, H6, p} from '../../constants/fontConstants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: (deviceWidth * 5) / 100,
    paddingHorizontal: (deviceWidth * 5) / 100,
    backgroundColor: colors.screenBg,
    minHeight: deviceHeight + 30,
    gap: 20,
  },
  titleContainer: {
    marginBottom: 40,
    width: deviceWidth * 0.75,
    alignItems: 'center',
  },
  headerText: {
    fontSize: H1BIG,
    fontFamily: 'LatoBold',
    lineHeight: 51.2,
    marginBottom: 5,
    color: colors.headlineColor,
  },
  headerSubText: {
    fontSize: p,
    color: colors.gray,
    textAlign: 'center',
    fontFamily: 'LatoRegular',
    lineHeight: 20.32,
  },
  formContainer: {
    width: (deviceWidth * 5) / 5.6,
  },
  InputContainer: {
    alignItems: 'center',
  },
  SocialMediaLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 20,
  },
  SocoalButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.borderLightColor,
    borderWidth: 1,
    height: (deviceHeight * 1) / 13,
    width: (deviceHeight * 1) / 13,
    borderRadius: deviceWidth * 1,
  },
  socialMediaIcon: {
    width: (deviceHeight * 1) / 18,
    height: (deviceHeight * 1) / 18,
    objectFit: 'cover',
  },
  forgotPassword: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: colors.primary,
    fontSize: p,
    fontFamily: 'LatoRegular',
    lineHeight: 20.32,
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline',
  },
  orLoginWithText: {
    color: colors.placeholderColor,
    fontSize: p,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  orLoginWith: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  orLoginWithLine: {
    height: 1,
    width: (deviceWidth * 20) / 80,
    backgroundColor: colors.placeholderColor,
  },
  loginLinkContainer: {
    marginTop: 20,
  },
  loginLink: {
    color: colors.primary,
    fontSize: H6,
    fontFamily: 'LatoRegular',
    lineHeight: 20.32,
    textDecorationColor: colors.primary,
    textDecorationLine: 'underline',
  },
  linksContainer: {
    marginTop: 20,
  },
});
