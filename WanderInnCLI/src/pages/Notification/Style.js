import {colors} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../constants/constants';
import {p} from '../../constants/fontConstants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: deviceWidth / 30,
  },
  CustomTabsBtn: {
    flexDirection: 'row',
    marginVertical: deviceHeight / 60,
    gap: deviceWidth / 40,
  },
  CustomTabBtn: {
    borderColor: colors.lightBlue,
    borderWidth: 1,
    paddingVertical: deviceHeight / 60 / 2,
    borderRadius: deviceHeight / 60 / 2,
    paddingHorizontal: deviceWidth / 20,
  },
  CustomTabText: {
    textAlign: 'center',
    fontSize: p,
    fontFamily: 'LatoRegular',
    lineHeight: deviceHeight / 30,
    color: colors.darkColor,
  },
  activeTabBtn: {
    backgroundColor: colors.primary,
    paddingVertical: deviceHeight / 60 / 2,
    borderRadius: deviceHeight / 60 / 2,
    paddingHorizontal: deviceWidth / 20,
  },
  activeTabBtnText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: p,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 30,
  },

  notificationRow: {
    marginVertical: deviceHeight / 60,
    gap: deviceHeight / 20,
  },
});
