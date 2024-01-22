const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const areasSchema = new mongoose.Schema({

    city_id: {type: ObjectId, required: true, trim:true, ref: 'city'},
    name: {type:String, required:true,trim:true},
    value: {type:String, required:true,trim:true}
  },{timestamps:true})

  module.exports=mongoose.model('areas',areasSchema)