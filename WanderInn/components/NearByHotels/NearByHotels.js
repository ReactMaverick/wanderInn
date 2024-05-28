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
import { useRouter } from "expo-router";
import { formatToOneDecimalPlace } from "@/common/common";
import { addToFavorite, removeFromFavorite } from "@/redux/reducer/hotelReducer";
import { useDispatch, useSelector } from "react-redux";

export default function  NearByHotelsScreen({hotel}) {
    const router = useRouter();
    const dispatch = useDispatch();
    const blinkValue = useRef(new Animated.Value(1)).current;
    const favouriteHotels = useSelector(state => state.hotel.favouriteHotels)
    const [isFav, setIsFav] = useState(false);
    // console.log('Hotel From NearByHotelsScreen==> ', hotel)
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
        if (!isFav) {
            dispatch(addToFavorite(hotel._id))
        } else {
            dispatch(removeFromFavorite(hotel._id))
        }
   
    };
    const checkHotelsInFavList = () => {
        let isHotelInFavList = false;
        favouriteHotels.map((favHotel) => {
            if (favHotel._id === hotel._id){
                isHotelInFavList = true;
            }
        })
        setIsFav(isHotelInFavList)
    }
    useEffect(() => {
        checkHotelsInFavList();
    }, [favouriteHotels])

    return (
        <Pressable onPress={() => {
            console.log('Hotel clicked');
            router.push(`/hotelsDetails/${hotel._id}`);
        }}>
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
                            <Text style={styles.ReviewText}>{formatToOneDecimalPlace(hotel.starRating)}</Text>
                            <Ionicons name="star" style={styles.ReviewStar} />
                        </View>
                    </BlurView>
                </View>
                <View style={styles.HotelCardContent}>
                    <View style={styles.HotelCardContentInner}>
                        <View style={styles.HotelCardTop}>
                            <Text style={styles.HotelCardTitle}>{hotel.name}</Text>
                            <View style={styles.HotelLocation}>
                                <Ionicons name="location-sharp" style={styles.HotelLocationIcon} />
                                <Text style={styles.HotelLocationText}>New York, USA New York,</Text>
                            </View>
                        </View>
                        <View style={styles.HotelCardRight}>
                            <Text style={styles.Hoteldistance}>Starting from</Text>
                            <Text style={styles.HotelPrice}>${hotel.lowestPriceRoom}/ Night</Text>
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