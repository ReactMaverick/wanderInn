const userSchema = require('../models/userModel');
const Hotel = require('../models/hotelModel');
const bcrypt = require('bcrypt');
const jwt_token = require('jsonwebtoken');
const Room = require('../models/roomSchema');
const Review = require('../models/reviewSchema');
const helper = require('../helper/index');
const { generateToken, sendEmailVerifyEmail, sendResetPasswordEmail } = require('../common/common');
const fs = require('fs');


exports.addHotel = async (req, res) => {
    try {
        const { name, location, amenities, starRating, rooms, reviews } = req.body;

        // Save hotel details
        const hotel = new Hotel({
            name,
            location,
            amenities,
            starRating,
        });

        const savedHotel = await hotel.save();

        // Save room details
        const roomPromises = rooms.map(async (room) => {
            const newRoom = new Room({
                ...room,
                hotel: savedHotel._id // Reference hotel id
            });
            return newRoom.save();
        });

        const savedRooms = await Promise.all(roomPromises);

        
        // const savedReviews = await Promise.all(reviewPromises);

        // Update saved hotel with saved room and review ids
        savedHotel.rooms = savedRooms.map(room => room._id);
        // savedHotel.reviews = savedReviews.map(review => review._id);
        await savedHotel.save();

        return res.status(201).json(helper.response(201, true, "Hotel added successfully", savedHotel));
    } catch (error) {
        console.error(error);
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
};
exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        return res.status(200).json(helper.response(200, true, "Hotels fetched successfully", hotels));
    } catch (error) {
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}
exports.getHotelById = async (req, res) => {
    console.log("req.params.id==> ",req.params.id)
    try {
        const hotel = await Hotel.findById(req.params.id);
        return res.status(200).json(helper.response(200, true, "Hotel fetched successfully", hotel));
    } catch (error) {
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}
exports.updateHotel = async (req, res) => {
    try {
        const { name, location, amenities, starRating, rooms, reviews } = req.body;

        // Find hotel
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json(helper.response(404, false, "Hotel not found"));
        }

        // Update hotel details
        hotel.name = name;
        hotel.location = location;
        hotel.amenities = amenities;
        hotel.starRating = starRating;

        // Update room details
        const roomPromises = rooms.map(async (room) => {
            if (room._id) {
                return Room.findByIdAndUpdate(room._id, room, { new: true });
            } else {
                const newRoom = new Room({
                    ...room,
                    hotel: hotel._id // Reference hotel id
                });
                return newRoom.save();
            }
        });

        const updatedRooms = await Promise.all(roomPromises);

        // Update review details
        // const reviewPromises = reviews.map(async (review) => {
        //     if (review._id) {
        //         return Review.findByIdAndUpdate(review._id, review, { new: true });
        //     } else {
        //         const newReview = new Review({
        //             ...review,
        //             hotel: hotel._id // Reference hotel id
        //         });
        //         return newReview.save();
        //     }
        // });

        // const updatedReviews = await Promise.all(reviewPromises);

        // Update hotel with updated room and review ids
        hotel.rooms = updatedRooms.map(room => room._id);
        // hotel.reviews = updatedReviews.map(review => review._id);

        await hotel.save();

        return res.status(200).json(helper.response(200, true, "Hotel updated successfully", hotel));
    } catch (error) {
        console.error(error);
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
};
exports.deleteHotel = async (req, res) => {
    try {
        const hotel = await hotelSchema.findById(req.params.id);
        console.log("hotel==> ",hotel)
        if (!hotel) {
            return res.status(404).json(helper.response(404, false, "Hotel not found"));
        }
        const deletedHotel = await hotelSchema.findByIdAndDelete(req.params.id);
        // await hotel.remove();
        return res.status(200).json(helper.response(200, true, "Hotel deleted successfully", deletedHotel));
    } catch (error) {
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}
exports.deleteRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json(helper.response(404, false, "Room not found"));
        }
        // delete room's reference from hotel
        const hotel = await Hotel.findOne({ rooms: req.params.id });
        hotel.rooms = hotel.rooms.filter(room => room.toString() !== req.params.id);
        await hotel.save();
        const deletedRoom = await Room.findByIdAndDelete(req.params.id);
        return res.status(200).json(helper.response(200, true, "Room deleted successfully", deletedRoom));
    } catch (error) {
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}