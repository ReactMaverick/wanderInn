import { styles } from "./Style";
import React, { } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, } from "react-native";
import { SlIDERBG1, SlIDERBG2, SlIDERBG3, SlIDER, OFFER, SlIDER1, SlIDER2 } from "@/constants/images";
import Swiper from 'react-native-swiper'
import { commonStyles } from "@/constants/styles";

export default function BannerSliderScreen() {

    return (

        <Swiper
            style={styles.wrapper}
            // autoplay={true}
            autoplayTimeout={3}
            dotStyle={styles.Dots}
            activeDotStyle={styles.ActiveDot}
            loop={true}
        >
            <ImageBackground source={SlIDERBG1} style={styles.SliderBg}>
                <View style={styles.slide}>
                    <Image source={SlIDER} style={styles.SliderImg} />
                    <View style={styles.slideContent}>
                        <Text style={styles.slideContentText}>Unlock Exclusive</Text>
                        <View style={styles.slideOFFContentText}>
                            <Text style={styles.slideContentText}>Deals</Text>
                            <ImageBackground source={OFFER} style={styles.OfferBg}>
                                <Text style={styles.OfferBgtext}>25%</Text>
                            </ImageBackground>
                        </View>

                        <Text style={styles.slideSubText}>Your Passport to Savings with WanderInn</Text>
                        <TouchableOpacity
                            style={styles.SliderBtn}
                        >
                            <Text style={styles.SliderBtnText}>Explore More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground source={SlIDERBG2} style={styles.SliderBg}>
                <View style={styles.slide}>
                    <Image source={SlIDER1} style={styles.SliderImg1} />
                    <View style={styles.slideContent}>
                        <Text style={styles.slideContentTextWhite}>Escape Today, Save Big</Text>


                        <Text style={styles.slideSubTextWhite}>Your Dream Stay Awaits Here......</Text>
                        <TouchableOpacity
                            style={styles.SliderBtn}
                        >
                            <Text style={styles.SliderBtnText}>Explore More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground source={SlIDERBG3} style={styles.SliderBg}>
                <View style={styles.slide}>
                    <Image source={SlIDER2} style={styles.SliderImg2} />
                    <View style={styles.slideContent}>
                        <Text style={styles.slideContentTextWhite}>Book Now, Stay Luxurious Later</Text>


                        <Text style={styles.slideSubTextWhite}>Stay Here, Feel At Home</Text>
                        <TouchableOpacity
                            style={styles.SliderBtn}
                        >
                            <Text style={styles.SliderBtnText}>Explore More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

        </Swiper>


    );
}