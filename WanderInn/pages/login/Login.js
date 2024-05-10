import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native';
import { styles } from './Style';
import CustomInput from '@/components/customInput/CustomInput';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebaseConfig';
import { isValidEmail } from '@/constants/validation';
import { commonStyles } from '@/constants/styles';
import { FACEBOOK, GOOGLE, TWTTER } from '@/constants/images';

export default function LoginPage() {

    // const auth = getAuth();

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

    const handleSignUp = () => {
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
            console.log('Form Data ==> ', formData);

            createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    console.log('User ==> ', user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });

        }
    }


    return (
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
                    <TouchableOpacity style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[commonStyles.btn, { marginTop: 27 }]}
                        onPress={handleSignUp}
                    >
                        <Text style={commonStyles.btnText}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.orLoginWith}>
                    <View style={styles.orLoginWithLine} />
                    <Text style={styles.orLoginWithText}>Or login with</Text>
                    <View style={styles.orLoginWithLine} />
                </View>
                {/* Social Media Login Buttons */}
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
                </View>

                {/* Social Media Login Buttons */}
            </View>

            <View style={styles.loginLinkContainer}>
                <Text style={styles.orLoginWithText}>Dont have an account? <Link href='/register' style={styles.loginLink}>Sign up</Link></Text>
            </View>

        </View>
    );
}
