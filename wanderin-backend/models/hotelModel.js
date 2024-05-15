const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    amenities: [String],
    starRating: { type: Number, min: 1, max: 5 },
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    // Additional hotel-related fields can be added
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;