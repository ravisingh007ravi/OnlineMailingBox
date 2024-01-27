const mongoose = require('mongoose');

const CountryStateAreas = new mongoose.Schema({

    id: { type: Number, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    iso3: { type: Number, required: true, trim: true },
    iso2: { type: String, required: true, trim: true },
    numeric_code: { type: String, required: true, trim: true },
    phone_code: { type: String, required: true, trim: true },
    capital: { type: String, required: true, trim: true },
  
}, { timestamps: true })

module.exports = mongoose.model('databasecountrys', CountryStateAreas)