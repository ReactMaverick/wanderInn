import { View, Text, ScrollView, Pressable, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/header/Header';
import { Link } from 'expo-router';
import MyBookingHotels from '@/components/myBookingHotels/MyBookingHotels';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsByUser } from '@/redux/reducer/hotelReducer';


export default function MyBookingPage() {
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.hotel.bookings)
    const [isLoading,setIsLoading]= useState(false)
    console.log("Booking : ",bookings)
    useEffect(() => {
        dispatch(getBookingsByUser()).then((result) => {
            
        }).catch((err) => {
            
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])
    return (
        <>
            <HeaderScreen />
            <ScrollView>
                <View style={styles.container}>
                    {bookings.length > 0 ? bookings.map((booking, index) => (
                        <MyBookingHotels key={index} booking={booking} />
                    )) : !isLoading && bookings.length === 0 ? (
                            <Text>No Booking Found</Text>
                    )
                        : (<Loader/>
                        
                    )}
                    
                </View>
            </ScrollView >
        </>
    );
}