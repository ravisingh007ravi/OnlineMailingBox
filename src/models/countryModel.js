const mongoose = require('mongoose');

const CountryStateAreas = new mongoose.Schema({

  
}, { timestamps: true })

module.exports = mongoose.model('databasecountrys', CountryStateAreas)