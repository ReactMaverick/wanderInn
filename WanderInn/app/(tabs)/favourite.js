import { StyleSheet, View, Text } from 'react-native';

export default function FavouriteScreen() {
  return (
    <View style={styles.container}>
      <Text>Favourite Screen</Text>
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
