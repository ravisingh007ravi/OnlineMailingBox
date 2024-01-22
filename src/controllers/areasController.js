const areasModel = require('../models/areasModel.js')

let createAreas = async function(req, res){

    try{
        let data = req.body;

        if (Object.keys(data).length == 0) {return res.status(400).send({ status: false, message: "Body is empty can't craeate data" })}
    
        let oldPlan = await areasModel.findOne({name:data.name})
        if (oldPlan) {return res.status(400).send({status: false,message: "User already exist with this Areas"})}

        let createAreas = await areasModel.create(data);
        res.status(201).send({ status: true, msg: "Plan created successfully",data:createAreas })
    
    }
    catch(err){res.status(500).send({ status: false, msg: err.message });}
}

let getAreas = async function(req, res){

    try{
     
        let getAreas = await areasModel.find();
        res.status(201).send({ status: true, msg: "All Areas successfully",data:getAreas })
    
    }
    catch(err){res.status(500).send({ status: false, msg: err.message });}
}

module.exports = { createAreas, getAreas };