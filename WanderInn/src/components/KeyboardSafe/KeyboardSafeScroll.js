import { SafeAreaView } from "react-native-safe-area-context";
import { platform } from "../../constants/constants";
import { commonStyles } from "../../constants/styles";
import { KeyboardAvoidingView } from "react-native-keyboard-controller";

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