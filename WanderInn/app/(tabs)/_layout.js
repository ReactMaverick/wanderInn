import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favourite"
                options={{
                    title: 'Favourite',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'heart-sharp' : 'heart-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="myBooking"
                options={{
                    title: 'My Booking',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'briefcase-sharp' : 'briefcase-outline'} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
