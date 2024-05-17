import { View, ScrollView, Pressable, ImageBackground, Image, Text, } from 'react-native';
import { styles } from './Style';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { HOTEL, IMG1, IMG2, IMG3, IMG4, IMG5, USER1, USER2, USER3, USER4 } from '@/constants/images';
import { BlurView } from 'expo-blur';
import { FontAwesome6 } from '@expo/vector-icons';

export default function HotelsDetailsPage() {
    const [isFav, setIsFav] = useState(false);



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
            <ScrollView>
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
                                        <Ionicons name="star" style={styles.ReviewStar} />
                                        <Text style={styles.ReviewText}>4.5</Text>
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
                                    alert('See all Reviews');
                                }}
                                style={styles.seeAllBtn}>
                                <Text style={styles.seeAllBtnText}>See All</Text>
                                <FontAwesome6 name="arrow-right" style={styles.seeAllBtnIcon} />
                            </Pressable>
                        </View>
                    </View>




                </View>
            </ScrollView >
        </>
    );
}