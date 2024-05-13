import { showToast } from '@/constants/constants';
import { auth } from '@/firebaseConfig';
import { login, selectIsLoggedIn } from '@/redux/reducer/authReducer';
import { Redirect, Slot, Stack, router } from 'expo-router';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

const AuthStack = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="login"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="register"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="verifyOTP"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}

export default function AuthLayout() {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(selectIsLoggedIn);

    auth.onAuthStateChanged((user) => {
        if (user) {
            // console.log('User is logged in', user);
            if (user.emailVerified) {
                const userData = {
                    email: user.email,
                    uid: user.uid,
                };

                dispatch(login(userData));
            } else {
                console.log('User is not verified');
            }
        } else {
            console.log('User is logged out');
        }
    });
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoggedIn(true);
    //     }, 5000);
    // }, []);

    console.log('isLoggedIn ==> ', isLoggedIn);

    if (!isLoggedIn) {
        return (
            <>
                <AuthStack />
                <Toast />
            </>
        );
    }

    return (
        <>
            <Redirect href='/(tabs)' />
            <Toast />
        </>
    );
}