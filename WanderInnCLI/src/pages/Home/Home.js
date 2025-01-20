import {
  Alert,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import HeaderScreen from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import {useEffect, useState} from 'react';
import {
  getFavoriteHotels,
  getFiveNearbyHotels,
  getFivePopularHotels,
} from '../../redux/reducer/hotelReducer';
import {useDispatch, useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {styles} from './Style';
import {commonStyles} from '../../constants/styles';
import LocationSearchInputScreen from '../../components/LocationSearchInputScreen/LocationSearchInputScreen';
import NearByHotels from '../../components/NearByHotels/NearByHotels';
import PopularHotels from '../../components/PopularHotels/PopularHotels';
import BannerSliderScreen from '../../components/BannerSlider/BannerSlider';
import {requestLocationAuthorization, requestLocationPermission} from '../../common/common';

export default function HomePage({navigation}) {
  const dispatch = useDispatch();
  const ItemSeparator = () => <View style={{width: 20}} />;
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
    Geolocation.getCurrentPosition(info => {
      setLocation(info);
    });
  };

  const nearByHotelsFetch = async () => {
    if (location) {
      dispatch(getFiveNearbyHotels(location))
        .then()
        .catch(error => {
          console.log('Error ==> ', error);
          showToast('error', 'Something went wrong! Please try again later.');
        })
        .finally(() => {
          setNearbyHotelLoading(false);
        });
    }
  };

  useEffect(() => {
    nearByHotelsFetch();
  }, [location]);

  console.log('Location home ======> ', location);

  useEffect(() => {
    const initialize = async () => {
      requestLocationPermission();
      // console.log("permissionGranted  ==> ", permissionGranted);

      await getLocation();

      Promise.all([
        dispatch(getFivePopularHotels()),
        dispatch(getFavoriteHotels()),
      ])
        .catch(error => {
          console.error('Error fetching hotel data: ', error);
        })
        .finally(() => setIsLoading(false));
    };

    initialize();
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
      <HeaderScreen navigation={navigation} />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        // showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <LocationSearchInputScreen navigation={navigation} />
        <View style={styles.LocSearchBox}>
          <View style={styles.LocBoxDevider} />
        </View>
        <View style={styles.container}>
          <View style={commonStyles.TitleRow}>
            <Text style={commonStyles.Title}>Near by Hotels</Text>
            <Pressable
              onPress={() => {
                navigation.navigate('AllNearByHotels');
              }}>
              <Text style={commonStyles.ViewAll}>See all</Text>
            </Pressable>
          </View>
        </View>
        {/* nearby hotels part */}
        {fiveNearbyHotels.length > 0 &&
        nearbyHotelLoading !== true &&
        !errorMsg ? (
          <FlatList
            keyExtractor={(item, index) => item._id.toString()}
            ItemSeparatorComponent={ItemSeparator}
            horizontal={true}
            data={fiveNearbyHotels}
            renderItem={({item, index}) => (
              <NearByHotels
                hotel={item}
                index={index}
                navigation={navigation}
              />
            )}
          />
        ) : errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : nearbyHotelLoading === false && fiveNearbyHotels.length === 0 ? (
          <Text>No Nearby Hotels Found</Text>
        ) : (
          <Loader />
        )}
        <View style={styles.container}>
          <View style={commonStyles.TitleRow}>
            <Text style={commonStyles.Title}>Popular Hotels</Text>
            <Pressable
              onPress={() => {
                // alert('See all Popular Hotels');
                navigation.navigate('Favourite');
              }}>
              <Text style={commonStyles.ViewAll}>See all</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.PopularHotelsRow}>
          {fivePopularHotels.length > 0 ? (
            fivePopularHotels.map(hotel => (
              <PopularHotels
                key={hotel._id}
                hotel={hotel}
                navigation={navigation}
              />
            ))
          ) : (
            <Loader />
          )}
        </View>
        <View style={[styles.container, {marginBottom: 20}]}>
          <BannerSliderScreen />
        </View>
      </ScrollView>
    </>
  );
}
