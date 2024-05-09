import { StyleSheet, View, Text } from 'react-native';


export default function MyBookingScreen() {
    return (
        <View style={styles.container}>
            <Text>My Booking</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
