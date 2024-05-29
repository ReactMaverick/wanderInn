import { View, Text, ScrollView, Pressable, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/header/Header';
import { Link } from 'expo-router';
import MyBookingHotelsScreen from '@/components/myBookingHotels/MyBookingHotels';


export default function MyBookingPage() {

    return (
        <>
            <HeaderScreen />
            <ScrollView>
                <View style={styles.container}>
                    <MyBookingHotelsScreen />
                    <MyBookingHotelsScreen />
                    <MyBookingHotelsScreen />
                    <MyBookingHotelsScreen />
                    <MyBookingHotelsScreen />
                    <MyBookingHotelsScreen />
                </View>
            </ScrollView >
        </>
    );
}