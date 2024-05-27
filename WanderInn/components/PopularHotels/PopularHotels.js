import { colors } from "@/constants/colors";
import { styles } from "./Style";
import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Text, Pressable, Image, Animated, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { commonStyles } from "../../constants/styles";
import { HOTEL1, } from "@/constants/images";
import { BlurView } from 'expo-blur';

export default function PopularHotelsScreen({key,hotel}) {

    const [isFav, setIsFav] = useState(false);

    const animateIcon = () => {
        setIsFav(!isFav);
    }
    console.log('Hotel From PopularHotels==> ', hotel)

    return (
        <Pressable key={key} onPress={() => { alert('Hotel Clicked'); }}>
            <View style={styles.HotelCard}>
                <View style={styles.HotelCardImgBox}>
                    <View style={styles.CatagoryBox}>
                        <Text style={styles.CatagoryText}>40% Off</Text>
                    </View>
                    <Image style={styles.HotelCardImg}
                        source={HOTEL1}
                    />
                </View>
                <View style={styles.HotelCardContent}>
                    <View style={styles.HotelCardContentLeft}>
                        <View style={styles.HotelCardContentLeftTop}>
                            <Text style={styles.HotelCardTitle}>{hotel.name}</Text>
                            <View style={styles.HotelLocation}>
                                <Ionicons name="location-sharp" style={styles.HotelLocationIcon} />
                                <Text style={styles.HotelLocationText}>New York, USA New York,</Text>
                            </View>
                        </View>
                        <View style={styles.HotelCardContentLeftBottom}>
                            <View style={styles.ReviewBox}>
                                <Ionicons name="star" style={styles.ReviewStar} />
                                <Text style={styles.ReviewText}>{hotel.starRating}</Text>
                            </View>
                            <Text style={styles.HotelCardLocation}>(4569 Peoples Reviews)</Text>
                        </View>

                    </View>
                    <View style={styles.HotelCardContentRight}>
                        <Pressable onPress={animateIcon} style={styles.HeartIconBox}>
                            <View>
                                <AntDesign name={isFav ? "heart" : "hearto"} style={styles.HeartIcon} />
                            </View>
                        </Pressable>
                        <View style={styles.HotelCardPAckAge}>
                            <Text style={styles.HotelCardPAckPrice}>$23</Text>
                            <Text style={styles.HotelCardPAckTime}>/ Night</Text>
                        </View>

                    </View>
                </View>
            </View>
        </Pressable>
    );
}