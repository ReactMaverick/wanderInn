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
            //console.log('Token ==> ', token);
            //console.log('API_URL ==> ', API_URL + "getHotels");
            const response = await getData(API_URL + "getHotels", token);
            //console.log("response====> ", response);
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
            //console.log('Token ==> ', token);
            //console.log('API_URL ==> ', API_URL + "popularHotels");
            const response = await postData(
                API_URL + "popularHotels",
                { page: "1", limit: "10", search: "" },
                token
            );
            // //console.log("response====> ", response.data);
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
            //console.log('Location ====> ', location)
            const token = await getToken();
            //console.log('Token ==> ', token);
            //console.log('API_URL ==> ', API_URL + "nearbyHotels");
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
            // //console.log(" getFiveNearbyHotels response====> ", response.data.hotels);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
);
export const addToFavorite = createAsyncThunk(
    'hotel/addToFavorite',
    async (hotelId) => {
        try {
            //console.log('Hotel Id ==> ', hotelId);
            const token = await getToken();
            // //console.log('Token ==> ', token);
            // //console.log('API_URL ==> ', API_URL + "addToFavourites");
            const response = await postData(
                API_URL + "addToFavourites",
                { hotelId },
                token
            );
            // //console.log("addToFavorite response====> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Add to favourite response ===> ", error);
            return rejectWithValue(error.response.data);
        }
    }
)
export const getFavoriteHotels = createAsyncThunk(
    'hotel/getFavoriteHotels',
    async () => {
        try {
            const token = await getToken();
            //console.log('Token ==> ', token);
            //console.log('API_URL ==> ', API_URL + "getFavourites");
            const response = await postData(API_URL + "getFavourites", {}, token);
            // //console.log("getFavoriteHotels response====> ", response);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
)
export const removeFromFavorite = createAsyncThunk(
    'hotel/removeFromFavorite',
    async (hotelId) => {
        try {
            //console.log('Hotel Id ==> ', hotelId);
            const token = await getToken();
            // //console.log('Token ==> ', token);
            // //console.log('API_URL ==> ', API_URL + "addToFavourites");
            const response = await postData(
                API_URL + "removeFromFavourites",
                { hotelId },
                token
            );
            // //console.log("removeFromFavorite response====> ", response.data);
            return response.data;
        } catch (error) {
            console.error("Remove from favourite response ===> ", error);
            return rejectWithValue(error.response.data);
        }
})
export const getBookingsByUser=createAsyncThunk(
    'hotel/getBookingsByUser',
    async()=>{
        try {
            const token = await getToken();
            //console.log('Token ==> ', token);
            //console.log('API_URL ==> ', API_URL + "getBookingsByUser");
            const response = await postData(API_URL + "getBookingsByUser", {
                "searchQuery": "",
                "page": 1,
                "limit": 10
                }, token);
            //console.log("getBookingsByUser response====> ", response);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    }
)
export const getAllNearbyHotels = createAsyncThunk(
    'hotel/getAllNearbyHotels',
    async (location) => {
        try {
            //console.log('Location ====> ', location)
            const token = await getToken();
            //console.log('Token ==> ', token);
            //console.log('API_URL ==> ', API_URL + "nearbyHotels");
            const response = await postData(
                API_URL + "nearbyHotels",
                {
                    "location": {
                        "coordinates": [location.coords.latitude, location.coords.longitude]
                    },
                    "radius": 50000, // Radius in meters
                    // "search": "luxury",
                    "page": 1,
                    "limit": 10
                },
                token
            );
            // //console.log(" getFiveNearbyHotels response====> ", response.data.hotels);
            return response.data;
        } catch (error) {
            console.error(error);
            return rejectWithValue(error.response.data);
        }
    })
export const getAllPopularHotels = createAsyncThunk(
    'hotel/getAllPopularHotels',
    async () => {
        try {
            const token = await getToken();
            //console.log('Token ==> ', token);
            //console.log('API_URL ==> ', API_URL + "popularHotels");
            const response = await postData(
                API_URL + "popularHotels",
                { page: "1", limit: "10", search: "" },
                token
            );
            console.log(" getAllPopularHotels response====> ", response.data);
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
        favouriteHotels: [],
        bookings:[],
        allNearbyHotels:[],
        allPopularHotels:[],
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
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getHotels.fulfilled, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                state.hotels = action.payload;
            })
            .addCase(getHotels.rejected, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });
        builder
            .addCase(getFivePopularHotels.pending, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getFivePopularHotels.fulfilled, (state, action) => {
                // //console.log('action.payload ==> ', action.payload.hotels);
                state.fivePopularHotels = action.payload.hotels;
            })
            .addCase(getFivePopularHotels.rejected, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });
        builder
            .addCase(getFiveNearbyHotels.pending, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getFiveNearbyHotels.fulfilled, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                state.fiveNearbyHotels = action.payload.hotels;
            })
            .addCase(getFiveNearbyHotels.rejected, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });
        builder
            .addCase(addToFavorite.pending, (state, action) => {
                // //console.log('action.payload pending ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(addToFavorite.fulfilled, (state, action) => {
                // //console.log('action.payload fulfilled ==> ', action.payload);
                state.favouriteHotels = action.payload.Favourites;
                // state.hotels = action.payload;
            })
            .addCase(addToFavorite.rejected, (state, action) => {
                // //console.log('action.payload rejected ==> ', action.payload);
                // state.hotels = action.payload;
            });
        builder
            .addCase(getFavoriteHotels.pending, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getFavoriteHotels.fulfilled, (state, action) => {
                // //console.log('action.payload favouriteHotels==> ', action.payload.favourites);
                state.favouriteHotels = action.payload.favourites;
            })
            .addCase(getFavoriteHotels.rejected, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });
        builder
            .addCase(removeFromFavorite.pending, (state, action) => {
                // //console.log('action.payload pending ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(removeFromFavorite.fulfilled, (state, action) => {
                // //console.log('action.payload fulfilled ==> ', action.payload);
                state.favouriteHotels = action.payload.Favourites;
                // state.hotels = action.payload;
            })
            .addCase(removeFromFavorite.rejected, (state, action) => {
                // //console.log('action.payload rejected ==> ', action.payload);
                // state.hotels = action.payload;
            });
            builder
            .addCase(getBookingsByUser.pending, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getBookingsByUser.fulfilled, (state, action) => {
                // //console.log('action.payload bookings==> ', action.payload);
                state.bookings = action.payload.bookings;
            })
            .addCase(getBookingsByUser.rejected, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });
            builder
            .addCase(getAllNearbyHotels.pending, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getAllNearbyHotels.fulfilled, (state, action) => {
                // //console.log('action.payload allNearbyHotels==> ', action.payload);
                state.allNearbyHotels = action.payload.hotels;
            })
            .addCase(getAllNearbyHotels.rejected, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });
            builder
            .addCase(getAllPopularHotels.pending, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            })
            .addCase(getAllPopularHotels.fulfilled, (state, action) => {
                console.log('getAllPopularHotels action.payload ==> ', action.payload.hotels);
                state.allPopularHotels = action.payload.hotels;
            })
            .addCase(getAllPopularHotels.rejected, (state, action) => {
                // //console.log('action.payload ==> ', action.payload);
                // state.hotels = action.payload;
            });

    }
});
export const { setHotels, setSelectedHotel } = hotelSlice.actions;
export default hotelSlice.reducer;