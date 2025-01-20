import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Text,
  RefreshControl,
  Animated,
  Easing,
} from 'react-native';
import {styles} from './Style';
import HeaderScreen from '../../components/Header/Header';
import PopularHotels from '../../components/PopularHotels/PopularHotels';
import {useDispatch, useSelector} from 'react-redux';
import {getFavoriteHotels} from '../../redux/reducer/hotelReducer';
import Loader from '../../components/Loader/Loader';

export default function FavouritePage({navigation}) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const favouriteHotels = useSelector(state => state.hotel.favouriteHotels);
  const animations = useRef(
    favouriteHotels.map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    getFavouriteHotels();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      startAnimations();
    }
  }, [isLoading]);

  useEffect(() => {
    if (refreshing) {
      resetAnimations();
    }
  }, [refreshing]);

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

  const resetAnimations = () => {
    favouriteHotels.forEach((_, index) => {
      animations[index].setValue(0);
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
      <HeaderScreen navigation={navigation} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
                }}>
                <PopularHotels hotel={hotel} navigation={navigation} />
              </Animated.View>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
}
