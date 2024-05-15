import { View, Text, ScrollView, Pressable, Image, Alert, } from 'react-native';
import * as Progress from 'react-native-progress';
import { styles } from './Style';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { deviceHeight, showToast } from '@/constants/constants';
import { useState } from 'react';
import Loader from '@/components/loader/Loader';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/reducer/authReducer';
import HeaderScreen from '@/components/Header/Header';
import { USER } from '@/constants/images';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

export default function ProfilePage() {

    const router = useRouter();

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                console.log('User logged out');

                showToast('success', 'Logged out successfully');

                dispatch(logout());

                router.replace('login');
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
        <>
            <HeaderScreen />
            <ScrollView>
                <View style={styles.LocSearchBox}>
                    <View style={styles.LocBoxDevider} />
                    <View style={styles.ProfileBoxOuter}>
                        <View style={styles.ProfileBoxTop}>
                            <View style={styles.ProfileBoxTopLeft}>
                                <Image source={USER} style={styles.ProfileImage} />
                                <View style={styles.ProfileBoxProfile}>
                                    <Text style={styles.ProfileName}>Jenny Wilson</Text>
                                    <Text style={styles.ProfileEmail}>jenny.wilson@example.com</Text>
                                </View>
                            </View>
                            {/* edit icon button  */}

                            <Pressable style={styles.EditProfileBtn} onPress={() => Alert('editProfile')}>
                                <Feather name="edit-3" style={styles.EditProfileIcon} />
                            </Pressable>

                        </View>
                        <View style={styles.ProfileBoxBottom}>
                            <View style={styles.ProgressBarArea}>
                                <View style={styles.ProgressBarAreaText}>
                                    <Text style={[styles.ProgressBarText, { color: colors.secondary }]}>72%</Text>
                                    <Text style={styles.ProgressBarText}>Completed</Text>
                                </View>
                                <View style={styles.ProgressBar}>
                                    <Progress.Bar
                                        animated={true}
                                        height={deviceHeight / 80}  // Height of the progress bar
                                        progress={0.7}
                                        width={null} // Use null to stretch the bar to the full width of its container
                                        color={colors.secondary} // Color of the progress bar
                                        unfilledColor={colors.lightBlue} // Color of the unfilled area
                                        borderWidth={0} // Remove border
                                        borderRadius={10} // Rounded corners of the bar
                                    />
                                    <Text style={styles.ProgressBarAdd}>Add Number</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>

                </View>

            </ScrollView >
        </>
    );
}   
