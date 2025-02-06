import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    google_places_api_key: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      // console.log('User logged in: ', action.payload);

      const {user, google_places_api_key} = action.payload;

      state.user = user;
      state.isLoggedIn = true;

      if (google_places_api_key) {
        state.google_places_api_key = google_places_api_key;
      }
    },
    logout: state => {
      state.user = null;
      state.isLoggedIn = false;
      state.google_places_api_key = null;
    },
  },
});

export const {login, logout} = authSlice.actions;

export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectGooglePlacesApiKey = state => state.auth.google_places_api_key;

export default authSlice.reducer;
