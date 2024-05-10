import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./Style";
import { Link } from 'expo-router';
import { platform } from "@/constants/constants";
import { commonStyles } from "@/constants/styles";

export default function VerifyOTPPage() {
    return (
        <KeyboardAvoidingView
            behavior={platform === "ios" ? "padding" : "height"}
            style={commonStyles.keyboardAvoidingView}
        >
            <SafeAreaView>
                <ScrollView
                    style={commonStyles.bg}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.container}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.headerText}>Verify Code</Text>
                            <Text style={styles.headerSubText}>
                                Please enter the code we just send to email
                            </Text>
                            <Link href='/register' style={[styles.loginLink, { marginTop: 5 }]}>example@gmail.com</Link>
                        </View>
                        <View>
                            {/* otp code input field */}
                            <View style={styles.InputContainer}>
                                {/*demo OTP input box */}
                                <View style={styles.otpBox} />
                                <View style={styles.otpBox} />
                                <View style={styles.otpBox} />
                                <View style={styles.otpBox} />
                                {/*demo OTP input box */}
                            </View>

                            {/* otp code input field */}

                        </View>
                        <View style={styles.loginLinkContainer}>
                            <Text style={styles.orLoginWithText}>Didn’t receive OTP?</Text>
                            <Link href='/register' style={styles.loginLink}>Resend code </Link>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}