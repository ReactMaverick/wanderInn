import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../values/api/url";
import { getToken } from "@/common/common";
import { getData, postData } from "@/values/api/apiprovider";

export const getHotels = createAsyncThunk(
    'hotel/getHotels',
    async () => {
        try {
            const token = await getToken();
            console.log('Token ==> ', token);
            console.log('API_URL ==> ', API_URL + "getHotels");
            const response =await getData(API_URL + "getHotels",token);
            console.log("response====> ",response);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);
export const getFivePopularHotels = createAsyncThunk(
    'hotel/getFivePopularHotels',
    async () => {
        try {
            const token = await getToken();
            console.log('Token ==> ', token);
            console.log('API_URL ==> ', API_URL + "popularHotels");
            const response = await postData(
                API_URL + "popularHotels", 
                {page: "1",limit: "10",search: ""},
                token
            );
            console.log("response====> ",response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);
export const getFiveNearbyHotels = createAsyncThunk(
    'hotel/getFiveNearbyHotels',
    async (location) => {
        try {
            console.log('Location ====> ', location)
            const token = await getToken();
            console.log('Token ==> ', token);
            console.log('API_URL ==> ', API_URL + "nearbyHotels");
            const response = await postData(
                API_URL + "nearbyHotels",
                {
                    "location": {
                        "coordinates": [location.coords.latitude, location.coords.longitude]
                    },
                    "radius": 50000, // Radius in meters
                    // "search": "luxury",
                    "page": 1,
                    "limit": 5
                },
                token
            );
            console.log(" getFiveNearbyHotels response====> ",response.data.hotels);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);

const hotelSlice = createSlice({
    name: 'hotel',
    initialState: {
        hotels: [],
        selectedHotel: null,
        fivePopularHotels: [],
        fiveNearbyHotels: [],
    },
    reducers: {
        setHotels: (state, action) => {
            state.hotels = action.payload;
        },
        setSelectedHotel: (state, action) => {
            state.selectedHotel = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getHotels.pending, (state, action) => {
                // console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
        .addCase(getHotels.fulfilled, (state, action) => {
            // console.log('action.payload ==> ', action.payload);
            state.hotels = action.payload;
        })
        .addCase(getHotels.rejected, (state, action) => {
            console.log('action.payload ==> ', action.payload);
            // state.hotels = action.payload;
        });
        builder
            .addCase(getFivePopularHotels.pending, (state, action) => {
                console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getFivePopularHotels.fulfilled, (state, action) => {
                console.log('action.payload ==> ', action.payload.hotels);
                state.fivePopularHotels = action.payload.hotels;
            })
            .addCase(getFivePopularHotels.rejected, (state, action) => {
                console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });
        builder
            .addCase(getFiveNearbyHotels.pending, (state, action) => {
                console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getFiveNearbyHotels.fulfilled, (state, action) => {
                console.log('action.payload ==> ', action.payload);
                state.fiveNearbyHotels = action.payload.hotels;
            })
            .addCase(getFiveNearbyHotels.rejected, (state, action) => {
                console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });
    }
});
export const { setHotels, setSelectedHotel } = hotelSlice.actions;
export default hotelSlice.reducer;