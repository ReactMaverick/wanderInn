import { View, Text, ScrollView, Pressable, RefreshControl, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/header/Header';
import { Link } from 'expo-router';
import MyBookingHotels from '@/components/myBookingHotels/MyBookingHotels';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsByUser } from '@/redux/reducer/hotelReducer';
import Loader from '@/components/loader/Loader';


export default function MyBookingPage() {
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.hotel.bookings)
    const [isLoading,setIsLoading]= useState(true)
    const [refreshing, setRefreshing] = useState(false);
    console.log("Booking : ",bookings)
    const bookingsByUserFetch=()=>{
        dispatch(getBookingsByUser()).then((result) => {

        }).catch((err) => {

        }).finally(() => {
            setIsLoading(false)
        })
    }
    useEffect(() => {
        bookingsByUserFetch()
    }, [])
    const onRefresh = () => {
        setRefreshing(true);
        setIsLoading(true);
        bookingsByUserFetch();

        // Simulate a network request
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };
    return (
        <>
            <HeaderScreen />
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.container}>
                    {bookings.length > 0 && !isLoading ? [...bookings]
                        .sort((a, b) => {
                            if (a.status === 'confirmed' ) return -1;
                            if (a.status !== 'confirmed') return 1;
                            
                        })
                    .map((booking, index) => (
                        <MyBookingHotels key={index} index={index} booking={booking} />
                    )) : isLoading ?

                        (<Loader />) 
                        : !isLoading && bookings.length === 0 ? (
                            <Text>No Booking Found</Text>
                    ):null
                    }
                    
                </View>
            </ScrollView >
        </>
    );
}