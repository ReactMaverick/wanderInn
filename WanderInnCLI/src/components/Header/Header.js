import {LOGO, USER} from '../../constants/images';
import {styles} from './Style';
import React, {useRef} from 'react';
import {StyleSheet, Text, View, Animated, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/reducer/authReducer';

export default function HeaderScreen({navigation}) {
  const shakeAnim = useRef(new Animated.Value(0)).current; // Initial value for shake: 0
  const user = useSelector(selectUser);
  const shake = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotateData = shakeAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-5deg', '5deg'],
  });
  return (
    <View style={styles.container}>
      <View style={styles.LeftBar}>
        <Image
          style={styles.UserImg}
          source={USER}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
        <View style={styles.LeftBarContent}>
          <Text style={styles.UserName}>{user?.name}</Text>
          <Text style={styles.UserLocation}>Where are going today?</Text>
        </View>
      </View>
      <Pressable
        style={styles.NotificationBtn}
        onPress={() => {
          shake();
          setTimeout(() => {
            navigation.navigate('NotificationPage');
          }, 500);
        }}>
        <Animated.View style={{transform: [{rotate: rotateData}]}}>
          <Icon name="notifications-outline" style={styles.NotificationIcon} />
        </Animated.View>
      </Pressable>
    </View>
  );
}
