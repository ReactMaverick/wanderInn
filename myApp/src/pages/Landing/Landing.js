import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {commonStyles} from '../../constants/styles';
import {BG, TEXTVECTOR} from '../../constants/images';
import {styles} from './Style';

export default function LandingPage({navigation}) {
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={BG} resizeMode="cover" style={styles.container}>
        <View style={styles.MainBg}>
          <View style={styles.TextTitle}>
            <Image source={TEXTVECTOR} style={styles.BgImg} />
            <Text style={styles.heading}>explore</Text>
            <Text style={styles.heading}>to endlessly</Text>
            <Text style={styles.heading}>with WanderInn</Text>
          </View>
          <View style={styles.BottomBox}>
            <Text style={styles.paraHighlight}>
              Your Gateway to Memorable Stays
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={commonStyles.btn}>
              <Text style={commonStyles.btnText}>Lets Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
