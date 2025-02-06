import { KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import { platform } from "../../constants/constants";
import { commonStyles } from "../../constants/styles";

export default function KeyboardSafeScroll({ children }) {
  return (
    <KeyboardAvoidingView
      behavior={platform === 'ios' ? 'padding' : 'height'}
      style={commonStyles.keyboardAvoidingView}>
      <SafeAreaView>
        <ScrollView
          style={commonStyles.bg}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}