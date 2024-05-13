import { View, Text, ScrollView, Pressable, FlatList } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/Header/Header';
import LocationSearchInputScreen from '@/components/locationSearchInput/locationSearchInput';
import { Link } from 'expo-router';
import NearByHotelsScreen from '@/components/NearByHotels/NearByHotels';

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

                    <View style={styles.TitleRow}>
                        <Text style={styles.Title}>Near by Hotels</Text>
                        <Pressable onPress={() => {
                            alert('View All');
                        }}>
                            <Text style={styles.ViewAll}>See all</Text>
                        </Pressable>
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
                </View>
            </ScrollView >
        </>
    );
}