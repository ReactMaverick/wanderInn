import {
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
    ViewStyle,
    StyleSheet,
    Animated, FlatList
} from "react-native";
import { useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import TagFilter from "./TagFilter";
import DropdownItem from "./DropdownItems";
import { colors } from "@/constants/colors";
import { H5, p, small } from "@/constants/fontConstants";
import { deviceHeight } from "@/constants/constants";


export default function SelectDropdown({ testID, testIDDropdown, data, tags, placeholder, searchOptions, selected, setSelected, searchBoxStyles, dropdownStyles, usePressable }) {
    const [value, setValue] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const dropdownHeight = useRef(new Animated.Value(0)).current;

    const resetData = () => {
        setFilteredData(data);
        setValue("");
    }

    const onSelect = (item) => {
        setSelected(item);
        setValue(item.value);
        onDropdownToggle(false);
    }

    const onDropdownToggle = (open) => {
        if (open) {
            setIsDropdownOpen(open);
            Animated.timing(dropdownHeight, {
                toValue: 200,
                duration: 500,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(dropdownHeight, {
                toValue: 10,
                duration: 600,
                useNativeDriver: false
            }).start(() => setIsDropdownOpen(open));
        }
    }

    const onSearching = (text) => {
        setValue(text);
        const filtered = data.filter((item) => item.value.toLowerCase().includes(text.toLowerCase()));
        setFilteredData(filtered);
    }

    return (
        <>
            {isDropdownOpen ? (
                <View testID={testID} style={[style.dropdownSearchBox, searchBoxStyles]}>
                    {/* <MaterialIcons style={style.searchIcon} name="search" size={24} color="red" /> */}
                    {/* <View style={style.searchDivider} /> */}
                    <TextInput
                        placeholder={placeholder}
                        style={style.dropdownSearchInput}
                        value={value}
                        onChangeText={onSearching}
                        {...searchOptions}
                    />
                    <MaterialIcons style={style.exitIcon} name={"close"} onPress={() => onDropdownToggle(false)} />
                </View>
            ) : (
                <TouchableOpacity
                    testID={testID}
                    onPress={() => onDropdownToggle(true)}
                    style={[style.dropdownSearchBox, searchBoxStyles]}
                >
                    <Text style={style.selectedText}>
                        {selected ? selected.value : placeholder}
                    </Text>
                    <MaterialIcons style={style.exitIcon} name="keyboard-arrow-down" />
                </TouchableOpacity>
            )}
            {isDropdownOpen ? <Animated.View
                testID={testIDDropdown}
                style={[
                    style.dropdown,
                    { maxHeight: dropdownHeight },
                    dropdownStyles
                ]}>

                <FlatList
                    style={style.dropdownScroll}
                    contentContainerStyle={{ paddingVertical: 10, overflow: 'hidden' }}
                    nestedScrollEnabled={true}
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={
                        <TagFilter
                            tags={tags}
                            isFilterOpen={isFilterOpen}
                            setIsFilterOpen={() => {
                                setIsFilterOpen(!isFilterOpen)
                                resetData()
                            }}
                            setFilteredData={setFilteredData}
                            resetData={resetData}
                        />
                    }
                    renderItem={({ item, index }) => {
                        if (filteredData.length === 0) {
                            return (
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{
                                        color: colors.textPrimary,
                                        fontSize: p,
                                        fontFamily: 'LatoRegular',
                                    }}>No results found</Text>
                                </View>
                            )
                        }

                        return (
                            <DropdownItem key={index} index={index} items={filteredData} item={item} select={onSelect} usePressable={usePressable} />
                        );
                    }}
                >
                </FlatList>
            </Animated.View> : null}
        </>
    )
}

const style = StyleSheet.create({
    dropdown: {
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.borderColor,
        marginTop: 0,
    },
    dropdownScroll: {
        flexDirection: "column",
        paddingHorizontal: 5,
    },
    dropdownSearchBox: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.darkColor,
        paddingHorizontal: 8,
        paddingVertical: 4,
        minHeight: deviceHeight * 1 / 20,
    },
    dropdownSearchInput: {
        flexGrow: 1,
        padding: 0,
        margin: 0,
        color: colors.darkColor,
    },
    selectedText: {
        flexGrow: 1,
        color: colors.darkColor,
        fontSize: p,
        fontFamily: 'LatoRegular',
        lineHeight: 20,
        marginLeft: 8,
        paddingVertical: 4,
    },
    searchIcon: {
        paddingVertical: 4,
        paddingRight: 6,
        marginVertical: "auto"
    },
    exitIcon: {
        alignSelf: "center",
        color: colors.textPrimary,
        fontSize: H5
    },
    searchDivider: {
        marginVertical: 4,
        borderRightWidth: 1,
        borderColor: colors.borderColor,
    }
});

