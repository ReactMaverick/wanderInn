import React, { useEffect, useState, useRef } from 'react';
import { View, ScrollView, Text, RefreshControl, Animated, Easing } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/header/Header';
import PopularHotelsScreen from '@/components/nopularHotels/PopularHotels';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteHotels } from '@/redux/reducer/hotelReducer';
import Loader from '@/components/loader/Loader';

export default function FavouritePage({ navigation }) {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const favouriteHotels = useSelector(state => state.hotel.favouriteHotels);
    const animations = useRef(favouriteHotels.map(() => new Animated.Value(0))).current;

    useEffect(() => {
        getFavouriteHotels();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            startAnimations();
        }
    }, [isLoading]);

    const getFavouriteHotels = async () => {
        dispatch(getFavoriteHotels())
            .then()
            .catch()
            .finally(() => setLoading(false));
    };

    const startAnimations = () => {
        favouriteHotels.forEach((_, index) => {
            Animated.timing(animations[index], {
                toValue: 1,
                duration: 300,
                delay: index * 200, // Adjust delay for staggered effect
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }).start();
        });
    };

    const onRefresh = () => {
        setRefreshing(true);
        setLoading(true);
        getFavouriteHotels();
        // Simulate a network request
        setTimeout(() => {
            setRefreshing(false);
        }, 2000); // Adjust the timeout as needed
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
                    {isLoading ? (
                        <Loader />
                    ) : favouriteHotels.length === 0 ? (
                        <Text>No Favourite Hotels</Text>
                    ) : (
                        favouriteHotels.map((hotel, index) => (
                            <Animated.View
                                key={index}
                                style={{
                                    opacity: animations[index],
                                    transform: [
                                        {
                                            translateY: animations[index].interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [20, 0], // Adjust the vertical movement
                                            }),
                                        },
                                    ],
                                }}
                            >
                                <PopularHotelsScreen hotel={hotel} screen='(tabs)/favourite' />
                            </Animated.View>
                        ))
                    )}
                </View>
            </ScrollView>
        </>
    );
}
