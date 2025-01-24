import { colors } from "../../constants/colors";
import { deviceHeight, deviceWidth } from "../../constants/constants";
import { p, small } from "../../constants/fontConstants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  LocationBox: {
    backgroundColor: colors.white,
    borderRadius: deviceHeight / 40,
    padding: deviceWidth / 20,
    marginVertical: deviceHeight / 50,
    // height: deviceHeight / 5,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 10,
    margin: deviceWidth / 35
  },
  CustomInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: "s",
    backgroundColor: colors.inputColor,
    padding: deviceWidth / 40,
    borderRadius: deviceHeight / 60,
    position: 'relative',
    width: '100%',
  },
  CustomSelectDropdown: {
    width: deviceWidth / 2,
    height: deviceHeight / 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dropdown: {
    position: 'absolute',
    top: deviceHeight / 13,
    left: 0,
    backgroundColor: colors.inputColor,
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
    width: deviceWidth / 1.8,
  },
  filterOptionsText: {
    color: colors.blueDarkColor,
    fontSize: p,
    padding: 10,
  },
  SearchInput: {
    width: deviceWidth / 1.7,
    fontSize: p,
    color: colors.blueDarkColor,
    lineHeight: deviceHeight / 30,
  },
  inputIcon: {
    color: colors.blueDarkColor,
    fontSize: deviceHeight / 38,
    paddingRight: 10,
  },
  CustomInputLabel: {
    color: colors.darkColor,
    fontSize: small,
    fontFamily: 'LatoRegular',
    lineHeight: deviceHeight / 50,
  },
  CustomInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: deviceHeight / 35 - 10,
  },
  CustomInputBox1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputColor,
    padding: deviceWidth / 40,
    borderRadius: deviceHeight / 60,
    position: 'relative',
    width: '100%',
  },
});
