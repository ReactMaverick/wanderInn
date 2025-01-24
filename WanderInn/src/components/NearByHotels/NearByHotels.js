import { Animated, Image, Pressable, Text, View } from 'react-native';
import { BLURBG, HOTEL1, SlIDERBG1, USER1, USER2, USER4, USER5 } from '../../constants/images';
import { styles } from './Style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { formatToOneDecimalPlace } from '../../common/common';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/reducer/hotelReducer';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {BlurView} from '@react-native-community/blur';

export default function NearByHotels({ hotel, index, delay, navigation }) {
  const dispatch = useDispatch();
  const blinkValue = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(300)).current; // Initial position
  const opacity = useRef(new Animated.Value(0)).current; // Initial opacity

  const favouriteHotels = useSelector(state => state.hotel.favouriteHotels);
  const [isFav, setIsFav] = useState(false);
  // if(hotel.images){
  //     console.log("Hotel Images : ",hotel.images)
  // }
  const animateIcon = () => {
    setIsFav(!isFav);
    Animated.sequence([
      Animated.timing(blinkValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(blinkValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
    if (!isFav) {
      dispatch(addToFavorite(hotel._id));
    } else {
      dispatch(removeFromFavorite(hotel._id));
    }
  };

  const checkHotelsInFavList = () => {
    let isHotelInFavList = false;
    favouriteHotels.map(favHotel => {
      if (favHotel._id === hotel._id) {
        isHotelInFavList = true;
      }
    });
    setIsFav(isHotelInFavList);
  };

  useEffect(() => {
    checkHotelsInFavList();
  }, [favouriteHotels]);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 1000,
      delay: index * 100, // Staggered delay
      useNativeDriver: true,
    }).start();

    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 100, // Staggered delay
      useNativeDriver: true,
    }).start();
  }, [translateX, opacity, index]);

  return (
    <Pressable
      onPress={() => {
        // console.log('Hotel clicked');
        navigation.navigate('HotelDetails', { id: hotel._id });
      }}>
      <Animated.View style={{ transform: [{ translateX }], opacity }}>
        <View style={styles.HotelCard}>
          <View style={styles.HotelCardImgBox}>
            <View style={styles.CatagoryBox}>
              <Text style={styles.CatagoryText}>Trending</Text>
            </View>
            <Pressable onPress={animateIcon} style={styles.HeartIconBox}>
              <Animated.View style={{ opacity: blinkValue }}>
                <AntDesign
                  name={isFav ? 'heart' : 'hearto'}
                  style={styles.HeartIcon}
                />
              </Animated.View>
            </Pressable>
            <Image
              style={styles.HotelCardImg}
              source={hotel.image ? { uri: hotel.image } : HOTEL1}
            />
            <View
              style={styles.HotelCardReviewbox}
            >
              <View style={styles.HotelCardReviewInner}>

                <Image
                  style={styles.HotelCardReviewImg}
                  source={BLURBG}
                  blurRadius={20}
                />

                <View style={styles.HotelCardReview}>
                  <Text style={styles.HotelCardReviewText}>
                    15k+ People Reviews
                  </Text>
                  <View style={styles.UsersGroupImgs}>
                    <Image style={styles.UsersGroupImg} source={USER1} />
                    <Image style={styles.UsersGroupImg} source={USER2} />
                    <Image style={styles.UsersGroupImg} source={USER4} />
                    <View style={styles.UsersGroupImgPlusBox}>
                      <Image style={styles.UsersGroupImgPlus} source={USER5} />
                      <View style={styles.UsersOverlay}>
                        <Text style={styles.UsersGroupImgText}>+</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.ReviewBox}>
                  <Text style={styles.ReviewText}>
                    {formatToOneDecimalPlace(hotel.starRating)}
                  </Text>
                  <Icon name="star" style={styles.ReviewStar} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.HotelCardContent}>
            <View style={styles.HotelCardContentInner}>
              <View style={styles.HotelCardTop}>
                <Text style={styles.HotelCardTitle}>{hotel.name}</Text>
                <View style={styles.HotelLocation}>
                  <Icon
                    name="location-sharp"
                    style={styles.HotelLocationIcon}
                  />
                  <Text style={styles.HotelLocationText}>New York, USA</Text>
                </View>
              </View>
              <View style={styles.HotelCardRight}>
                <Text style={styles.Hoteldistance}>Starting from</Text>
                <Text style={styles.HotelPrice}>
                  ${hotel.lowestPriceRoom}/ Night
                </Text>
              </View>
            </View>
            <View style={styles.DistanceBox}>
              <Text style={styles.DistanceText}>2 km from central</Text>
              <View style={styles.OfferBox}>
                <Text style={styles.OfferText}>50% off</Text>
              </View>
            </View>
          </View>
          <View style={styles.HotelCardBottom}>
            <Text style={styles.HotelCardBottomText}>
              15 people booked today
            </Text>
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
}
