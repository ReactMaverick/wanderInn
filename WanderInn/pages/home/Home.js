import { View, Text, ScrollView, Pressable, FlatList } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/Header/Header';
import LocationSearchInputScreen from '@/components/locationSearchInput/locationSearchInput';
import { Link } from 'expo-router';
import NearByHotelsScreen from '@/components/NearByHotels/NearByHotels';
import PopularHotelsScreen from '@/components/PopularHotels/PopularHotels';
import BannerSliderScreen from '@/components/BannerSlider/BannerSlider';
import { commonStyles } from '@/constants/styles';

export default function HomePage() {
    const ItemSeparator = () => <View style={{ width: 20 }} />;
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
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                    <PopularHotelsScreen />
                </View>
                <View style={[styles.container, { marginBottom: 20 }]}>
                    <BannerSliderScreen />
                </View>

            </ScrollView >
        </>
    );
}