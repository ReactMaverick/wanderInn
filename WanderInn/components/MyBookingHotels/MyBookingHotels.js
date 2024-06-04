import { styles } from "./Style";
import React, { useDebugValue, useState } from 'react';
import { View, Text, Pressable, Image, TouchableOpacity, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { HOTEL } from "@/constants/images";
import { useDispatch } from "react-redux";
import { cancelBooking } from "@/redux/reducer/hotelReducer";
import { showToast } from "@/constants/constants";

export default function MyBookingHotels({booking}) {
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();
    console.log("booking  ",booking)

    const animateIcon = () => {
        setIsFav(!isFav);
    };
    const cancelBookingClick = () => {
        // alert('Booking Cancelled');
        dispatch(cancelBooking({bookingId:booking._id})).then(()=>{
            showToast("success",'Booking Cancelled Successfully')
        }).catch((err)=>{})
        

    }
    return (

        <View style={styles.HotelCard}>
            <Pressable onPress={() => { alert('Hotel Clicked'); }}>
                <View style={styles.HotelCardImgBox}>
                    <View style={styles.CatagoryBox}>
                        <Text style={styles.CatagoryText}>40% Off</Text>
                    </View>
                    <Image style={styles.HotelCardImg}
                        source={HOTEL}
                    />

                </View>
            </Pressable>
            <View style={styles.HotelCardContent}>
                <View style={styles.HotelCardContentLeft}>
                    <View style={styles.HotelCardContentLeftTop}>
                        <Text style={styles.HotelCardTitle}>{booking.hotel.name}</Text>
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
                    <Pressable onPress={animateIcon} style={styles.HeartIconBox}>
                        <View>
                            <AntDesign name={isFav ? "heart" : "hearto"} style={styles.HeartIcon} />
                        </View>
                    </Pressable>
                    <View style={styles.HotelCardPAckAge}>
                        <Text style={styles.HotelCardPAckPrice}>₹ 1,699</Text>
                        <Text style={styles.HotelCardPAckTime}>/ Night</Text>
                    </View>

                </View>
            </View>
            <View style={styles.HotelCardContentNext}>
                <View style={styles.HotelCardLeft}>
                    <View style={styles.HotelCardTop}>
                        <Text style={styles.HotelCardSubTitle}>Booking Date</Text>
                        <Text style={styles.HotelCardTitle}>11 May, 2024</Text>
                    </View>
                    <View style={styles.HotelCardBottom}>
                        {/* button */}
                        <Pressable
                            onPress={() => { alert('Booked'); }}
                            style={styles.HotelCardButton}>
                            <Text style={styles.HotelCardButtonText}>{booking.status==='confirmed'? "Booked": "Cancelled"}</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.HotelCardRight}>
                    <View style={styles.HotelCardTop}>
                        <Text style={styles.HotelCardSubTitle}>Number Of Room</Text>
                        <Text style={styles.HotelCardTitle}>1 Room, 2 Guest</Text>
                    </View>
                    <View style={styles.HotelCardBottom}>
                        {/* button */}
                        {booking.status === 'confirmed' && <Pressable
                            onPress={cancelBookingClick}
                            style={styles.HotelCardButton2}>
                            <Text style={styles.HotelCardButton2Text}>Cancel</Text>
                        </Pressable>}
                        
                    </View>
                </View>
            </View>
        </View>

    );
}