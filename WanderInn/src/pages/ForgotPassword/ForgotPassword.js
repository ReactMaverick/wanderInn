import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Loader from '../../components/Loader/Loader';
import { colors } from '../../constants/colors';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postData } from '../../values/api/apiprovider';
import { FORGOT_PASSWORD_URL } from '../../values/api/url';
import { sendPasswordResetEmail } from 'firebase/auth';
import { showToast, platform } from '../../constants/constants';
import CustomInput from '../../components/CustomInput/CustomInput';
import { commonStyles } from '../../constants/styles';
import { styles } from './Style';
import { isValidEmail } from '../../constants/validation';
import { auth } from '../../../firebaseConfig';

export default function ForgotPassword({ navigation }) {
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
      [key]: text,
    });

    const isValid = isValidEmail(text);

    setIsEmailValid(isValid);

    const updatedErrors = {};

    setErrors(updatedErrors);
  };

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
                showToast(
                  'success',
                  'Email sent successfully! Please check your email.',
                );
                navigation.navigate('Login');
              })
              .catch(error => {
                console.error('Error ==> ', error);
                showToast(
                  'error',
                  'Something went wrong! Please try again later.',
                );
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
      };

      checkUserAndSendEmail();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={platform === 'ios' ? 'padding' : 'height'}
        style={commonStyles.keyboardAvoidingView}>
        <SafeAreaView>
          <ScrollView
            style={commonStyles.bg}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.headerText}>Forgot Password?</Text>
                <Text style={styles.headerSubText}>
                  Don't worry! Just enter your email and we will send you a link
                  to reset your password.
                </Text>
              </View>
              <View style={styles.InputContainer}>
                <View style={styles.formContainer}>
                  <CustomInput
                    label="Email"
                    placeholder="Enter your email"
                    keyboardType={'email-address'}
                    value={formData.email}
                    rightIcon={isEmailValid ? 'checkmark-circle' : false}
                    iconColor={colors.checkIconColor}
                    onChangeText={text => handleTextChange(text, 'email')}
                    required={true}
                    error={errors.email ? true : false}
                    errorText={errors.email}
                  />

                  <TouchableOpacity
                    style={[commonStyles.btn, { marginTop: 27 }]}
                    onPress={handleSendEmail}>
                    <Text style={commonStyles.btnText}>Send Email</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.linksContainer}>
                <View style={styles.loginLinkContainer}>
                  <Text style={styles.orLoginWithText}>
                    Remember your password?{' '}
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.loginLink}>Login</Text>
                    </TouchableOpacity>
                  </Text>
                </View>

                <View style={styles.loginLinkContainer}>
                  <Text style={styles.orLoginWithText}>
                    Dont have an account?{' '}
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Register')}>
                      <Text style={styles.loginLink}>Sign up</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}
