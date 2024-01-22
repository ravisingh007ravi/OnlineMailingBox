const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({

    name: {type:String, required:true,trim:true},
    value: {type:String, required:true,trim:true}
  },{timestamps:true})

  module.exports=mongoose.model('city',citySchema)