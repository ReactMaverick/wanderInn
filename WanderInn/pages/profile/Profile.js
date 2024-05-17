import { View, Text, ScrollView, Pressable, Image, Alert, FlatList, } from 'react-native';
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
import { ADD_CARD, ADD_CARD1, COUPONS, COUPONS1, GIFT, GIFT1, TRIP, TRIP1, UPI, UPI1, USER, USERICON, USERICON1 } from '@/constants/images';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/constants/colors';

export default function ProfilePage() {
    // active class IconListItem //
    const [active, setActive] = useState(0);

    const item1 = (index) => {
        setActive(index);
    }


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

                            <Pressable style={styles.EditProfileBtn}
                                onPress={() => {
                                    Alert.alert('Edit Profile', 'Do you want to edit your profile?', [
                                        {
                                            text: 'Cancel',
                                            onPress: () => console.log('Cancel Pressed'),
                                            style: 'cancel'
                                        },
                                        {
                                            text: 'Edit',
                                            onPress: () => console.log('Edit Pressed')
                                        }
                                    ]);
                                }}
                            >
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
                    <View style={styles.IconListBox}>
                        <View style={styles.IconListBoxUL}>
                            <Pressable
                                onPress={
                                    () => item1(0)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 0 ? USERICON : USERICON1
                                } style={styles.IconListIcon} />
                                <Text style={styles.IconListText}>Personal Info</Text>
                            </Pressable>
                            <Pressable
                                onPress={
                                    () => item1(1)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 1 ? TRIP : TRIP1
                                } style={styles.IconListIcon} />
                                <Text style={styles.IconListText}>Profile</Text>
                            </Pressable>
                            <Pressable
                                onPress={
                                    () => item1(2)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 2 ? COUPONS : COUPONS1
                                } style={styles.IconListIcon} />
                                <Text style={styles.IconListText}>Profile</Text>
                            </Pressable>
                        </View>
                        <View style={styles.IconListBoxUL}>
                            <Pressable
                                onPress={
                                    () => item1(3)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 3 ? ADD_CARD : ADD_CARD1
                                } style={styles.IconListIcon} />
                                <Text style={styles.IconListText}>Profile</Text>
                            </Pressable>
                            <Pressable
                                onPress={
                                    () => item1(4)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 4 ? UPI : UPI1
                                } style={styles.IconListIcon} />
                                <Text style={[styles.IconListText]}>Profile</Text>
                            </Pressable>
                            <Pressable
                                onPress={
                                    () => item1(5)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 5 ? GIFT : GIFT1
                                } style={styles.IconListIcon} />
                                <Text style={[styles.IconListText,
                                { color: active === 5 ? colors.primary : colors.darkColor }
                                ]}>Profile</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

            </ScrollView >
        </>
    );
}   
