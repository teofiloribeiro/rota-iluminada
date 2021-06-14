const mongoose = require('../database');

const LightPointSchema = new mongoose.Schema({
    lat: {
        type: Number,
        required: true,
    },
    long: {
        type: Number,
        required: true,
    },
    lux: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const LightPoint = mongoose.model('LightPoint', LightPointSchema);

module.exports = LightPoint;