import { styles } from "./Style";
import React, { useState } from 'react';
import { View, Text, Pressable, Image, TouchableOpacity, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
import { HOTEL } from "@/constants/images";

export default function Notification() {
    return (

        <View style={styles.notificationBox}>
            <View style={styles.notificationBoxInner}>
                <Image source={HOTEL} style={styles.notificationImage} />
                <View style={styles.notificationTextBox}>
                    <Text style={styles.notificationTitle}>New Recommended Offer
                        Just for you</Text>
                    <Text style={styles.notificationText}>12 hour ago</Text>
                </View>
            </View>
            {/* view button  */}
            <Pressable style={styles.ViewBtn}>
                <Text style={styles.ViewBtnText}>View</Text>
            </Pressable>


        </View>

    );
}