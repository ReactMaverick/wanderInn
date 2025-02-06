import { KeyboardAvoidingView, SafeAreaView } from "react-native";
import { platform } from "../../constants/constants";
import { commonStyles } from "../../constants/styles";

export default function KeyboardSafe({ children }) {
  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}