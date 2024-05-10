import { Link } from 'expo-router';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import { BG, TEXTVECTOR } from '@/constants/images';
import { colors } from '@/constants/colors';

export default function LandingPage() {
    return (
        <ImageBackground source={BG} resizeMode="cover" style={styles.container}>
            <View style={styles.MainBg}>
                <View style={styles.TextTitle}>
                    <Image source={TEXTVECTOR} style={styles.BgImg} />
                    <Text style={styles.heading}>explore</Text>
                    <Text style={styles.heading}>to endlessly</Text>
                    <Text style={styles.heading}>with WanderInn</Text>
                </View>
                <View style={styles.BottomBox}>
                    <Text style={styles.paraHighlight}>Your Gateway to Memorable Stays</Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Lets Get Started</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    )
}