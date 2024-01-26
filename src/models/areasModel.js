const mongoose = require('mongoose');

const areasSchema = new mongoose.Schema({

  city_id: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'city' },
  name: { type: String, required: true, trim: true },
  value: { type: String, required: true, trim: true }
}, { timestamps: true })

module.exports = mongoose.model('areas', areasSchema)