import {colors} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../constants/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: deviceHeight / 5.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.BGColor,
    paddingHorizontal: deviceWidth / 30,
  },
  LeftBar: {
    flexDirection: 'row',
  },
  LeftBarContent: {
    marginLeft: deviceWidth / 20,
    width: deviceWidth / 2,
    justifyContent: 'center',
  },
  UserName: {
    color: colors.blueDarkColor,
    fontSize: deviceHeight / 35,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight / 35,
  },
  UserLocation: {
    color: colors.darkColor,
    fontSize: deviceHeight / 44,
    fontFamily: 'LatoRegular',
    lineHeight: deviceHeight / 30,
  },
  UserImg: {
    width: deviceHeight / 12,
    height: deviceHeight / 12,
    borderRadius: deviceHeight / 24,
  },
  NotificationBtn: {
    width: deviceHeight / 14,
    height: deviceHeight / 14,
    backgroundColor: colors.BGBlueColor,
    borderRadius: deviceHeight / 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NotificationIcon: {
    color: colors.blueDarkColor,
    fontSize: deviceHeight / 30,
  },
});
