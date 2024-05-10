import { LOGO } from "@/constants/images";
import { styles } from "./Style";
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, } from "react-native";

export default function CustomSplashScreen() {
    // Initial value for opacity: 0
    const positionAnim = useRef(new Animated.Value(600)).current; // Initial value for translateY: 1

    useEffect(() => {


        Animated.timing(
            positionAnim,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }, [])
    return (
        <View style={styles.container}>

            <Animated.Image style={{ ...styles.LogoImg, transform: [{ translateY: positionAnim }] }}
                source={LOGO}
            />
        </View>
    );
}