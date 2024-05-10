import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { styles } from './Style';

export default function LandingPage() {
    return (
        <View style={styles.container}>
            <View style={styles.TextTitle}>
                <Text style={styles.heading}>explore</Text>
                <Text style={styles.heading}>to endlessly</Text>
                <Text style={styles.heading}>with WanderInn</Text>
            </View>

            <Link href='/login'>Get Started</Link>
        </View>
    )
}