import { View, Text, ScrollView, Pressable, FlatList } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/Header/Header';
import LocationSearchInputScreen from '@/components/locationSearchInput/locationSearchInput';
import { Link } from 'expo-router';
import NearByHotelsScreen from '@/components/NearByHotels/NearByHotels';
import PopularHotelsScreen from '@/components/PopularHotels/PopularHotels';
import BannerSliderScreen from '@/components/BannerSlider/BannerSlider';
import { commonStyles } from '@/constants/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getFivePopularHotels, getHotels } from '@/redux/reducer/hotelReducer';

export default function HomePage() {
    const dispatch = useDispatch();
    const ItemSeparator = () => <View style={{ width: 20 }} />;
    const hotels= useSelector(state => state.hotel.hotels)
    const fivePopularHotels = useSelector(state => state.hotel.fivePopularHotels)
    // console.log('Hotels From Home==> ', hotels);
    console.log('Five Popular Hotels From Home==> ', fivePopularHotels);
    useEffect(() => {
        // dispatch(getHotels()).then((res) => {
        //     console.log('Hotels ==> ', res.payload);
            
        // })
        dispatch(getFivePopularHotels())
    }, []
    )
    return (
        <>
            <HeaderScreen />
            <ScrollView>
                <View style={styles.LocSearchBox}>
                    <View style={styles.LocBoxDevider} />
                    <LocationSearchInputScreen />
                </View>
                <View style={styles.container}>
                    <View style={commonStyles.TitleRow}>
                        <Text style={commonStyles.Title}>Near by Hotels</Text>
                        <Pressable onPress={() => {
                            alert('See all Near by Hotels');
                        }}>
                            <Text style={commonStyles.ViewAll}>See all</Text>
                        </Pressable>
                    </View>
                </View>
                <FlatList
                    ItemSeparatorComponent={ItemSeparator}
                    horizontal
                    data={[
                        { key: 'a' },
                        { key: 'b' },
                        { key: 'c' },
                        { key: 'd' },
                        { key: 'e' },
                        { key: 'f' },
                        { key: 'g' },
                        { key: 'h' },
                        { key: 'i' },
                        { key: 'j' },
                        { key: 'k' },
                        { key: 'l' },
                        { key: 'm' },
                        { key: 'n' },
                        { key: 'o' },
                        { key: 'p' },
                        { key: 'q' },
                        { key: 'r' },
                        { key: 's' },
                        { key: 't' },
                        { key: 'u' },
                        { key: 'v' },
                        { key: 'w' },
                        { key: 'x' },
                        { key: 'y' },
                        { key: 'z' },

                    ]}
                    renderItem={({ item }) => (<NearByHotelsScreen />)}
                />
                <View style={styles.container}>
                    <View style={commonStyles.TitleRow}>
                        <Text style={commonStyles.Title}>Popular Hotels</Text>
                        <Pressable onPress={() => {
                            alert('See all Popular Hotels');
                        }}>
                            <Text style={commonStyles.ViewAll}>See all</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={styles.PopularHotelsRow}>
                    {fivePopularHotels.map((hotel) => (
                        <PopularHotelsScreen key={hotel.id} hotel={hotel} />
                    ))}
                    {/* // <PopularHotelsScreen />
                    // <PopularHotelsScreen />
                    // <PopularHotelsScreen />
                    // <PopularHotelsScreen />
                    // <PopularHotelsScreen /> */}
                </View>
                <View style={[styles.container, { marginBottom: 20 }]}>
                    <BannerSliderScreen />
                </View>

            </ScrollView >
        </>
    );
}