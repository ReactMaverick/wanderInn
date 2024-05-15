import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H3, p } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: deviceHeight * 1 / 60,
    borderRadius: 10,
    width: deviceWidth * 90 / 100,
  },
  btnText: {
    textAlign: "center",
    color: colors.white,
    fontSize: p,
    fontFamily: 'LatoBold',
    lineHeight: 32,
  },
  bg: {
    backgroundColor: colors.screenBg,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  CustomBtn: {
    backgroundColor: colors.primary,
    paddingVertical: deviceHeight * 1 / 75,
    borderRadius: 10,
  },
  CustomBtnText: {
    textAlign: "center",
    color: colors.white,
    fontSize: p,
    fontFamily: 'LatoBold',
    lineHeight: deviceHeight * 1 / 25,
  },
});
