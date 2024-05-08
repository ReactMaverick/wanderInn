import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomePage() {

    const router = useRouter();

    return <View
        style={styles.container}
    >
        <Text>Home page</Text>
        <Link href="/demoRoute">Go to demo route using link</Link>
        <TouchableOpacity onPress={() => {
            router.push('/demoRoute');
        }}>
            <Text>Go to demo route using router.push</Text>
        </TouchableOpacity>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});