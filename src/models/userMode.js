const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  country_id: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'databasecountrys' },
  state_id: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'databasestates' },
  city_id: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'databasecitys' },
  area_id: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'areas' },
  plan_id: { type: mongoose.Schema.Types.ObjectId, required: true, trim: true, ref: 'Plan' },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: Number, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  confirm_pass: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)   