import { Link, useRouter } from 'expo-router';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from './Style';
import { BG, TEXTVECTOR } from '@/constants/images';
import { colors } from '@/constants/colors';
import { commonStyles } from '@/constants/styles';
import { StatusBar } from 'expo-status-bar';

export default function LandingPage() {
    const router = useRouter();

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
                        <Text style={styles.paraHighlight}>Your Gateway to Memorable Stays</Text>
                        <TouchableOpacity onPress={() => {
                            router.push('login');
                        }} style={commonStyles.btn}>
                            <Text style={commonStyles.btnText}>Lets Get Started</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </>
    )
}