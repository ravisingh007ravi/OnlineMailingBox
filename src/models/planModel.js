const mongoose = require('mongoose');
const planSchema = new mongoose.Schema({

  name: { type: String, required: true, trim: true },
  monthPlan: { type: String, required: true, trim: true },
  yearPlan: { type: String, required: true, trim: true },
  imcomingMail: { type: String, required: true, trim: true },
  openAndScan: { type: String, required: true, trim: true },
  forwarding: { type: String, required: true, trim: true },
  recipients: { type: Number, required: true, trim: true },
  mode: { type: Date, required: false, trim: true },
  ExpairyDate: { type: Date, required: false, trim: true }

}, { timestamps: true })

module.exports = mongoose.model('Plan', planSchema)




































































































