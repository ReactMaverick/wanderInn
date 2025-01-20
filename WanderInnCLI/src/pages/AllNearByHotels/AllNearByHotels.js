import {Alert, ScrollView, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AllHotelsPage from '../../components/AllHotelPage/AllHotelPage';
import {getAllNearbyHotels} from '../../redux/reducer/hotelReducer';
import {showToast} from '../../constants/constants';
import Geolocation from '@react-native-community/geolocation';
import Loader from '../../components/Loader/Loader';
import HeaderScreen from '../../components/Header/Header';
import {styles} from './Style';
import PopularHotels from '../../components/PopularHotels/PopularHotels';

export default function AllNearbyHotels({navigation}) {
  console.log('**************Hello From AllNearByHotels**********************');

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const allNearbyHotels = useSelector(state => state.hotel.allNearbyHotels);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [limit,setLimit] = useState(2);
  const [location, setLocation] = useState(null);
  const getLocation = async () => {
    Geolocation.getCurrentPosition(info => {
      setLocation(info);
    });
  };

  const nearByHotelsFetch = async () => {
    if (location) {
      dispatch(getAllNearbyHotels({location: location, page, limit: '2'}))
        .then(e => {
          setTotalPages(e.payload.pagination.totalPages);
        })
        .catch(error => {
          console.error('Error ==> ', error);
          showToast('error', 'Something went wrong! Please try again later.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    if (location) {
      nearByHotelsFetch();
    }
  }, [location, page]);

  console.log('AllNearbyHotels ==> ', allNearbyHotels);

  if (loading) {
    return <Text>Loading nearby hotels...</Text>;
  }
  return (
    <>
      <HeaderScreen navigation={navigation} />
      {!loading && allNearbyHotels.length > 0 ? (
        // <AllHotelsPage hotels={allNearbyHotels} navigation={navigation} />
        <>
          <ScrollView>
            <View style={styles.container}>
              {allNearbyHotels?.map((hotel, index) => (
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
        <Text>No Data Found</Text>
      )}
    </>
    // <Text> All Hotels </Text>
  );
}
