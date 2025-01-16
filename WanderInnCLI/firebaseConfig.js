import {initializeApp} from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
// Have to do ts-ignore as getReactNativePersistence is not detected by ts compiler with firebase 10.3.0
// @ts-ignore
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { getDatabase, ref, set } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB1tpFR1EY7mOIuUQr2NL0Ba0K1cVo1x4U',
  authDomain: 'wanderinn-3e2ec.firebaseapp.com',
  databaseURL: 'https://wanderinn-3e2ec-default-rtdb.firebaseio.com',
  projectId: 'wanderinn-3e2ec',
  storageBucket: 'wanderinn-3e2ec.appspot.com',
  messagingSenderId: '588033921416',
  appId: '1:588033921416:web:0f2dee31fea0350ae16a3d',
  measurementId: 'G-5DVFEHKMLP',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {auth};
