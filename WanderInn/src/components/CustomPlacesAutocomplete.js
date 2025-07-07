import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
} from 'react-native';
import { deviceWidth } from '../constants/constants';

const CustomPlacesAutocomplete = ({
    apiKey,
    placeholder,
    onPlaceSelected,
    sendQuery,
}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch autocomplete predictions
    const fetchPlaces = async (text) => {
        if (!text) {
            setResults([]);
            return;
        }

        setLoading(true);

        try {
            const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
                text
            )}&key=${apiKey}&language=en`;

            const response = await fetch(url);
            const data = await response.json();

            if (data?.predictions) {
                setResults(data.predictions);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error('Error fetching places:', error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    // Fetch place details (lat/lng)
    const fetchPlaceDetails = async (placeId) => {
        try {
            const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry,name,formatted_address&key=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data?.result?.geometry?.location) {
                return {
                    lat: data.result.geometry.location.lat,
                    lng: data.result.geometry.location.lng,
                    name: data.result.name,
                    address: data.result.formatted_address,
                };
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error fetching place details:', error);
            return null;
        }
    };

    const handleSelect = async (place) => {
        setQuery(place.description);
        setResults([]);

        const details = await fetchPlaceDetails(place.place_id);

        if (details) {
            onPlaceSelected?.({
                description: place.description,
                place_id: place.place_id,
                ...details,
            });
        } else {
            onPlaceSelected?.(place);
        }
    };

    const handleBlur = () => {
        setResults([]); // collapse the list
    };

    // Debounce input
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchPlaces(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder || 'Search places...'}
                value={query}
                onChangeText={text => setQuery(text, sendQuery(text))}
                onBlur={handleBlur}
                style={styles.input}
            />

            {loading && <ActivityIndicator style={{ marginTop: 10 }} />}

            {!!results.length && (
                <ScrollView nestedScrollEnabled={true} style={styles.list}>
                    {results.map((item) => (
                        <TouchableOpacity
                            style={styles.item}
                            key={item.place_id}
                            onPress={() => handleSelect(item)}
                        >
                            <Text>{item.description}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default CustomPlacesAutocomplete;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative',
    },
    input: {
        // height: 50,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        // fontSize: 16,
        width: '90%',
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    list: {
        position: 'absolute',
        top: 50,
        width: '100%',
        maxHeight: deviceWidth / 2,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 100000000000000,
    }
});
