import { View, ScrollView, Pressable, ImageBackground, Image, Text, FlatList, } from 'react-native';
import { styles } from './Style';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { AC, BATH, BED, CALENDER, DINNER, HOTEL, IMG1, IMG2, IMG3, IMG4, IMG5, MAP, USER1, USER2, USER3, USER4, USERSOLID, WIFI } from '@/constants/images';
import { BlurView } from 'expo-blur';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '@/constants/colors';
import { commonStyles } from '@/constants/styles';
import NearByHotelsScreen from '@/components/NearByHotels/NearByHotels';
import MyBookingHotelsScreen from '@/components/MyBookingHotels/MyBookingHotels';
import SimilarHotelsScreen from '@/components/SimilarHotels/SimilarHotels';
import { router } from 'expo-router';

export default function BookingDetailsPage() {
    const [isFav, setIsFav] = useState(false);
    const ItemSeparator = () => <View style={{ width: 20 }} />;

    return (
        <>
            <ImageBackground source={HOTEL} resizeMode='cover' style={styles.bgImage}>
                <View style={styles.CustomHeader}>
                    {/* backbutton  */}
                    <Pressable style={styles.backBtn}
                        onPress={() => {
                            console.log('back');
                        }}>
                        <Ionicons name="chevron-back" style={styles.backBtnIcon} />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setIsFav(!isFav);
                        }}
                        style={styles.HeartIconBox}>
                        <AntDesign name={isFav ? "heart" : "hearto"} style={styles.HeartIcon} />
                    </Pressable>
                </View>
                <BlurView
                    intensity={20}
                    style={styles.imageRow}>
                    <Image source={IMG1} style={styles.imageCol} />
                    <Image source={IMG2} style={styles.imageCol} />
                    <Image source={IMG3} style={styles.imageCol} />
                    <Image source={IMG4} style={styles.imageCol} />
                    <Pressable
                        onPress={() => {
                            alert('See all Images');
                        }}
                        style={styles.plusImageBox}>
                        <Image source={IMG5} style={styles.imageCol1} />
                        <View style={styles.plusImage}>
                            <Text style={styles.plusImageText}>20+</Text>
                        </View>
                    </Pressable>
                </BlurView>
            </ImageBackground>
            <ScrollView style={{ backgroundColor: colors.screenBg, }}>
                <View style={styles.container}>
                    {/* divider  */}
                    <View style={styles.deviderBox}>
                        <View style={styles.divider} />
                    </View>
                    <View style={styles.HotelDetailsOuterRow}>
                        <View style={styles.HotelCardContentInner}>
                            <View style={styles.HotelCardTop}>
                                <Text style={styles.HotelCardTitle}>Hotel Linda Place</Text>
                                <View style={styles.HotelLocation}>
                                    <Ionicons name="location-sharp" style={styles.HotelLocationIcon} />
                                    <Text style={styles.HotelLocationText}>New York, USA New York,</Text>
                                </View>
                            </View>
                            <View style={styles.HotelCardRight}>
                                <Text style={styles.HotelPrice}>$23</Text>
                                <Text style={styles.HotelPrice1}>/ Night</Text>

                            </View>
                        </View>
                        <View style={styles.HotelReviewOuterBox}>
                            <View style={styles.HotelReviewOuterBoxTop}>
                                <Text style={styles.HotelReviewTitle}>Reviews</Text>
                                <View style={styles.HotelCardContentLeftBottom}>
                                    <View style={styles.ReviewBox}>
                                        <Text style={styles.ReviewText}>4.5</Text>
                                        <Ionicons name="star" style={styles.ReviewStar} />
                                    </View>
                                    <Text style={styles.HotelCardLocation}>(4569 Peoples Reviews)</Text>
                                    <View style={styles.UsersGroupImgs}>
                                        <Image style={styles.UsersGroupImg}
                                            source={USER1}
                                        />
                                        <Image style={styles.UsersGroupImg}
                                            source={USER2}
                                        />

                                        <Image style={styles.UsersGroupImg}
                                            source={USER3}
                                        />
                                        <Image style={styles.UsersGroupImg}
                                            source={USER4}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* see all button with icon  */}
                            <Pressable
                                onPress={() => {
                                    console.log('Hotel clicked');
                                    router.push('reviews');
                                }}
                                style={styles.seeAllBtn}>
                                <Text style={styles.seeAllBtnText}>See All</Text>
                                <FontAwesome6 name="arrow-right" style={styles.seeAllBtnIcon} />
                            </Pressable>
                        </View>
                        <View style={styles.outerBox}>
                            <View style={styles.HotelCardContentInner}>
                                <View style={styles.HotelCardTop}>
                                    <Text style={styles.HotelTravelTitle}>Travel Dates & Guest</Text>
                                    <View style={styles.HotelCheckInRow}>
                                        <View style={styles.HotelCheckIn}>
                                            <Text style={styles.HotelCheckInBig}>Check-In:</Text>
                                            <Text style={styles.HotelCheckInSmall}> 2PM</Text>
                                        </View>
                                        <View style={styles.Dot} />
                                        <View style={styles.HotelCheckIn}>
                                            <Text style={styles.HotelCheckInBig}>Check-Out:</Text>
                                            <Text style={styles.HotelCheckInSmall}> 11AM</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.HotelCardRight}>
                                    <Text style={styles.HotelCalender}>View</Text>
                                    <Text style={styles.HotelCalender1}>Calendar</Text>
                                </View>
                            </View>
                            {/* date with icon and Guest per room with icon  */}
                            <View style={styles.roomsDatesRow}>
                                <View style={styles.roomsDatesCol}>
                                    <Image style={styles.roomsDatesColIcon}
                                        source={CALENDER}
                                    />
                                    <Text style={styles.roomsDatesColText}>07 May - 08 May</Text>
                                </View>
                                <View style={styles.roomsDatesCol}>
                                    <Image style={styles.roomsDatesColIcon}
                                        source={USERSOLID}
                                    />
                                    <Text style={styles.roomsDatesColText}>2 Guest/ 1Room</Text>
                                </View>
                            </View>
                        </View>
                        {/* about us  */}
                        <View style={styles.MainTitle}>
                            <Text style={[commonStyles.Title, { marginBottom: 15 }]}>About Us</Text>
                            <Text style={commonStyles.Para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam id felis aliquam aliquam. Aenean nec velit nec nunc tincidunt aliquam
                                eget in sem. Nulla et quam id felis aliquam aliquam. Aenean nec velit nec nunc tincidunt aliquam eget in sem.</Text>
                            {/* read more btn  */}
                            <Pressable
                                onPress={() => {
                                    alert('Read More');
                                }}
                                style={styles.readMoreBtn}>
                                <Text style={styles.readMoreBtnText}>Read More</Text>
                            </Pressable>
                        </View>
                        {/* Our Facility */}
                        <View style={styles.MainTitle}>
                            <Text style={[commonStyles.Title, { marginBottom: 20 }]}>Our Facility</Text>
                            <View style={styles.FacilityRow}>
                                <View style={styles.FacilityCol}>
                                    <View style={styles.FacilityIconBox}>
                                        <Image style={styles.FacilityIcon}
                                            source={BED}
                                        />
                                    </View>
                                    <Text style={styles.FacilityText}>Beds</Text>
                                </View>
                                <View style={styles.FacilityCol}>
                                    <View style={styles.FacilityIconBox}>
                                        <Image style={styles.FacilityIcon}
                                            source={BATH}
                                        />
                                    </View>
                                    <Text style={styles.FacilityText}>1 Tub</Text>
                                </View>
                                <View style={styles.FacilityCol}>
                                    <View style={styles.FacilityIconBox}>
                                        <Image style={styles.FacilityIcon}
                                            source={AC}
                                        />
                                    </View>
                                    <Text style={styles.FacilityText}>AC</Text>
                                </View>
                                <View style={styles.FacilityCol}>
                                    <View style={styles.FacilityIconBox}>
                                        <Image style={styles.FacilityIcon}
                                            source={WIFI}
                                        />
                                    </View>
                                    <Text style={styles.FacilityText}>WIFI</Text>
                                </View>
                                <View style={styles.FacilityCol}>
                                    <View style={styles.FacilityIconBox}>
                                        <Image style={styles.FacilityIcon}
                                            source={DINNER}
                                        />
                                    </View>
                                    <Text style={styles.FacilityText}>Dinner</Text>
                                </View>
                            </View>
                        </View>
                        {/* Map area  */}
                        <View style={styles.MapBox}>
                            <View style={styles.MainTitle}>
                                <Text style={[commonStyles.Title, { marginBottom: 10 }]}>Where you will stay</Text>
                                <Text style={commonStyles.Para}>View the location on map</Text>
                            </View>
                            <Image
                                source={MAP}
                                style={styles.Map}
                            />
                        </View>
                        <View style={commonStyles.TitleRow}>
                            <Text style={commonStyles.Title}>Similar Hotels</Text>
                            <Pressable onPress={() => {
                                alert('See all Near by Hotels');
                            }}>
                                <Text style={commonStyles.ViewAll}>See All</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.SimilarHotelsList}>
                    <FlatList
                        // ItemSeparatorComponent={ItemSeparator}  
                        horizontal
                        data={[
                            { key: 'a' },
                            { key: 'b' },
                            { key: 'c' },
                            { key: 'd' },
                            { key: 'e' },
                            { key: 'f' },
                            { key: 'g' },
                            { key: 'h' },
                            { key: 'i' },
                            { key: 'j' },
                            { key: 'k' },
                            { key: 'l' },
                            { key: 'm' },
                            { key: 'n' },
                            { key: 'o' },
                            { key: 'p' },
                            { key: 'q' },
                            { key: 'r' },
                            { key: 's' },
                            { key: 't' },
                            { key: 'u' },
                            { key: 'v' },
                            { key: 'w' },
                            { key: 'x' },
                            { key: 'y' },
                            { key: 'z' },

                        ]}
                        renderItem={({ item }) => (<SimilarHotelsScreen />)}
                    />
                </View>
                {/* book now button  */}

                <Pressable onPress={() => {
                    alert('Book Now');
                    router.push('bookingDetails');
                }}
                    style={styles.BookNowBtn}>
                    <Text style={styles.BookNowBtnText}>Book Now</Text>
                </Pressable>


            </ScrollView>
        </>
    );
}