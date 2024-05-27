const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const admin = require('firebase-admin');
const jwt_token = require('jsonwebtoken');
const helper = require('../helper/index');
const fs = require('fs');
const User = require('../models/userModel');
const Hotel = require('../models/hotelModel');
const Booking = require('../models/bookingSchema');

const firebase_API_KEY = process.env.FIREBASE_API_KEY;

exports.register = async (req, res) => {
    const { name, email, password, phone, image } = req.body;
    try {

        if (!email || !password) {
            return res.status(400).json(helper.response(400, false, "Email and Password are required!"));
        }

        const userRecord = await admin.auth().getUserByEmail(email);

        console.log("User Record ==> ", userRecord);

        return res.status(409).json(helper.response(409, false, "Email Already Exists!"));

    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            // User not found
            const newUser = await admin.auth().createUser({
                email,
                password,
            });

            console.log("New User ==> ", newUser);

            let user = await userSchema.findOne({ email });

            if (!user) {

                const userResult = new userSchema({
                    name: name ? name : null,
                    email,
                    phone: phone ? phone : null,
                    image: image ? image : null,
                    isAdmin: false,
                    isEmailVerified: false,
                    isPhoneVerified: false,
                });

                user = await userResult.save();
            }

            return res.status(201).json(helper.response(201, true, "User created successfully!", user));
        } else {
            // Some other error occurred.
            console.error('Error fetching user data:', error);

            return res.status(500).json(helper.response(500, false, "something went wrong in checking user!"));
        }
    }
}

exports.login = async (req, res) => {
    try {
        const { email } = req.body;

        const userRecord = await admin.auth().getUserByEmail(email);

        let user = await userSchema.findOne({ email });

        if (!user) {
            user = new userSchema({
                name: userRecord.displayName ? userRecord.displayName : null,
                email: userRecord.email,
                phone: userRecord.phoneNumber ? userRecord.phoneNumber : null,
                image: userRecord.photoURL ? userRecord.photoURL : null,
                isAdmin: false,
                isEmailVerified: userRecord.emailVerified,
                isPhoneVerified: userRecord.phoneNumber ? true : false,
            });
        } else {
            user.isEmailVerified = userRecord.emailVerified;
            user.isPhoneVerified = userRecord.phoneNumber ? true : false;
        }

        // console.log("User Record ==> ", userRecord);

        user = await user.save();

        return res.status(200).json(helper.response(200, true, "Logged in Successfully!", user));
    } catch (error) {
        if (error.code === 'auth/user-not-found') {
            // User not found
            return res.status(400).json(helper.response(400, false, "User not found!"));
        } else {
            // Some other error occurred.
            console.error('Error fetching user data:', error);

            return res.status(500).json(helper.response(500, false, "something went wrong in checking user!"));
        }
    }
}

exports.generateIdToken = async (req, res) => {
    try {
        const { email, password } = req.body;

        // console.log('API Key ==> ', firebase_API_KEY);

        // Sign in the user using the Firebase Authentication REST API
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebase_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        const data = await response.json();

        // console.log('Response ==> ', data);

        const idToken = data.idToken;

        // console.log('Id token:', idToken);

        return res.status(200).json(helper.response(200, true, "Id token generated successfully!", { idToken }));

    } catch (error) {
        console.error('Error generating id token:', error);

        return res.status(500).json(helper.response(500, false, "something went wrong in generating id token!"));
    }
}

exports.getUser = async (req, res) => {
    try {
        const { email } = req.currentUser;

        let user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        return res.status(200).json(helper.response(200, true, "User found!", user));

    } catch (error) {
        console.error('Error fetching user:', error);

        return res.status(500).json(helper.response(500, false, "something went wrong in fetching user!"));
    }
}


exports.updateUser = async (req, res) => {
    try {
        const { name, email, phone, image } = req.body;

        let user = await userSchema.findOne({ email });

        if (!user) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        user.name = name ? name : user.name;
        user.phone = phone ? phone : user.phone;
        user.image = image ? image : user.image;

        user = await user.save();

        return res.status(200).json(helper.response(200, true, "User updated successfully!", user));

    } catch (error) {
        console.error('Error updating user:', error);

        return res.status(500).json(helper.response(500, false, "something went wrong in updating user!"));
    }
}

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const userRecord = await admin.auth().getUserByEmail(email);

        // console.log("User Record ==> ", userRecord);

        if (!userRecord) {
            return res.status(400).json(helper.response(400, false, "User not found!"));
        }

        return res.status(200).json(helper.response(200, true, "User found!"));

    } catch (error) {

        if (error.code === 'auth/user-not-found') {
            // User not found
            return res.status(400).json(helper.response(400, false, "User not found!"));
        } else {
            // Some other error occurred.
            console.error('Error fetching user data:', error);

            return res.status(500).json(helper.response(500, false, "something went wrong in checking user!"));
        }
    }
}

// Controller function to add a hotel to favorites
exports.addToFavorites = async (req, res) => {
    try {
        const { hotelId, userId } = req.body;
        // const user = req.user; // Assuming the user object is available in the request
        console.log("User ID: ", userId);
        console.log("Hotel ID: ", hotelId);
        // Check if the hotel exists
        const hotel = await Hotel.findById(hotelId);
        if (!hotel) {
            return res.status(404).json({ success: false, message: "Hotel not found" });
        }
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        console.log("User: ", user);
        // Add the hotel to the user's favorites
        user.Favourites.push(hotel);
        await user.save();

        // Return the updated user object with full hotel details
        const updatedUser = await User.findById(user._id).populate('Favourites');
        return res.status(200).json({ success: true, message: "Hotel added to favorites", user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Something went wrong!" });
    }
};
exports.removeFromFavorites = async (req, res) => {
    try {
        const { hotelId, userId } = req.body;
        // const user = req.user; // Assuming the user object is available in the request
        console.log("User ID: ", userId);
        console.log("Hotel ID: ", hotelId);
        // Check if the hotel exists
        const hotel = await Hotel.findById(hotelId);
        if (!hotel) {
            return res.status(404).json({ success: false, message: "Hotel not found" });
        }
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        console.log("User: ", user);
        // Remove the hotel from the user's favorites
        user.Favourites = user.Favourites.filter(fav => fav._id.toString() !== hotelId);
        await user.save();

        // Return the updated user object with full hotel details
        const updatedUser = await User.findById(user._id).populate('Favourites');
        return res.status(200).json({ success: true, message: "Hotel removed from favorites", user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Something went wrong!" });
    }
}
exports.getFavouriteHotelsByUser = async (req, res) => {
    try {
        const { userId, searchQuery, page = 1, limit = 10 } = req.body;

        // Find the user and populate their favorite hotels
        const user = await User.findById(userId).populate({
            path: 'Favourites',
            match: searchQuery ? { name: { $regex: searchQuery, $options: 'i' } } : {},
            options: {
                skip: (page - 1) * limit,
                limit: parseInt(limit),
            }
        });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Get the total count of favorite hotels that match the search query
        const totalFavorites = await Hotel.countDocuments({
            _id: { $in: user.Favourites },
            ...(searchQuery && { name: { $regex: searchQuery, $options: 'i' } })
        });

        return res.status(200).json({
            success: true,
            favorites: user.Favourites,
            totalFavorites,
            totalPages: Math.ceil(totalFavorites / limit),
            currentPage: page
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Something went wrong!" });
    }
}
exports.getBookingsByUser = async (req, res) => {
    try {
        const { userId, searchQuery, page = 1, limit = 10 } = req.body;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json(helper.response(404, false, "User not found"));
        }

        // Create a query object for searching
        const query = {
            user: userId
        };

        // If a search query is provided, add it to the search criteria
        if (searchQuery) {
            query.$or = [
                { 'hotel.name': new RegExp(searchQuery, 'i') },
                { 'room.name': new RegExp(searchQuery, 'i') }
            ];
        }
        console.log("Query: ", query);
        // Calculate the skip value for pagination
        const skip = (page - 1) * limit;

        // Fetch bookings based on the search criteria with pagination
        const bookings = await Booking.find(query)
            .skip(skip)
            .limit(limit)
            .populate('hotel')
            .populate('room');

        // Get the total count of bookings for pagination
        const totalBookings = await Booking.countDocuments(query);

        return res.status(200).json(helper.response(200, true, "Bookings fetched successfully", {
            bookings,
            pagination: {
                total: totalBookings,
                page,
                limit
            }
        }));
    } catch (error) {
        console.error(error);
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
};