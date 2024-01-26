const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({

    id: { type: Number, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    state_id: { type: String, required: true, trim: true },
    state_code: { type: String, required: true, trim: true },
    state_name: { type: String, required: true, trim: true },
    country_id: { type: Number, required: true, trim: true },
    country_code: { type: String, required: true, trim: true },
    country_name: { type: String, required: true, trim: true },
}, { timestamps: true })

module.exports = mongoose.model('databasecitys', citySchema)