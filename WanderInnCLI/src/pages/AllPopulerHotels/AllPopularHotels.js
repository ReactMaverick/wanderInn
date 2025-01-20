import {ScrollView, Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import AllHotelsPage from '../../components/AllHotelPage/AllHotelPage';
import {getAllPopularHotels} from '../../redux/reducer/hotelReducer';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/Loader/Loader';
import HeaderScreen from '../../components/Header/Header';
import PopularHotels from '../../components/PopularHotels/PopularHotels';
import {styles} from './Style';

export default function AllPopularHotels({navigation}) {
  console.log('**************Hello from AllPopularHotels************');

  // const dispatch = useDispatch();
  // const [loading, setLoading] = useState(true);
  // const allPopularHotels = useSelector(state => state.hotel.allPopularHotels);
  // // useEffect(() => {
  // console.log('AllPopularHotels check ==> ', allPopularHotels);
  // // }, [allPopularHotels]);
  // console.log('Loading state after fetch: ', loading);
  
  // useEffect(() => {
  //   console.log('Loading state before fetch: ', loading);
  //   dispatch(getAllPopularHotels())
  //     .then()
  //     .catch(error => {})
  //     .finally(() => setLoading(false));
  // }, []);
  return (
    <>
      {/* <HeaderScreen navigation={navigation} />
      {!loading && allPopularHotels.length > 0 ? (
        // <AllHotelsPage hotels={allPopularHotels} navigation={navigation} />
        <>
          <ScrollView>
            <View style={styles.container}>
              {allPopularHotels?.map((hotel, index) => (
                <PopularHotels
                  key={index}
                  hotel={hotel}
                  navigation={navigation}
                />
              ))}
            </View>
          </ScrollView>
        </>
      ) : !loading ? (
        <Loader />
      ) : (
        <Text> No Data Found </Text>
      )} */}
      <Text>sffdsdf</Text>
    </>
  );
}
