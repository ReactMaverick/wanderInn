import { View, ScrollView, Text, RefreshControl, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/Header/Header';
import PopularHotelsScreen from '@/components/PopularHotels/PopularHotels';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFavoriteHotels } from '@/redux/reducer/hotelReducer';
import Loader from '@/components/loader/Loader';


export default function FavouritePage({ navigation }) {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true)

    const [refreshing, setRefreshing] = useState(false);
    const favouriteHotels = useSelector(state => state.hotel.favouriteHotels)
    console.log('Favourite Hotels From FavouritePage==> ', favouriteHotels)
    useEffect(() => {
        dispatch(getFavoriteHotels())
            .then()
            .catch()
            .finally(() => setLoading(false))
    }, [])
    const onRefresh = () => {
        setRefreshing(true);
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
                    {isLoading === false && favouriteHotels.length === 0 ? (
                        <Text>No Favourite Hotels</Text>
                    ) : isLoading ? (
                        <Loader />
                    ) : (
                        favouriteHotels.map((hotel, index) => (
                            <PopularHotelsScreen key={index} hotel={hotel} screen='(tabs)/favourite' />
                        ))

                        // <PopularHotelsScreen />
                        // <PopularHotelsScreen />
                        // <PopularHotelsScreen />
                        // <PopularHotelsScreen />

                    )
                    }
                </View>
            </ScrollView >
        </>
    );
}