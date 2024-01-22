const mongoose = require('mongoose');
const planSchema = new mongoose.Schema({

    name: {type:String, required:true,trim:true},
  },{timestamps:true})

  module.exports=mongoose.model('Plan',planSchema)