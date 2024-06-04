import { View, Text, ScrollView, Pressable, Image, Alert, FlatList, } from 'react-native';
import * as Progress from 'react-native-progress';
import { styles } from './Style';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { deviceHeight, deviceWidth, showToast } from '@/constants/constants';
import { useEffect, useState } from 'react';
import Loader from '@/components/loader/Loader';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsLoggedIn, selectUser } from '@/redux/reducer/authReducer';
import HeaderScreen from '@/components/header/Header';
import { ADD_CARD, ADD_CARD1, COUPONS, COUPONS1, FAQ, FAQ1, GIFT, GIFT1, INDIA, LOGOUT, LOGOUT1, TRIP, TRIP1, UPI, UPI1, USER, USERICON, USERICON1 } from '@/constants/images';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { commonStyles } from '@/constants/styles';
import SelectDropdown from '../../components/customSelectDrondown/SelectDropdown';
import { getToken } from '@/common/common';

export default function ProfilePage() {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    console.log('isLoggedIn in tabLayout ==> ', isLoggedIn);

    const user = useSelector(selectUser);
    console.log('user in tabLayout ==> ', user);
    const [selected, setSelected] = useState(null);

    const data = [
        { key: "1", value: "English" },
        { key: "2", value: "Hindi" },
        { key: "3", value: "Tamil" },
        { key: "4", value: "Telugu" },
        { key: "5", value: "Kannada" },
        { key: "6", value: "Malayalam" },
        { key: "7", value: "Gujarati" },
        { key: "8", value: "Marathi" },
        { key: "9", value: "Bengali" },
        { key: "10", value: "Punjabi" }
    ];

    const [selected1, setSelected1] = useState(null);
    const data1 = [
        { key: "1", value: "USD" },
        { key: "2", value: "INR" },
        { key: "3", value: "EUR" },
        { key: "4", value: "GBP" },
        { key: "5", value: "AUD" },
        { key: "6", value: "CAD" },
        { key: "7", value: "SGD" },
        { key: "8", value: "JPY" },
        { key: "9", value: "CNY" },
        { key: "10", value: "HKD" }
    ];


    // active class IconListItem //
    const [active, setActive] = useState(null);

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

                dispatch(logout());

                router.replace('login');

                setIsLoading(false);

                showToast('success', 'Logged out successfully');
            })
            .catch((error) => {
                console.error('Error logging out: ', error);

                showToast('error', 'Error logging out');

                setIsLoading(false);
            })
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
                                <Image source={user.image ? user.image : USER} style={styles.ProfileImage} />
                                <View style={styles.ProfileBoxProfile}>
                                    <Text style={styles.ProfileName}>{user?.name}</Text>
                                    <Text style={styles.ProfileEmail}>{user?.email}</Text>
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
                                <Text style={[styles.IconListText,
                                { color: active === 0 ? colors.primary : colors.darkColor }
                                ]}>Personal Info</Text>
                            </Pressable>
                            <Pressable
                                onPress={
                                    () => item1(1)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 1 ? TRIP : TRIP1
                                } style={styles.IconListIcon} />
                                <Text style={[styles.IconListText,
                                { color: active === 1 ? colors.primary : colors.darkColor }
                                ]}>My Trip</Text>
                            </Pressable>
                            <Pressable
                                onPress={
                                    () => item1(2)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 2 ? COUPONS : COUPONS1
                                } style={styles.IconListIcon} />
                                <Text style={[styles.IconListText,
                                { color: active === 2 ? colors.primary : colors.darkColor }
                                ]}>My Coupons</Text>
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
                                <Text style={[styles.IconListText,
                                { color: active === 3 ? colors.primary : colors.darkColor }
                                ]}>Saved Cards</Text>
                            </Pressable>
                            <Pressable
                                onPress={
                                    () => item1(4)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 4 ? UPI : UPI1
                                } style={styles.IconListIcon} />
                                <Text style={[styles.IconListText,
                                { color: active === 4 ? colors.primary : colors.darkColor }
                                ]}>UPI</Text>
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
                                ]}>My Gift Card</Text>
                            </Pressable>
                        </View>
                        <View style={styles.IconListBoxULnew}>
                            <Pressable
                                onPress={
                                    () => item1(6)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 6 ? ADD_CARD : ADD_CARD1
                                } style={styles.IconListIcon} />
                                <Text style={[styles.IconListText,
                                { color: active === 6 ? colors.primary : colors.darkColor }
                                ]}>Saved Cards</Text>
                            </Pressable>
                            <Pressable
                                onPress={
                                    () => item1(7)
                                }
                                style={styles.IconListItem}>
                                <Image source={
                                    active === 7 ? UPI : UPI1
                                } style={styles.IconListIcon} />
                                <Text style={[styles.IconListText,
                                { color: active === 7 ? colors.primary : colors.darkColor }
                                ]}>UPI</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.TitleRow}>
                        <Text style={commonStyles.Title}>Settings</Text>
                    </View>
                    <View style={styles.IconListBox1}>
                        {/* Language ,  Currency , Region select here */}
                        <View
                            style={styles.IconListItem1}>
                            <Text style={styles.IconListText}>Language</Text>
                            {/* select input with icon  */}
                            <SelectDropdown
                                data={data}
                                placeholder={"English"}
                                selected={selected}
                                setSelected={setSelected}
                                searchOptions={{
                                    cursorColor: colors.headlineColor,
                                    placeholderTextColor: colors.darkColor,
                                }}
                                searchBoxStyles={{
                                    borderWidth: 0,
                                    borderRadius: 5,
                                    width: deviceWidth / 5,
                                    height: deviceHeight / 20,
                                }}
                                dropdownStyles={{
                                    borderColor: colors.inputColor,
                                    borderWidth: 2,
                                    width: deviceWidth / 3.5,
                                    height: "fit-content"
                                }}
                            />
                        </View>
                        <View
                            style={styles.IconListItem1}>
                            <Text style={styles.IconListText}>Currency</Text>
                            <SelectDropdown
                                data={data1}
                                placeholder={"INR"}
                                selected={selected1}
                                setSelected={setSelected1}
                                searchOptions={{
                                    cursorColor: colors.headlineColor,
                                    placeholderTextColor: colors.darkColor,
                                }}
                                searchBoxStyles={{
                                    borderWidth: 0,
                                    borderRadius: 5,
                                    width: deviceWidth / 5,
                                    height: deviceHeight / 20,
                                }}
                                dropdownStyles={{
                                    borderColor: colors.inputColor,
                                    borderWidth: 2,
                                    width: deviceWidth / 3.5,
                                    height: "fit-content"
                                }}
                            />
                        </View>
                        <View
                            style={styles.IconListItem1}>
                            <Text style={styles.IconListText}>Region</Text>
                            <Image source={INDIA} style={styles.RegionImage} />
                        </View>

                    </View>
                    <Pressable
                        onPress={
                            () => item1(8)
                        }
                        style={styles.IconListItem}>
                        <Image source={
                            active === 8 ? FAQ : FAQ1
                        } style={styles.IconListIcon} />
                        <Text style={[styles.IconListText,
                        { color: active === 8 ? colors.primary : colors.darkColor }
                        ]}>FAQ</Text>
                    </Pressable>
                    <Pressable
                        onPress={

                            () => {
                                item1(9);
                                handleLogout();
                            }


                        }
                        style={styles.IconListItem}>
                        <Image source={
                            active === 9 ? LOGOUT : LOGOUT1
                        } style={styles.IconListIcon} />
                        <Text style={[styles.IconListText,
                        { color: active === 9 ? colors.primary : colors.darkColor }
                        ]}>Log Out</Text>
                    </Pressable>
                </View>

            </ScrollView >
        </>
    );
}   
