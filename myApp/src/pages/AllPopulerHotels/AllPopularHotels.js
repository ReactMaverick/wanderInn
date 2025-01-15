import {Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import AllHotelsPage from '../../components/AllHotelPage/AllHotelPage';
import {getAllPopularHotels} from '../../redux/reducer/hotelReducer';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/Loader/Loader';

export default function AllPopularHotels({ navigation }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const allPopularHotels = useSelector(state => state.hotel.allPopularHotels);
  // useEffect(() => {
  console.log('AllPopularHotels ==> ', allPopularHotels);
  // }, [allPopularHotels]);
  useEffect(() => {
    dispatch(getAllPopularHotels())
      .then()
      .catch(error => {})
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {!loading && allPopularHotels.length > 0 ? (
        <AllHotelsPage hotels={allPopularHotels} navigation={navigation} />
      ) : !loading ? (
        <Loader />
      ) : (
        <Text> No Data Found </Text>
      )}
    </>
  );
}
