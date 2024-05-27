import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { styles } from './Style';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { deviceHeight } from '@/constants/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CHECKED, HOTEL1, } from "@/constants/images";
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
                    <View style={styles.HotelDetailsCard}>
                        <View style={styles.HotelDetailsCardInner}>
                            <View style={styles.HotelDetailsCardLeftMain}>
                                <View style={styles.HotelDetailsCardLeft}>
                                    <View style={styles.HotelDetailsCard1}>
                                        <Text style={styles.HotelDetailsCardTitle}>Tue, May 7</Text>
                                        <Text style={styles.HotelDetailsCardSubTitle}>12: 00 PM</Text>
                                    </View>

                                    <Ionicons name="arrow-forward" style={styles.arrowIcon} />
                                    <View style={styles.HotelDetailsCard2}>
                                        <Text style={styles.HotelDetailsCardTitle}>Wed, May 8</Text>
                                        <Text style={styles.HotelDetailsCardSubTitle}>12: 00 PM</Text>
                                    </View>
                                </View>
                                <View style={styles.CancellationPolicy}>
                                    <MaterialCommunityIcons name="shield-off" style={styles.CancellationPolicyIcon} />
                                    <Text style={styles.CancellationPolicyText}>Cancellation Policy</Text>
                                </View>
                            </View>
                            <View style={styles.HotelDetailsCardRight}>
                                <Text style={styles.HotelDetailsCardRightText}>1</Text>
                                <Text style={styles.HotelDetailsCardRightText1}>night</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.TotalPriceCard}>
                        <View style={styles.TotalPriceCardTop}>
                            <View style={styles.TotalPriceCardTopLeft}>
                                <Text style={styles.TotalPriceCardTitle}>Total Price</Text>
                                <Text style={styles.TotalPriceCardSubTitle}>with taxes & fees</Text>
                            </View>
                            <View style={styles.TotalPriceCardTopRight}>
                                <View style={styles.CatagoryBox1}>
                                    <Text style={styles.CatagoryText1}>40% Off</Text>
                                </View>
                                <Text style={styles.TotalPriceCardPrice}>$23</Text>
                            </View>
                        </View>
                        <View style={styles.TotalPriceCardBottom}>
                            <View style={styles.PriceList}>
                                <Text style={styles.PriceListText}>Original  Price (1 room x 1 night)</Text>
                                <Text style={[styles.PriceListText, { textDecorationLine: 'line-through' }]}>$43</Text>
                            </View>
                            <View style={styles.PriceList}>
                                <Text style={styles.PriceListText}>Our Price</Text>
                                <Text style={styles.PriceListText}>$23</Text>

                            </View>
                            <View style={styles.PriceList}>
                                <Text style={styles.PriceListText1}>Booking fee</Text>
                                <Text style={styles.PriceListText1}>$0</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.TotalPriceCard}>
                        <View style={styles.TotalPriceCardTop}>
                            <View style={styles.SpecialBox}>
                                <Text style={styles.TotalPriceCardTitle}>Special request</Text>
                                <Text style={styles.TotalPriceCardSubTitle}>Select your preference (s). Subject to
                                    availabilty</Text>
                            </View>
                        </View>
                        <View style={styles.TotalPriceCardBottom}>
                            <Text style={styles.TotalPriceCardTitle}>Which type of room would you prefer?</Text>
                            {/* smoking room, Non-smoking room check box here */}
                            <View style={styles.SmokingRoomBox}>
                                <View style={styles.SmokingRoomBoxInner}>
                                    <Pressable style={styles.SmokingRoomBoxCheckBox}>
                                        <Image style={styles.SmokingRoomBoxCheckBoxInner} source={CHECKED} />
                                    </Pressable>
                                    <Image style={styles.SmokingRoomBoxImg} source={HOTEL1} />
                                    <Text style={styles.SmokingRoomBoxText}>Smoking room</Text>

                                </View>
                                <View style={styles.SmokingRoomBoxInner}>
                                    <Text style={styles.SmokingRoomBoxText}>Non-smoking room</Text>
                                    <Pressable style={styles.SmokingRoomBoxCheckBox}>
                                        <View style={styles.SmokingRoomBoxCheckBoxInner} />
                                    </Pressable>
                                </View>
                            </View>

                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}