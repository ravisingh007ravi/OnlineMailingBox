const mongoose = require('mongoose');

const Statewithcountry = new mongoose.Schema({

    id: { type: Number, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    country_id: { type: Number, required: true, trim: true },
    country_code: { type: String, required: true, trim: true },
    country_name: { type: String, required: true, trim: true },
    state_code: { type: String, required: true, trim: true }

}, { timestamps: true })

module.exports = mongoose.model('databasestates', Statewithcountry)