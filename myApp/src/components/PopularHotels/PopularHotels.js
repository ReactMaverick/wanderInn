import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './Style';
import {Animated, Image, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {formatToOneDecimalPlace} from '../../common/common';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/reducer/hotelReducer';
import {showToast} from '../../constants/constants';
import {HOTEL1} from '../../constants/images';

export default function PopularHotels({hotel, screen, navigation}) {
  const favouriteHotels = useSelector(state => state.hotel.favouriteHotels);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const blinkValue = useRef(new Animated.Value(1)).current;
  console.log('PopularHotels component ==> ', hotel);
  

  console.log('PopularHotels==> ', hotel);

  const checkHotelsInFavList = () => {
    let isHotelInFavList = false;
    favouriteHotels.map(favHotel => {
      if (favHotel?._id === hotel?._id) {
        isHotelInFavList = true;
      }
    });
    setIsFav(isHotelInFavList);
  };
  useEffect(() => {
    checkHotelsInFavList();
  }, [favouriteHotels]);
  const animateIcon = () => {
    if (!isFav) {
      dispatch(addToFavorite(hotel?._id))
        .then(() => {
          showToast('success', 'Hotel added to favorite list');
        })
        .catch(() => {
          showToast('error', 'Error adding hotel to favorite list');
        });
    } else {
      dispatch(removeFromFavorite(hotel?._id))
        .then(() => {
          showToast('success', 'Hotel removed from favorite list');
        })
        .catch(() => {
          showToast('error', 'Error removing hotel from favorite list');
        });
    }
  };

  // console.log('Hotel From PopularHotels==> ', hotel._id)

  return (
    <Pressable
      onPress={() => {
        console.log('Hotel clicked');

        navigation.navigate('HotelDetails', {id: hotel._id});

        // router.push({
        //   pathname: '/hotelsDetails/' + hotel._id,
        //   params: {
        //     previousScreen: screen,
        //   },
        // });
      }}>
      <View style={styles.HotelCard}>
        <View style={styles.HotelCardImgBox}>
          <View style={styles.CatagoryBox}>
            <Text style={styles.CatagoryText}>40% Off</Text>
          </View>
          <Image
            style={styles.HotelCardImg}
            source={hotel.image ? {uri: hotel.image} : HOTEL1}
          />
        </View>
        <View style={styles.HotelCardContent}>
          <View style={styles.HotelCardContentLeft}>
            <View style={styles.HotelCardContentLeftTop}>
              <Text style={styles.HotelCardTitle}>{hotel?.name}</Text>
              <View style={styles.HotelLocation}>
                <Icon name="location-sharp" style={styles.HotelLocationIcon} />
                <Text style={styles.HotelLocationText}>
                  New York, USA New York,
                </Text>
              </View>
            </View>
            <View style={styles.HotelCardContentLeftBottom}>
              <View style={styles.ReviewBox}>
                <Icon name="star" style={styles.ReviewStar} />
                <Text style={styles.ReviewText}>
                  {formatToOneDecimalPlace(hotel?.starRating)}
                </Text>
              </View>
              <Text style={styles.HotelCardLocation}>
                (4569 Peoples Reviews)
              </Text>
            </View>
          </View>
          <View style={styles.HotelCardContentRight}>
            <Pressable onPress={animateIcon} style={styles.HeartIconBox}>
              <View>
                <AntDesign
                  name={isFav ? 'heart' : 'hearto'}
                  style={styles.HeartIcon}
                />
              </View>
            </Pressable>
            <View style={styles.HotelCardPAckAge}>
              <Text style={styles.HotelCardPAckPrice}>
                ${hotel?.lowestPriceRoom}
              </Text>
              <Text style={styles.HotelCardPAckTime}>/ Night</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
