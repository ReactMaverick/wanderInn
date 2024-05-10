import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { showToast } from '@/constants/constants';
import { useState } from 'react';
import Loader from '@/components/loader/Loader';
import { useRouter } from 'expo-router';

export default function ProfilePage() {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                console.log('User logged out');

                showToast('success', 'Logged out successfully');

                router.push('login');
            })
            .catch((error) => {
                console.error('Error logging out: ', error);

                showToast('error', 'Error logging out');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <TouchableOpacity
                onPress={handleLogout}
            >
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}