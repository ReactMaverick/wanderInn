import { StyleSheet, Text, View } from "react-native";

export default function CustomSplashScreen() {
    return (
        <View style={styles.container}>
            <Text>Custom Splash Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red'
    }
});