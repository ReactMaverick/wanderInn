import { LOGO, USER } from "@/constants/images";
import { styles } from "./Style";
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Pressable, Image, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/reducer/authReducer";

export default function HeaderScreen() {
    const shakeAnim = useRef(new Animated.Value(0)).current;  // Initial value for shake: 0

    const router = useRouter();
    const user = useSelector(selectUser);
    const shake = () => {
        Animated.sequence([
            Animated.timing(shakeAnim, { toValue: 5, duration: 200, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: -5, duration: 200, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 5, duration: 200, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 0, duration: 200, useNativeDriver: true })
        ]).start();
    }

    const rotateData = shakeAnim.interpolate({
        inputRange: [-1, 1],
        outputRange: ['-5deg', '5deg']
    })
    return (
        <View style={styles.container}>
            <View style={styles.LeftBar}>
                <Image style={styles.UserImg} source={USER} />
                <View style={styles.LeftBarContent}>
                    <Text style={styles.UserName}>{user.name}</Text>
                    <Text style={styles.UserLocation}>
                        Where are going today?
                    </Text>
                </View>
            </View>
            <Pressable style={styles.NotificationBtn}
                onPress={() => {
                    shake()
                    setTimeout(() => {
                        console.log(router);
                        router.navigate("notification");
                    }, 500);

                }}
            >
                <Animated.View style={{ transform: [{ rotate: rotateData }] }}>
                    <Ionicons name="notifications-outline" style={styles.NotificationIcon} />
                </Animated.View>
            </Pressable>

        </View>
    );
}