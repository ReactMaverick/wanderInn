import { Text, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import AllHotelsPage from '../../pages/allHotelsPage/AllHotelsPage'
import { getAllPopularHotels } from '@/redux/reducer/hotelReducer'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '@/components/loader/Loader';

export default function AllPopularHotels() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const allPopularHotels = useSelector(state => state.hotel.allPopularHotels);
    // useEffect(() => {
        console.log('AllPopularHotels ==> ', allPopularHotels);
    // }, [allPopularHotels]);
    useEffect(()=>{
        dispatch(getAllPopularHotels()).then().catch((error) => {}).finally(() => setLoading(false))}

    , [])
    return (
        <>
        {!loading && allPopularHotels.length>0 ? (
                <AllHotelsPage hotels={allPopularHotels} />
            ) : !loading?(
            <Loader/>
        ):(
            <Text> No Data Found </Text>
        )
    }
        </>
    )
  
}