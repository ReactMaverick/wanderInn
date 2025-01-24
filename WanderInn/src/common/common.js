import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../firebaseConfig.js';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const getToken = async () => {
  // if (!auth.currentUser) {
  //   return null;
  // }

  // try {
  //   const token = await auth.currentUser.getIdToken();
  //   console.log('auth.currentUser ====> ', auth.currentUser);

  //   console.log('Token ==> ', token);
  //   return token;
  // } catch (error) {
  //   console.error('Error getting token:', error);
  //   return null;
  // }

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async user => {
      if (!user) {
        console.warn('No user is logged in.');
        return resolve(null);
      }

      try {
        const token = await user.getIdToken();
        // console.log('Token:', token);
        resolve(token);
      } catch (error) {
        console.error('Error getting token:', error.message || error);
        resolve(null);
      }
    });
  });
};
export const formatToOneDecimalPlace = num => {
  return parseFloat(num?.toFixed(1));
};


export const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "This app needs access to your location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log("You can use the location");
        // console.log(granted);
        
      } else {
        // console.log("Location permission denied");
      }
    }
  } catch (err) {
    console.warn(err);
  }
};

// export const requestLocationAuthorization = async () => {
//   try {
//     const authStatus = Geolocation.requestAuthorization();
//     console.log('Location Authorization Status: ', authStatus);
//     if (authStatus === 'granted' || authStatus === 'authorized_when_in_use') {
//       return true;
//     } else {
//       // setErrorMsg('Location permission denied.');
//       Alert.alert('Permission Denied', 'Location access is required.');
//       return false;
//     }
//   } catch (error) {
//     console.error('Error requesting location authorization: ', error);
//     // setErrorMsg('Failed to request location permission.');
//     return false;
//   }
// };
