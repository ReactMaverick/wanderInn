import { Text } from 'react-native';
import AllHotelsPage from '../../pages/allHotelsPage/AllHotelsPage'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNearbyHotels } from '@/redux/reducer/hotelReducer';
import * as Location from 'expo-location';

export default function AllNearbyHotels() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const allNearbyHotels = useSelector(state => state.hotel.allNearbyHotels);
    const [location, setLocation] = useState(null);
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        setLocation(location);
    };
    const nearByHotelsFetch = async () => {
        console.log('location ==> ', location);
        if (location) {
            dispatch(getAllNearbyHotels(location))
                .then()
                .catch((error) => {
                    console.error('Error ==> ', error);
                    showToast('error', 'Something went wrong! Please try again later.');
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    useEffect(() => {
        getLocation();
    }, []);
    useEffect(() => {
        nearByHotelsFetch()
        
    }, [location]);
    
    // console.log('AllNearbyHotels ==> ', allNearbyHotels);
    return (
        <AllHotelsPage hotels={allNearbyHotels} />
        // <Text> All Hotels </Text>
    );
}