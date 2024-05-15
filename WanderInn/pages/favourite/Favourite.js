import { View, ScrollView, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/Header/Header';
import PopularHotelsScreen from '@/components/PopularHotels/PopularHotels';


export default function FavouritePage() {
    return (
        <>
            <HeaderScreen />
            <ScrollView>
                <View style={styles.container}>
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                </View>
            </ScrollView >
        </>
    );
}