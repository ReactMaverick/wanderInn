import React, { useEffect, useRef } from 'react';
import {styles} from './Style';
import {StyleSheet, Text, View, Animated} from 'react-native';
import { LOGO } from '../../constants/images';

const CustomSplashScreen = () => {
  const positionAnim = useRef(new Animated.Value(600)).current;
  useEffect(() => {
    Animated.timing(positionAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image
        style={{...styles.LogoImg, transform: [{translateY: positionAnim}]}}
        source={LOGO}
      />
    </View>
  );
};

export default CustomSplashScreen;
