import {useDispatch, useSelector} from 'react-redux';
import {selectIsLoggedIn} from '../redux/reducer/authReducer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../pages/Login/Login';
import RegisterPage from '../pages/Register/Register';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import LandingPage from '../pages/Landing/Landing';
import HomePage from '../pages/Home/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import FavouritePage from '../pages/Favourite/Favourite';
import MyBookingPage from '../pages/MyBooking/MyBooking';
import ProfilePage from '../pages/Profile/Profile';
import AllNearbyHotels from '../pages/AllNearByHotels/AllNearByHotels';
import AllPopularHotels from '../pages/AllPopulerHotels/AllPopularHotels';
import NotificationPage from '../pages/Notification/Notification';
import HotelDetails from '../pages/HotelDetails/HotelDetails';
import ReviewsPage from '../pages/Reviews/Reviews';
import VerifyOTPPage from '../pages/VerifyOTP/VerifyOTP';
import {useEffect} from 'react';
import GetLocation from 'react-native-get-location';
import {requestLocationPermission} from '../common/common';
import {setLocation} from '../redux/reducer/hotelReducer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritePage}
        options={{
          title: 'Favourites',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyBooking"
        component={MyBookingPage}
        options={{
          title: 'My Booking',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'briefcase-sharp' : 'briefcase-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          title: 'Profile',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VerifyOTP"
        component={VerifyOTPPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.hotel.location);
  // console.log('auth is router ==> ', auth);

  /* useEffect(() => {
    requestLocationPermission();
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log('location ==> ', location);
        dispatch(setLocation(location));
      })
      .catch(error => {
        console.log('error ==> ', error);
      });
  }, []); */
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllNearByHotels"
        component={AllNearbyHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AllPopularHotels"
        component={AllPopularHotels}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotificationPage"
        component={NotificationPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HotelDetails"
        component={HotelDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReviewsPage"
        component={ReviewsPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    );
  }
};

export default Router;
