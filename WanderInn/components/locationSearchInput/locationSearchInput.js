import { colors } from "@/constants/colors";
import { styles } from "./Style";
import React, { useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Text, Modal, Button, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { commonStyles } from "../../constants/styles";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { router } from "expo-router";


export default function LocationSearchInputScreen() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [isCheckInModalVisible, setCheckInModalVisible] = useState(false);
    const [isCheckOutModalVisible, setCheckOutModalVisible] = useState(false);
    const [checkInDate, setCheckInDate] = useState(dayjs());
    const [checkOutDate, setCheckOutDate] = useState(dayjs());

    const handleChangeText = (text) => {
        setSearch(text);
    };

    const toggleCheckInModal = () => {
        setCheckInModalVisible(!isCheckInModalVisible);
    };

    const toggleCheckOutModal = () => {
        setCheckOutModalVisible(!isCheckOutModalVisible);
    };

    const handleCheckInDateChange = (params) => {
        setCheckInDate(params.date || dayjs());
        toggleCheckInModal();
    };

    const handleCheckOutDateChange = (params) => {
        setCheckOutDate(params.date || dayjs());
        toggleCheckOutModal();
    };
    console.log('checkInDate ==> ', checkInDate);
    return (
        <View style={styles.LocationBox}>
            <View style={styles.CustomInputBox}>
                <Feather name="search" style={styles.inputIcon} />
                {/* <View>
                    <Text style={styles.CustomInputLabel}>Destination</Text>
                    <TextInput
                        onPress={() => {
                            setDropdownVisible(!dropdownVisible);
                        }}
                        style={styles.SearchInput}
                        placeholder="Choose Location"
                        placeholderTextColor={colors.blueDarkColor}
                        value={search}
                        onChangeText={(text) => handleChangeText(text)}
                    />
                    {dropdownVisible && (
                        <TouchableWithoutFeedback
                            onPress={() => setDropdownVisible(false)}
                        >
                            <View style={styles.dropdown}>
                                <TouchableOpacity onPress={() => {
                                    setAscendingOrDescending('desc');
                                    setDropdownVisible(false);
                                }}>
                                    <Text style={styles.filterOptionsText}>Choose Location</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </View> */}
                
                                <GooglePlacesAutocomplete
                                    placeholder='Enter your location'
                                    fetchDetails={true}
                                    textInputProps={{
                                        // placeholderTextColor: commonColor.textColorDark,
                                    }}
                                    onPress={(data, details = null) => {
                                        console.log('Data ==> ', data);
                                        console.log('Details ==> ', details);
                                    }}
                                    query={{
                                        key: 'AIzaSyCWtZ3KuXxUu7_mCwL1O2PzotYEpsc4vLU',
                                        language: 'en',
                                    }}
                                    styles={{
                                        textInput: {
                                            marginLeft: 10,
                                            width: '90%',
                                        },
                                        row: {},
                                        description: {},
                                        poweredContainer: {},
                                        separator: {},
                                        listView: {
                                            borderBottomWidth: 1,
                                            borderBottomLeftRadius: 10,
                                            borderBottomRightRadius: 10,
                                        },
                                    }}
                />
                
               
            </View>
            <View style={styles.CustomInputRow}>
                <View style={styles.CustomInputBox1}>
                    <Ionicons name="calendar-outline" style={styles.inputIcon} />
                    <View>
                        <Text style={styles.CustomInputLabel}>Check-In Dates</Text>
                        <TouchableOpacity onPress={toggleCheckInModal}>
                            <Text>{checkInDate.format('DD-MM-YYYY')}</Text>
                        </TouchableOpacity>
                        <Modal
                            visible={isCheckInModalVisible}
                            // transparent={true}
                            animationType="slide"
                            onRequestClose={toggleCheckInModal}
                        >
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Select Check-In Date</Text>
                                <DateTimePicker
                                    mode="single"
                                    date={checkInDate.toDate()}
                                    onChange={handleCheckInDateChange}
                                />
                                <Button title="Close" onPress={toggleCheckInModal} />
                            </View>
                        </Modal>
                    </View>
                </View>
                <View style={styles.CustomInputBox1}>
                    <Ionicons name="calendar-outline" style={styles.inputIcon} />
                    <View>
                        <Text style={styles.CustomInputLabel}>Check-Out Dates</Text>
                        <TouchableOpacity onPress={toggleCheckOutModal}>
                            <Text>{checkOutDate.format('DD-MM-YYYY')}</Text>
                        </TouchableOpacity>
                        <Modal
                            visible={isCheckOutModalVisible}
                            // transparent={true}
                            animationType="slide"
                            onRequestClose={toggleCheckOutModal}
                        >
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Select Check-Out Date</Text>
                                <DateTimePicker
                                    mode="single"
                                    date={checkOutDate.toDate()}
                                    onChange={handleCheckOutDateChange}
                                />
                                <Button title="Close" onPress={toggleCheckOutModal} />
                            </View>
                        </Modal>
                    </View>
                </View>
            </View>
            <TouchableOpacity 
            onPress={() => {
                router.push('/allPopularHotels');
            }}
            style={[commonStyles.CustomBtn, { marginTop: 20 }]}>
                <Text style={commonStyles.CustomBtnText}>Search Hotels</Text>
            </TouchableOpacity>
        </View>
    );
}
