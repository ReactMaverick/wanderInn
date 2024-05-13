import { colors } from "@/constants/colors";
import { styles } from "./Style";
import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Text, Pressable, Image, Animated, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { commonStyles } from "../../constants/styles";
import { HOTEL } from "@/constants/images";

export default function NearByHotelsScreen() {
    const blinkValue = useRef(new Animated.Value(1)).current;
    const [isFav, setIsFav] = useState(false);

    const animateIcon = () => {
        setIsFav(!isFav);
        Animated.sequence([
            Animated.timing(blinkValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(blinkValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    };
    return (
        <Pressable onPress={() => { alert('Hotel Clicked'); }}>
            <View style={styles.HotelCard}>
                <View style={styles.HotelCardImgBox}>
                    <View style={styles.CatagoryBox}>
                        <Text style={styles.CatagoryText}>Trending</Text>
                    </View>
                    <Pressable onPress={animateIcon} style={styles.HeartIconBox}>
                        <Animated.View style={{ opacity: blinkValue }}>
                            <AntDesign name={isFav ? "heart" : "hearto"} style={styles.HeartIcon} />
                        </Animated.View>
                    </Pressable>
                    <Image style={styles.HotelCardImg}
                        source={HOTEL}
                    />
                    <View>

                    </View>
                </View>
                <View style={styles.HotelCardContent}>
                    <Text style={styles.HotelCardTitle}>Hotel Name</Text>
                    <Text style={styles.HotelCardLocation}>Location</Text>
                </View>
            </View>
        </Pressable>
    );
}