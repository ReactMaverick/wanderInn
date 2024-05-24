import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { styles } from './Style';
import CustomInput from '@/components/customInput/CustomInput';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebaseConfig';
import { isValidEmail } from '@/constants/validation';
import { commonStyles } from '@/constants/styles';
import { FACEBOOK, GOOGLE, TWTTER } from '@/constants/images';
import { platform, showToast } from '@/constants/constants';
import Loader from '@/components/loader/Loader';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/reducer/authReducer';
import { FORGOT_PASSWORD_URL, LOGIN_URL } from '@/values/api/url';
import { postData } from '@/values/api/apiprovider';
import { StatusBar } from 'expo-status-bar';

export default function ForgotPasswordPage() {

    const router = useRouter();

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });
    const [errors, setErrors] = useState({});

    const handleTextChange = (text, key) => {
        setFormData({
            ...formData,
            [key]: text
        });


        const isValid = isValidEmail(text);

        setIsEmailValid(isValid);


        const updatedErrors = {};

        setErrors(updatedErrors);
    }

    const handleSendEmail = () => {
        const updatedErrors = {};

        if (!formData.email) {
            updatedErrors.email = 'Email is required';
            setErrors(updatedErrors);
        } else if (!isEmailValid) {
            updatedErrors.email = 'Email is invalid';
            setErrors(updatedErrors);
        } else if (Object.keys(updatedErrors).length === 0) {
            // console.log('Form Data ==> ', formData);

            const { email } = formData;

            // console.log('Auth ==> ', auth);

            setIsLoading(true);

            const checkUserAndSendEmail = async () => {
                try {

                    const response = await postData(FORGOT_PASSWORD_URL, { email });

                    if (response.isSuccess) {
                        // console.log('Success Response ==> ', response);

                        sendPasswordResetEmail(auth, email)
                            .then(() => {
                                showToast('success', 'Email sent successfully! Please check your email.');
                                router.navigate('login');
                            })
                            .catch((error) => {
                                console.error('Error ==> ', error);
                                showToast('error', 'Something went wrong! Please try again later.');
                            })
                            .finally(() => {
                                setIsLoading(false);
                            });

                    } else {
                        // console.log('Error Response ==> ', response);

                        showToast('error', response.message);

                        setIsLoading(false);
                    }

                } catch (error) {
                    console.error('Error ==> ', error);

                    showToast('error', 'Something went wrong! Please try again later.');

                    setIsLoading(false);

                }
            }

            checkUserAndSendEmail();

        }
    }



    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <StatusBar style="auto" />
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
                                <Text style={styles.headerText}>Forgot Password?</Text>
                                <Text style={styles.headerSubText}>
                                    Don't worry! Just enter your email and we will send you a link to reset your password.
                                </Text>
                            </View>
                            <View style={styles.InputContainer}>
                                <View style={styles.formContainer}>

                                    <CustomInput
                                        label="Email"
                                        placeholder="Enter your email"
                                        keyboardType={'email-address'}
                                        value={formData.email}
                                        rightIcon={isEmailValid ? "checkmark-circle" : false}
                                        iconColor={colors.checkIconColor}
                                        onChangeText={(text) => handleTextChange(text, 'email')}
                                        required={true}
                                        error={errors.email ? true : false}
                                        errorText={errors.email}
                                    />

                                    <TouchableOpacity
                                        style={[commonStyles.btn, { marginTop: 27 }]}
                                        onPress={handleSendEmail}
                                    >
                                        <Text style={commonStyles.btnText}>Send Email</Text>
                                    </TouchableOpacity>

                                </View>



                            </View>


                            <View style={styles.linksContainer}>
                                <View style={styles.loginLinkContainer}>
                                    <Text style={styles.orLoginWithText}>Remember your password? <Link href='/login' style={styles.loginLink}>Login</Link></Text>
                                </View>

                                <View style={styles.loginLinkContainer}>
                                    <Text style={styles.orLoginWithText}>Dont have an account? <Link href='/register' style={styles.loginLink}>Sign up</Link></Text>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    );
}
