import { styles } from "./Style";
import React, { useState } from 'react';
import { View, Text, Pressable, Image, TouchableOpacity, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { HOTEL, IMG1, IMG5 } from "@/constants/images";

export default function SimilarHotelsScreen() {
    const [isFav, setIsFav] = useState(false);

    const animateIcon = () => {
        setIsFav(!isFav);
    };
    return (

        <View style={styles.HotelCard}>
            <Pressable onPress={() => { alert('Hotel Clicked'); }}>
                <View style={styles.HotelCardImgBox}>
                    <View style={styles.CatagoryBox}>
                        <Text style={styles.CatagoryText}>40% Off</Text>
                    </View>
                    <Pressable
                        onPress={() => {
                            setIsFav(!isFav);
                        }}
                        style={styles.HeartIconBox}>
                        <AntDesign name={isFav ? "heart" : "hearto"} style={styles.HeartIcon} />
                    </Pressable>
                    <Image style={styles.HotelCardImg}
                        source={IMG5}
                    />

                </View>
            </Pressable>
            <View style={styles.HotelCardContent}>
                <View style={styles.HotelCardContentLeft}>
                    <View style={styles.HotelCardContentLeftTop}>
                        <Text style={styles.HotelCardTitle}>Hotel Blue House</Text>
                        <View style={styles.HotelLocation}>
                            <Ionicons name="location-sharp" style={styles.HotelLocationIcon} />
                            <Text style={styles.HotelLocationText}>New York, USA New York,</Text>
                        </View>
                    </View>
                    <View style={styles.HotelCardContentLeftBottom}>
                        <View style={styles.ReviewBox}>
                            <Ionicons name="star" style={styles.ReviewStar} />
                            <Text style={styles.ReviewText}>4.5</Text>

                        </View>
                        <Text style={styles.HotelCardLocation}>(4569 Peoples Reviews)</Text>
                    </View>

                </View>
                <View style={styles.HotelCardContentRight}>
                    <View style={styles.HotelCardPAckAge}>
                        <Text style={styles.HotelCardPAckPrice}>₹ 1,699</Text>
                        <Text style={styles.HotelCardPAckTime}>/ Night</Text>
                    </View>

                </View>
            </View>

        </View>

    );
}