import { colors } from "@/constants/colors";
import { deviceHeight, deviceWidth } from "@/constants/constants";
import { H3 } from "@/constants/fontConstants";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: deviceHeight * 1 / 50,
    borderRadius: 10,
    width: deviceWidth * 90 / 100,
  },
  btnText: {
    textAlign: "center",
    color: colors.white,
    fontSize: H3,
    fontFamily: 'LatoRegular',
    lineHeight: 32,
  },
});
