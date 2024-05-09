import { Redirect, Slot, Stack, router } from 'expo-router';
import { useEffect, useState } from 'react';

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
                name="register"
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
            <AuthStack />
        );
    }

    return (
        <Redirect href='/(tabs)' />
    );
}