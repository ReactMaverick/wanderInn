import { Redirect, Slot, Stack, router } from 'expo-router';
import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

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

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoggedIn(true);
    //     }, 5000);
    // }, []);

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