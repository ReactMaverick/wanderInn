import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function RegisterScreen() {

    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
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
