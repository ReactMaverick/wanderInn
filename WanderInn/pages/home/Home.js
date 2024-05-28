import { View, Text, ScrollView, Pressable, FlatList, RefreshControl } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/Header/Header';
import LocationSearchInputScreen from '@/components/locationSearchInput/locationSearchInput';
import { Link } from 'expo-router';
import NearByHotelsScreen from '@/components/NearByHotels/NearByHotels';
import PopularHotelsScreen from '@/components/PopularHotels/PopularHotels';
import BannerSliderScreen from '@/components/BannerSlider/BannerSlider';
import { commonStyles } from '@/constants/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFavoriteHotels, getFiveNearbyHotels, getFivePopularHotels, getHotels } from '@/redux/reducer/hotelReducer';
import Loader from '@/components/loader/Loader';
import * as Location from 'expo-location';

export default function HomePage() {
    const dispatch = useDispatch();
    const ItemSeparator = () => <View style={{ width: 20 }} />;
    const hotels = useSelector(state => state.hotel.hotels)
    const [location, setLocation] = useState(null)
    const [refreshing, setRefreshing] = useState(false);
    const [nearbyHotelLoading, setNearbyHotelLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const fivePopularHotels = useSelector(state => state.hotel.fivePopularHotels)
    const fiveNearbyHotels = useSelector(state => state.hotel.fiveNearbyHotels)

    // console.log('Favourite Hotels From Home==> ', favouriteHotels)
    // console.log('Hotels From Home==> ', hotels);
    // console.log('Five Popular Hotels From Home==> ', fivePopularHotels);
    // console.log('Five Nearby Hotels From Home==> ', fiveNearbyHotels);

    // get the location of the user
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        // console.log('Location==>', location);
        setLocation(location);
    }
    useEffect(() => {
        if (location) {
            dispatch(getFiveNearbyHotels(location))
                .then()
                .catch((error) => {
                    console.error('Error ==> ', error);
                    showToast('error', 'Something went wrong! Please try again later.');
                })
                .finally(() => {
                    setNearbyHotelLoading(false);
                });
        }

    }, [location])
    useEffect(() => {
        getLocation();
        Promise.all([
            // dispatch(getHotels()),
            dispatch(getFivePopularHotels()),
            dispatch(getFavoriteHotels())
            // Add more async actions here
        ])
            .then()
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
                // Handle the error appropriately
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);


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
                <View style={styles.LocSearchBox}>
                    <View style={styles.LocBoxDevider} />
                    <LocationSearchInputScreen />
                </View>
                <View style={styles.container}>
                    <View style={commonStyles.TitleRow}>
                        <Text style={commonStyles.Title}>Near by Hotels</Text>
                        <Pressable onPress={() => {
                            alert('See all Near by Hotels');
                        }}>
                            <Text style={commonStyles.ViewAll}>See all</Text>
                        </Pressable>
                    </View>
                </View>
                {fiveNearbyHotels.length > 0 ?
                    (<FlatList

                        keyExtractor={(item) => item._id}
                        ItemSeparatorComponent={ItemSeparator}
                        horizontal
                        data={fiveNearbyHotels}
                        renderItem={({ item }) => (<NearByHotelsScreen hotel={item} />)}
                    />)


                    : nearbyHotelLoading === false && fiveNearbyHotels.length === 0 ? (<Text>No Nearby Hotels Found</Text>)
                        : (<Loader />)
                }

                <View style={styles.container}>
                    <View style={commonStyles.TitleRow}>
                        <Text style={commonStyles.Title}>Popular Hotels</Text>
                        <Pressable onPress={() => {
                            alert('See all Popular Hotels');
                        }}>
                            <Text style={commonStyles.ViewAll}>See all</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={styles.PopularHotelsRow}>
                    {fivePopularHotels.length > 0 ? fivePopularHotels.map((hotel) => (
                        <PopularHotelsScreen key={hotel._id} hotel={hotel} screen='(tabs)' />
                    )) : (<Loader />)
                    }

                    {/* 
                    // <PopularHotelsScreen />
                    // <PopularHotelsScreen />
                    // <PopularHotelsScreen />
                    // <PopularHotelsScreen />
                    // <PopularHotelsScreen /> 
                    */}
                </View>
                <View style={[styles.container, { marginBottom: 20 }]}>
                    <BannerSliderScreen />
                </View>

            </ScrollView >
        </>
    );
}