import { colors } from "@/constants/colors";
import { styles } from "./Style";
import React, { useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Text, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { commonStyles } from "../../constants/styles";

export default function LocationSearchInputScreen() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [ascendingOrDescending, setAscendingOrDescending] = useState(null);

    const handleChangeText = (text) => {
        setSearch(text);
    }


    return (
        <View style={styles.LocationBox}>
            <View style={styles.CustomInputBox}>
                <Feather name="search" style={styles.inputIcon} />
                <View>
                    <Text style={styles.CustomInputLabel}>Destination</Text>
                    <TextInput
                        onPress={() => {
                            setDropdownVisible(!dropdownVisible);
                        }}
                        style={styles.SearchInput}
                        placeholder="Chose Location"
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
                                    setDropdownVisible(false)
                                }}>
                                    <Text style={styles.filterOptionsText}>Chose Location</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </View>

            </View>
            <View style={styles.CustomInputRow}>
                <View style={styles.CustomInputBox1}>
                    <Ionicons name="calendar-outline" style={styles.inputIcon} />
                    <View>
                        <Text style={styles.CustomInputLabel}>Check-In Dates</Text>
                        <TextInput
                            style={styles.SearchInput}
                            placeholder="Sat, 11 May"
                            placeholderTextColor={colors.blueDarkColor}
                            value={search}
                            onChangeText={(text) => handleChangeText(text)}
                        />

                    </View>

                </View>
                <View style={styles.CustomInputBox1}>
                    <Ionicons name="calendar-outline" style={styles.inputIcon} />

                    <View>
                        <Text style={styles.CustomInputLabel}>Check-Out Dates</Text>
                        <TextInput
                            style={styles.SearchInput}
                            placeholder="Sun, 12 May"
                            placeholderTextColor={colors.blueDarkColor}
                            value={search}
                            onChangeText={(text) => handleChangeText(text)}
                        />

                    </View>

                </View>
            </View>
            <View style={styles.CustomInputBox}>
                <Feather name="users" style={styles.inputIcon} />
                <View>
                    <Text style={styles.CustomInputLabel}>Guest & Room</Text>
                    <TextInput
                        style={styles.SearchInput}
                        placeholder="Guest & Room"
                        placeholderTextColor={colors.blueDarkColor}
                        value={search}
                        onChangeText={(text) => handleChangeText(text)}
                    />

                </View>

            </View>
            <TouchableOpacity style={[commonStyles.CustomBtn, { marginTop: 20 }]}>
                <Text style={commonStyles.CustomBtnText}>Search Hotels</Text>
            </TouchableOpacity>
        </View>
    );
}