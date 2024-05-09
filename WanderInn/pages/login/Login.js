import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { styles } from './Style';

export default function LoginPage() {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Link href='/register'>Register</Link>
        </View>
    )
}