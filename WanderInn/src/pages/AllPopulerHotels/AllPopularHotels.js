import { ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getAllPopularHotels } from '../../redux/reducer/hotelReducer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import HeaderScreen from '../../components/Header/Header';
import PopularHotels from '../../components/PopularHotels/PopularHotels';
import { styles } from './Style';

export default function AllPopularHotels({ navigation }) {
  // console.log('**************Hello from AllPopularHotels**************');

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const allPopularHotels = useSelector(state => state.hotel.allPopularHotels);
  // useEffect(() => {
  // console.log('AllPopularHotels check ==> ', allPopularHotels);
  // }, [allPopularHotels]);
  // console.log('Loading state after fetch: ', loading);

  useEffect(() => {
    // console.log('Loading state before fetch: ', loading);
    dispatch(getAllPopularHotels({}))
      .then()
      .catch(error => { })
      .finally(() => setLoading(false));
  }, [dispatch]);
  return (
    <>
      <HeaderScreen navigation={navigation} />
      {loading ? (
        <Loader />
      ) : allPopularHotels.length > 0 ? (
        <ScrollView>
          <View style={styles.container}>
            {allPopularHotels.map(hotel => (
              <PopularHotels
                key={hotel._id}
                hotel={hotel}
                navigation={navigation}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No Data Found</Text>
        </View>
      )}
      {/* <View
        style={{
          backgroundColor: 'red',
          height: '100%',
          width: '100%',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>HHHHH</Text>
      </View> */}
    </>
  );
}
