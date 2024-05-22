import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { styles } from './Style';
import CustomInput from '@/components/customInput/CustomInput';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth } from '@/firebaseConfig';
import { isValidEmail } from '@/constants/validation';
import { platform, showToast } from '@/constants/constants';
import Loader from '@/components/loader/Loader';
import { commonStyles } from '@/constants/styles';
import { FACEBOOK, GOOGLE, TWTTER } from '@/constants/images';
import { postData } from '@/values/api/apiprovider';
import { REGISTER_URL } from '@/values/api/url';

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

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

    const handleSignUp = async () => {
        const updatedErrors = {};

        if (!formData.name) {
            updatedErrors.name = 'Name is required';
            setErrors(updatedErrors);
        } else if (formData.name.length < 3) {
            updatedErrors.name = 'Name must be at least 3 characters';
            setErrors(updatedErrors);
        } else if (!formData.email) {
            updatedErrors.email = 'Email is required';
            setErrors(updatedErrors);
        } else if (!isEmailValid) {
            updatedErrors.email = 'Email is invalid';
            setErrors(updatedErrors);
        } else if (!formData.password) {
            updatedErrors.password = 'Password is required';
            setErrors(updatedErrors);
        } else if (!formData.confirmPassword) {
            updatedErrors.confirmPassword = 'Confirm Password is required';
            setErrors(updatedErrors);
        } else if (formData.password.length < 8) {
            updatedErrors.password = 'Password must be at least 8 characters';
            setErrors(updatedErrors);
        } else if (formData.password !== formData.confirmPassword) {
            updatedErrors.confirmPassword = 'Passwords do not match';
            setErrors(updatedErrors);
        } else if (Object.keys(updatedErrors).length === 0) {
            // console.log('Form Data ==> ', formData);

            setIsLoading(true);

            try {
                const response = await postData(REGISTER_URL, formData);

                console.log('Response ==> ', response);

                if (response.isSuccess) {
                    showToast('success', response.message);

                    router.push('/login');

                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    });
                } else {
                    showToast('error', response.message);
                }

            } catch (error) {
                console.log('Error ==> ', error);
                showToast('error', 'Something went wrong');
            } finally {
                setIsLoading(false);
            }
        }
    }


    if (isLoading) {
        return <Loader />;
    }


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
                            <Text style={styles.headerText}>Create Account</Text>
                            <Text style={styles.headerSubText}>
                                Fill Your Information below or register
                                with your account
                            </Text>
                        </View>
                        <View style={styles.InputContainer}>
                            <View style={styles.formContainer}>
                                <CustomInput
                                    label="Name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChangeText={(text) => handleTextChange(text, 'name')}
                                    required={true}
                                    error={errors.name ? true : false}
                                    errorText={errors.name}
                                />
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
                                <CustomInput
                                    label="Confirm Password"
                                    placeholder="Confirm your password"
                                    value={formData.confirmPassword}
                                    secureTextEntry={!isConfirmPasswordVisible}
                                    rightIcon={isConfirmPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                    iconColor={colors.gray}
                                    onIconPress={() => {
                                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
                                    }}
                                    onChangeText={(text) => handleTextChange(text, 'confirmPassword')}
                                    required={true}
                                    error={errors.confirmPassword ? true : false}
                                    errorText={errors.confirmPassword}
                                />
                                <TouchableOpacity
                                    style={[commonStyles.btn, { marginTop: 27 }]}
                                    onPress={handleSignUp}
                                >
                                    <Text style={commonStyles.btnText}>Sign Up</Text>
                                </TouchableOpacity>
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
                                <TouchableOpacity
                                    style={styles.SocoalButton}
                                >
                                    <Image source={GOOGLE} style={styles.socialMediaIcon} />
                                </TouchableOpacity>
                            </View> */}

                        </View>

                        <View style={styles.loginLinkContainer}>
                            <Text style={styles.orLoginWithText}>Already have an account? <Link href='/login' style={styles.loginLink}>Login</Link></Text>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}
