import { Link, router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function LoginScreen() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Link href='/register'>Register</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
