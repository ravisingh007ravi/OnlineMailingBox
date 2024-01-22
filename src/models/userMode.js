const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({

    city_id: {type: ObjectId, required: true, trim:true, ref: 'city'},
    area: {type: ObjectId, required: true, trim:true, ref: 'areas'},
    plan_id: {type: ObjectId, required: true, trim:true, ref: 'Plan'},
    name: {type:String, required:true,trim:true},
    email: {type:String, required:true,trim:true},
    phone: {type:Number, required:true,trim:true},
    password: {type:String, required:true,trim:true},
    confirm_pass: {type:String, required:true,trim:true},
    address: {type:String, required:true,trim:true},
  },{timestamps:true})

  module.exports=mongoose.model('user',userSchema)