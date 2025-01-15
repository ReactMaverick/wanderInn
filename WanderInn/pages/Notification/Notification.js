import { View, ScrollView, Pressable, Text, Image, Animated, } from 'react-native';
import { styles } from './Style';
import HeaderScreen from '@/components/Header/Header';
import { useState, useEffect, useRef } from 'react';
import { USER } from '@/constants/images';
import Notification from '@/components/Notification/Notification';
import MyBookingHotelsScreen from '@/components/MyBookingHotels/MyBookingHotels';


export default function NotificationPage() {
    // active color for the tab
    const [activeTab, setActiveTab] = useState('All');
    // fade animation for notification box
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);


    return (
        <>
            <HeaderScreen />
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.CustomTabsBtn}>
                        <Pressable style={[activeTab === 'All' ? styles.activeTabBtn : styles.CustomTabBtn]}
                            onPress={() => {
                                setActiveTab('All');
                            }}
                        >
                            <Text style={[activeTab === 'All' ? styles.activeTabBtnText : styles.CustomTabText]}>All</Text>
                        </Pressable>
                        <Pressable style={[activeTab === 'Today' ? styles.activeTabBtn : styles.CustomTabBtn]}
                            onPress={() => { setActiveTab('Today'); }}
                        >
                            <Text style={[activeTab === 'Today' ? styles.activeTabBtnText : styles.CustomTabText]}>Today</Text>
                        </Pressable>
                        <Pressable style={[activeTab === 'Offer' ? styles.activeTabBtn : styles.CustomTabBtn]}
                            onPress={() => { setActiveTab('Offer'); }}
                        >
                            <Text style={[activeTab === 'Offer' ? styles.activeTabBtnText : styles.CustomTabText]}>Offer</Text>
                        </Pressable>
                    </View>
                    {/*first tab content box  */}

                    <View
                        style={{
                            display: activeTab === 'All' ? 'block' : 'none',
                        }}
                    >
                        <Animated.View style={{
                            ...styles.notificationRow,
                            opacity: fadeAnim, // Bind opacity to animated value
                        }}>
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </Animated.View>
                    </View>
                    {/*second tab content box  */}
                    <View
                        style={{
                            display: activeTab === 'Today' ? 'block' : 'none',
                        }}
                    >
                        <Animated.View style={{
                            ...styles.notificationRow,
                            opacity: fadeAnim, // Bind opacity to animated value
                        }}>
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />

                        </Animated.View>
                    </View>
                    {/*third tab content box  */}
                    <View
                        style={{
                            display: activeTab === 'Offer' ? 'block' : 'none',
                        }}
                    >
                        <Animated.View style={{
                            ...styles.notificationRow,
                            opacity: fadeAnim, // Bind opacity to animated value
                        }}>
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />

                        </Animated.View>
                    </View>



                </ScrollView >
            </View>
        </>
    );
}