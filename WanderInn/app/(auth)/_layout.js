import { login, selectIsLoggedIn } from '@/redux/reducer/authReducer';
import { Redirect, Slot, Stack, router } from 'expo-router';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';

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
            <Stack.Screen
                name="forgotPassword"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}

export default function AuthLayout() {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        setTimeout(() => {
            // setIsLoggedIn(true);
        }, 5000);
    }, []);

    // console.log('isLoggedIn ==> ', isLoggedIn);

    if (!isLoggedIn) {
        return (
            <>
                <AuthStack />

            </>
        );
    } else return (
        <>
            <Redirect href='/(tabs)' />
            
        </>
    );
}