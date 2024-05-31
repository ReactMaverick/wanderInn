import { View, ScrollView, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/header/Header';
import PopularHotelsScreen from '@/components/nopularHotels/PopularHotels';


export default function AllHotelsPage({hotels}) {
    console.log('AllHotelsPage hotels==> ', hotels);
    
    return (
        <>
            <HeaderScreen />
            <ScrollView >
                <View style={styles.container}>
                    {hotels?.map((hotel, index) => {
                        return <PopularHotelsScreen key={index} hotel={hotel} />
                    } )}
                   
                </View>
            </ScrollView >
        </>
    )
}