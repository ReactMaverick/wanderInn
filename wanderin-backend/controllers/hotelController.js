const userSchema = require('../models/userModel');
const hotelSchema = require('../models/hotelModel');
const bcrypt = require('bcrypt');
const jwt_token = require('jsonwebtoken');
const helper = require('../helper/index');
const { generateToken, sendEmailVerifyEmail, sendResetPasswordEmail } = require('../common/common');
const fs = require('fs');


exports.addHotel= async (req, res) => {
    try {
        const { name,
            location,
            amenities,
            starRating,
            rooms,
            reviews } = req.body;
        console.log("addhotel")
        const hotel = new hotelSchema({
            name,
            location,
            amenities,
            starRating,
            rooms,
            reviews
        })

        console.log("hotel",hotel);
        const savedHotel=await hotel.save();
        console.log(" saved Hotel==> ",savedHotel);
        return res.status(200).json(helper.response(201, true, "Hotel added successfully", savedHotel));
    } catch (error) {
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}
exports.getHotels = async (req, res) => {
    try {
        const hotels = await hotelSchema.find();
        return res.status(200).json(helper.response(200, true, "Hotels fetched successfully", hotels));
    } catch (error) {
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}
exports.getHotelById = async (req, res) => {
    try {
        const hotel = await hotelSchema.findById(req.params.id);
        return res.status(200).json(helper.response(200, true, "Hotel fetched successfully", hotel));
    } catch (error) {
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}
exports.updateHotel = async (req, res) => {
    try {
        const hotel = await hotelSchema.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json(helper.response(404, false, "Hotel not found"));
        }
        console.log("hotel==> ",hotel)
        const { name,
            location,
            amenities,
            starRating,
            rooms,
            reviews } = req.body;

        hotel.name = name;
        hotel.location = location;
        hotel.amenities = amenities;
        hotel.starRating = starRating;
        hotel.rooms = rooms;
        hotel.reviews = reviews;
        console.log("update data for hotel==> ",hotel)
        const updatedHotel = await hotel.save();
        return res.status(200).json(helper.response(200, true, "Hotel updated successfully", updatedHotel));
    } catch (error) {
        res.status(500).json(helper.response(500, false, "Something went wrong!"));
    }
}
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