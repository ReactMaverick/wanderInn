import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { styles } from './Style';

export default function LandingPage() {
    return (
        <View style={styles.container}>
            <Text>Landing Screen</Text>
            <Link href='/login'>Get Started</Link>
        </View>
    )
}