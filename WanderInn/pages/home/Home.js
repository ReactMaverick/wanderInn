//Home 
import { View, Text, ScrollView, Pressable, FlatList, RefreshControl } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/header/Header';
import LocationSearchInputScreen from '@/components/locationSearchInput/locationSearchInput';
import { router, useRouter } from 'expo-router';
import NearByHotels from '@/components/nearByHotels/NearByHotels';  // Ensure the import path is correct
import PopularHotelsScreen from '@/components/nopularHotels/PopularHotels';
import BannerSliderScreen from '@/components/bannerSlider/BannerSlider';
import { commonStyles } from '@/constants/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFavoriteHotels, getFiveNearbyHotels, getFivePopularHotels } from '@/redux/reducer/hotelReducer';
import Loader from '@/components/loader/Loader';
import * as Location from 'expo-location';
import { showToast } from '@/constants/constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import HotelCardSkeleton from './SkeletonLoader';

export default function HomePage() {
    const dispatch = useDispatch();
    const ItemSeparator = () => <View style={{ width: 20 }} />;
    const hotels = useSelector(state => state.hotel.hotels);
    const [location, setLocation] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [nearbyHotelLoading, setNearbyHotelLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const fivePopularHotels = useSelector(state => state.hotel.fivePopularHotels);
    const fiveNearbyHotels = useSelector(state => state.hotel.fiveNearbyHotels);

    // get the location of the user
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        console.log("Location From Home==> ",location)
        let location = await Location.getCurrentPositionAsync({});
        // console.log("Location From Home==> ",location)
        setLocation(location);
    };

    const nearByHotelsFetch = async () => {
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
    }

    useEffect(() => {
        nearByHotelsFetch()
    }, [location]);

    useEffect(() => {
        getLocation();
        Promise.all([
            dispatch(getFivePopularHotels()),
            dispatch(getFavoriteHotels())
        ])
            .then()
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const onRefresh = () => {
        setRefreshing(true);
        setNearbyHotelLoading(true);
        nearByHotelsFetch();
        
        // Simulate a network request
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    };

    return (
        <>
            <HeaderScreen />
                

               
                {/* <GooglePlacesAutocomplete
                    placeholder='Enter your location'
                    fetchDetails={true}
                    textInputProps={{
                        // placeholderTextColor: commonColor.textColorDark,
                    }}

                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log('Data ==> ', data);
                        console.log('Details ==> ', details);
                        // const updatedErrorMessages = {};
                        // setErrors(updatedErrorMessages);
                        // setFormData({
                        //     ...formData,
                        //     lat: details.geometry.location.lat,
                        //     lng: details.geometry.location.lng,
                        //     location: details.formatted_address,
                        // });
                    }}
                    query={{
                        key: 'AIzaSyCWtZ3KuXxUu7_mCwL1O2PzotYEpsc4vLU',
                        language: 'en',
                    }}
                    styles={{
                        textInput: {
                            // backgroundColor: commonColor.backGroundColor,
                            // color: commonColor.white,
                            // fontSize: p,
                            marginLeft: 10,
                            width: '90%',
                        },
                        row: {
                            // backgroundColor: commonColor.backGroundColor,
                        },
                        description: {
                            // color: commonColor.text2Color,
                            // fontSize: p,
                        },
                        poweredContainer: {
                            // backgroundColor: commonColor.text2Color,
                        },
                        separator: {
                            // backgroundColor: commonColor.textColorDark,
                        },
                        listView: {
                            borderBottomWidth: 1,
                            // borderBottomColor: commonColor.textColorDark,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        },

                    }}
                // enablePoweredByContainer={false}

                /> */}
            
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                // showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <LocationSearchInputScreen />
                <View style={styles.LocSearchBox}>
                    <View style={styles.LocBoxDevider} />
                    
                </View>
                <View style={styles.container}>
                    <View style={commonStyles.TitleRow}>
                        <Text style={commonStyles.Title}>Near by Hotels</Text>
                        <Pressable onPress={() => {
                            router.push('/allNearbyHotels');
                        }}>
                            <Text style={commonStyles.ViewAll}>See all</Text>
                        </Pressable>
                    </View>
                </View>
                {/* nearby hotels part */}
                {fiveNearbyHotels.length > 0 && nearbyHotelLoading!==true && !errorMsg ?
                    (<FlatList
                        keyExtractor={(item, index) => item._id.toString()}
                        ItemSeparatorComponent={ItemSeparator}
                        horizontal
                        data={fiveNearbyHotels}
                        renderItem={({ item, index }) => (<NearByHotels hotel={item} index={index} />)}
                    />) : errorMsg ? (<Text>{errorMsg}</Text>)
                    : nearbyHotelLoading === false && fiveNearbyHotels.length === 0 ? 
                    (<Text>No Nearby Hotels Found</Text>)
                    : (<Loader />)
                }
                <View style={styles.container}>
                    <View style={commonStyles.TitleRow}>
                        <Text style={commonStyles.Title}>Popular Hotels</Text>
                        <Pressable onPress={() => {
                            // alert('See all Popular Hotels');
                            router.push('/allPopularHotels');
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
                </View>
                <View style={[styles.container, { marginBottom: 20 }]}>
                    <BannerSliderScreen />
                </View>
            </ScrollView>
        </>
    );
}
