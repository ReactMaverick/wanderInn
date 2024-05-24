import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { styles } from './Style';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { deviceHeight } from '@/constants/constants';
import PopularHotelsScreen from '@/components/PopularHotels/PopularHotels';
import { HOTEL1, } from "@/constants/images";
import { AntDesign } from '@expo/vector-icons';

export default function ReviewsPage() {

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.screenBg,
            height: deviceHeight,
        }}>
            <View style={styles.BackHeader}>
                <View style={styles.BackHeaderInner}>
                    <View style={styles.backHeaderBtn}>
                        <Pressable style={styles.backBtn}
                            onPress={() => {
                                console.log('back');
                            }}>
                            <Ionicons name="chevron-back" style={styles.backBtnIcon} />
                        </Pressable>
                    </View>

                    <View style={styles.backHeaderTitle}>
                        <Text style={styles.HeaderTitle}>Booking Details</Text>
                    </View>
                    <View style={{ flex: 1 }} />
                </View>
            </View>
            <ScrollView>

                <View style={styles.container}>
                    <View style={styles.HotelCard}>
                        <View style={styles.HotelCardImgBox}>
                            <View style={styles.CatagoryBox}>
                                <Text style={styles.CatagoryText}>40% Off</Text>
                            </View>
                            <Image style={styles.HotelCardImg}
                                source={HOTEL1}
                            />
                        </View>
                        <View style={styles.HotelCardContent}>
                            <View style={styles.HotelCardContentLeft}>
                                <View style={styles.HotelCardContentLeftTop}>
                                    <Text style={styles.HotelCardTitle}>Hotel Blue House</Text>
                                    <View style={styles.HotelLocation}>
                                        <Ionicons name="location-sharp" style={styles.HotelLocationIcon} />
                                        <Text style={styles.HotelLocationText}>New York, USA New York,</Text>
                                    </View>
                                </View>
                                <View style={styles.HotelCardContentLeftBottom}>
                                    <View style={styles.ReviewBox}>
                                        <Ionicons name="star" style={styles.ReviewStar} />
                                        <Text style={styles.ReviewText}>4.5</Text>
                                    </View>
                                    <Text style={styles.HotelCardLocation}>(4569 Peoples Reviews)</Text>
                                </View>

                            </View>
                            <View style={styles.HotelCardContentRight}>
                                <Pressable style={styles.HeartIconBox}>
                                    <View>
                                        <AntDesign name="heart" style={styles.HeartIcon} />
                                    </View>
                                </Pressable>
                                <View style={styles.HotelCardPAckAge}>
                                    <Text style={styles.HotelCardPAckPrice}>$23</Text>
                                    <Text style={styles.HotelCardPAckTime}>/ Night</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}