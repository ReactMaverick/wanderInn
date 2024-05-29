import { View, ScrollView, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/header/Header';
import PopularHotelsScreen from '@/components/nopularHotels/PopularHotels';


export default function AllHotelsPage() {

    return (
        <>
            <HeaderScreen />
            <ScrollView >
                <View style={styles.container}>
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                </View>
            </ScrollView >
        </>
    )
}