import {Alert, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AllHotelsPage from '../../components/AllHotelPage/AllHotelPage';
import {getAllNearbyHotels} from '../../redux/reducer/hotelReducer';
import {showToast} from '../../constants/constants';
import Geolocation from '@react-native-community/geolocation';

export default function AllNearbyHotels() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const allNearbyHotels = useSelector(state => state.hotel.allNearbyHotels);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [limit,setLimit] = useState(2);
  const [location, setLocation] = useState(null);
  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log('Position From Home==> ', position);
        setLocation(position);
      },
      error => {
        console.error(error);
        Alert.alert('Error', 'Could not fetch location.');
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
    console.log('Location From Home==> ', location);
  };
  const nearByHotelsFetch = async () => {
    console.log('location ==> ', location);
    if (location) {
      dispatch(getAllNearbyHotels({location, page, limit: '2'}))
        .then(e => {
          // console.log('AllNearbyHotels ==> ', e.payload.pagination.totalPages)
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
    nearByHotelsFetch();
  }, [location, page]);

  // console.log('AllNearbyHotels ==> ', allNearbyHotels);
  return (
    <AllHotelsPage
      hotels={allNearbyHotels}
      page={page}
      totalPages={totalPages}
      setPage={setPage}
    />
    // <Text> All Hotels </Text>
  );
}
