import { View, Text, ScrollView, Pressable, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/Header/Header';
import { Link } from 'expo-router';
export default function MyBookingPage() {
    const ItemSeparator = () => <View style={{ width: 20 }} />;
    return (
        <>
            <HeaderScreen />
            <ScrollView>
                <View style={styles.container}>

                </View>
            </ScrollView >
        </>
    );
}