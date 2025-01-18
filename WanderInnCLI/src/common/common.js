import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../../firebaseConfig.js';

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
        console.log('Token:', token);
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
