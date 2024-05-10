import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import CustomInput from '@/components/customInput/CustomInput';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { isValidEmail, isValidPassword } from '@/constants/common';

export default function RegisterPage() {

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

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.headerText}>Create Account</Text>
                <Text style={styles.headerSubText}>
                    Fill Your Information below or register
                    with your account
                </Text>
            </View>
            <View style={styles.formContainer}>
                <CustomInput
                    label="Name"
                    placeholder="Enter your name"
                    onChangeText={(text) => handleTextChange(text, 'name')}
                />
                <CustomInput
                    label="Email"
                    placeholder="Enter your email"
                    rightIcon={isEmailValid ? "checkmark-circle" : false}
                    iconColor={colors.checkIconColor}
                    onChangeText={(text) => handleTextChange(text, 'email')}
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
                />
                <CustomInput
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    secureTextEntry={!isConfirmPasswordVisible}
                    rightIcon={isConfirmPasswordVisible ? "eye-outline" : "eye-off-outline"}
                    iconColor={colors.gray}
                    onIconPress={() => {
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
                    }}
                />
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.orLoginWith}>
                <View style={styles.orLoginWithLine} />
                <Text style={styles.orLoginWithText}>Or login with</Text>
                <View style={styles.orLoginWithLine} />
            </View>

            {/* Social Media Login Buttons */}


            {/* Social Media Login Buttons */}

            <View style={styles.loginLinkContainer}>
                <Text style={styles.orLoginWithText}>Already have an account? <Link href='/login' style={styles.loginLink}>Login</Link></Text>
            </View>

        </View>
    );
}
