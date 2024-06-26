import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { router } from 'expo-router';
import { colors } from '@/constants/colors';
import { styles } from './Style';
import { commonStyles } from '../../constants/styles';

export default function LocationSearchInputScreen() {
    const [search, setSearch] = useState('');
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null
    });
    const [formData, setFormData] = useState({
        lat: null,
        lng: null,
        location: null,
    });
    const handleChangeText = (text) => {
        setSearch(text);
    };

    const toggleDatePicker = () => {
        setDatePickerVisible(!isDatePickerVisible);
    };

    const handleDateChange = (params) => {
        // console.log('Params ==> ', params);
        setDateRange(params);
        // toggleDatePicker();
    };

    return (
        <View style={styles.LocationBox}>
            <View style={styles.CustomInputBox}>
                <Feather name="search" style={styles.inputIcon} />
                <GooglePlacesAutocomplete
                    placeholder='Enter your location'
                    fetchDetails={true}
                    textInputProps={{
                        value: search,
                        onChangeText: (text) => setSearch(text),
                    }}
                    onPress={(data, details = null) => {
                        console.log('onPress ==> ');
                        console.log('Data ==> ', data);
                        console.log('Details ==> ', details);
                        setSearch(data.description); // Update the search state with the selected place description
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
                        listView: {
                            borderBottomWidth: 1,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        },
                    }}
                    enablePoweredByContainer={false}
                />
            </View>
            <View style={styles.CustomInputRow}>
                <TouchableOpacity onPress={toggleDatePicker}  style={styles.CustomInputBox1}>
                    <Ionicons name="calendar-outline" style={styles.inputIcon} />
                    <View>
                        <Text style={styles.CustomInputLabel}>Check-In / Check-Out Dates</Text>
                        <View >
                            <Text>
                                {dateRange.startDate ? dateRange.startDate.format('DD-MM-YYYY') : 'Select dates'} -
                                {dateRange.endDate ? dateRange.endDate.format('DD-MM-YYYY') : ''}
                            </Text>
                        </View>
                        <Modal
                            visible={isDatePickerVisible}
                            animationType="slide"
                            onRequestClose={toggleDatePicker}
                        >
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Select Check-In and Check-Out Dates</Text>
                                <DateTimePicker
                                    minDate={dayjs().toDate()}
                                    mode="range"
                                    startDate={dateRange.startDate}
                                    endDate={dateRange.endDate}
                                    onChange={handleDateChange}
                                />
                                <Button title="Close" onPress={toggleDatePicker} />
                            </View>
                        </Modal>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    router.push('/allPopularHotels');
                }}
                style={[commonStyles.CustomBtn, { marginTop: 20 }]}
            >
                <Text style={commonStyles.CustomBtnText}>Search Hotels</Text>
            </TouchableOpacity>
        </View>
    );
}
