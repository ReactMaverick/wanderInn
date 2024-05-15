import { colors } from "@/constants/colors";
import { styles } from "./Style";
import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Text, Pressable, Image, Animated, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { commonStyles } from "../../constants/styles";
import { HOTEL, USER1, USER2, USER3, USER4, USER5 } from "@/constants/images";
import { BlurView } from 'expo-blur';

export default function NearByHotelsScreen() {
    const blinkValue = useRef(new Animated.Value(1)).current;
    const [isFav, setIsFav] = useState(false);

    const animateIcon = () => {
        setIsFav(!isFav);
        Animated.sequence([
            Animated.timing(blinkValue, {
                toValue: 0,
                duration: 1000,
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

                    <BlurView
                        intensity={80}
                        tint="dark"
                        style={styles.HotelCardReviewbox}>
                        <View style={styles.HotelCardReview}>
                            <Text style={styles.HotelCardReviewText}>15k+ People Reviews</Text>
                            <View style={styles.UsersGroupImgs}>
                                <Image style={styles.UsersGroupImg}
                                    source={USER1}
                                />
                                <Image style={styles.UsersGroupImg}
                                    source={USER2}
                                />

                                <Image style={styles.UsersGroupImg}
                                    source={USER4}
                                />
                                <View style={styles.UsersGroupImgPlusBox}>
                                    <Image style={styles.UsersGroupImgPlus}
                                        source={USER5}
                                    />
                                    <View style={styles.UsersOverlay}>
                                        <Text style={styles.UsersGroupImgText}>+</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.ReviewBox}>
                            <Text style={styles.ReviewText}>4.5</Text>
                            <Ionicons name="star" style={styles.ReviewStar} />
                        </View>
                    </BlurView>
                </View>
                <View style={styles.HotelCardContent}>
                    <View style={styles.HotelCardContentInner}>
                        <View style={styles.HotelCardTop}>
                            <Text style={styles.HotelCardTitle}>Hotel Linda Place</Text>
                            <View style={styles.HotelLocation}>
                                <Ionicons name="location-sharp" style={styles.HotelLocationIcon} />
                                <Text style={styles.HotelLocationText}>New York, USA New York, New York, USA New York,  </Text>
                            </View>
                        </View>
                        <View style={styles.HotelCardRight}>
                            <Text style={styles.Hoteldistance}>Starting from</Text>
                            <Text style={styles.HotelPrice}>$23/ Night</Text>
                        </View>
                    </View>
                    {/* offer box */}
                    <View style={styles.DistanceBox}>
                        <Text style={styles.DistanceText}>2 km from central</Text>
                        <View style={styles.OfferBox}>
                            <Text style={styles.OfferText}>50% off</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.HotelCardBottom}>
                    <Text style={styles.HotelCardBottomText}>15 peoples booked today</Text>
                </View>
            </View>
        </Pressable>
    );
}