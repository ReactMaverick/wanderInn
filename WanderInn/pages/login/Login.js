import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { styles } from './Style';
import CustomInput from '@/components/customInput/CustomInput';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebaseConfig';
import { isValidEmail } from '@/constants/validation';
import { commonStyles } from '@/constants/styles';
import { FACEBOOK, GOOGLE, TWTTER } from '@/constants/images';
import { platform, showToast } from '@/constants/constants';
import Loader from '@/components/loader/Loader';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/reducer/authReducer';
import { LOGIN_URL } from '@/values/api/url';
import { postData } from '@/values/api/apiprovider';
import { StatusBar } from 'expo-status-bar';


export default function LoginPage() {

    const router = useRouter();

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isUserVerified, setIsUserVerified] = useState(false);

    const handleTextChange = (text, key) => {
        setFormData({
            ...formData,
            [key]: text
        });

        if (key === 'email') {
            const isValid = isValidEmail(text);

            setIsEmailValid(isValid);
        }

        const updatedErrors = {};

        setErrors(updatedErrors);
    }

    const handleSignIn = () => {
        const updatedErrors = {};

        if (!formData.email) {
            updatedErrors.email = 'Email is required';
            setErrors(updatedErrors);
        } else if (!isEmailValid) {
            updatedErrors.email = 'Email is invalid';
            setErrors(updatedErrors);
        } else if (!formData.password) {
            updatedErrors.password = 'Password is required';
            setErrors(updatedErrors);
        } else if (formData.password.length < 8) {
            updatedErrors.password = 'Password must be at least 8 characters';
            setErrors(updatedErrors);
        } else if (Object.keys(updatedErrors).length === 0) {
            console.log('Form Data ==> ', formData);

            // console.log('Auth ==> ', auth);

            setIsLoading(true);

            signInWithEmailAndPassword(auth, formData.email, formData.password)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...

                    console.log('User ==> ', user);

                    // console.log('User ==> ', user);

                    setIsLoggedIn(true);

                    if (user.emailVerified) {

                        setIsUserVerified(true);

                        const userData = {
                            email: user.email,
                            uid: user.uid,
                        };

                        // console.log('User Data ==> ', userData);


                        try {
                            const response = await postData(LOGIN_URL, userData);

                            console.log('Response ==> ', response);

                            if (response.isSuccess) {
                                showToast('success', response.message);

                                dispatch(login(response.data));

                            } else {
                                console.log('Error ==> ', response.message);
                                showToast('error', response.message);
                            }

                        } catch (error) {
                            console.log('Error ==> ', error);
                            showToast('error', 'Something went wrong');
                        }


                    } else {
                        showToast('error', 'Please verify your email');

                        setIsUserVerified(false);
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    console.log('Error ==> ', errorCode, errorMessage);

                    showToast('error', errorMessage);
                })
                .finally(() => {
                    console.log('Finally block');

                    setIsEmailValid(false);

                    setFormData({
                        email: '',
                        password: '',
                    });

                    setErrors({});

                    setIsLoading(false);
                });

        }
    }

    const handleSendVerificationEmail = () => {
        setIsLoading(true);

        const user = auth.currentUser;

        sendEmailVerification(user)
            .then(() => {
                console.log('Verification email sent');

                showToast('success', 'Verification email sent');
            })
            .catch((error) => {
                console.log('Error ==> ', error);
            })
            .finally(() => {
                setIsLoading(false);
            });

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
                                <Text style={styles.headerText}>Log In</Text>
                                <Text style={styles.headerSubText}>
                                    Hi! Welcome Back you’ve been missed
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
                                    <CustomInput
                                        label="Password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        secureTextEntry={!isPasswordVisible}
                                        rightIcon={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                        iconColor={colors.gray}
                                        onIconPress={() => {
                                            setIsPasswordVisible(!isPasswordVisible);
                                        }}
                                        onChangeText={(text) => handleTextChange(text, 'password')}
                                        required={true}
                                        error={errors.password ? true : false}
                                        errorText={errors.password}
                                    />
                                    
                                    <TouchableOpacity
                                        style={styles.forgotPassword}
                                        onPress={() => router.push('/forgotPassword')}
                                    >
                                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[commonStyles.btn, { marginTop: 27 }]}
                                        onPress={handleSignIn}
                                    >
                                        <Text style={commonStyles.btnText}>Log in</Text>
                                    </TouchableOpacity>

                                    {isLoggedIn && !isUserVerified && (
                                        <TouchableOpacity
                                            style={[commonStyles.btn, { marginTop: 27 }]}
                                            onPress={handleSendVerificationEmail}
                                        >
                                            <Text style={commonStyles.btnText}>Send Verification Email</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>

                                {/* <View style={styles.orLoginWith}>
                                <View style={styles.orLoginWithLine} />
                                <Text style={styles.orLoginWithText}>Or login with</Text>
                                <View style={styles.orLoginWithLine} />
                            </View>


                            <View style={styles.SocialMediaLogin} >
                                <TouchableOpacity style={styles.SocoalButton}>
                                    <Image source={FACEBOOK} style={styles.socialMediaIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.SocoalButton}>
                                    <Image source={TWTTER} style={styles.socialMediaIcon} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.SocoalButton}>
                                    <Image source={GOOGLE} style={styles.socialMediaIcon} />
                                </TouchableOpacity>
                            </View> */}

                            </View>

                            <View style={styles.loginLinkContainer}>
                                <Text style={styles.orLoginWithText}>Dont have an account? <Link href='/register' style={styles.loginLink}>Sign up</Link></Text>
                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    );
}
