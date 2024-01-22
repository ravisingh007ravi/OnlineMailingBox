const planModel = require('../models/planModel.js')

let createPlan = async function(req, res){

    try{
        let data = req.body;

        if (Object.keys(data).length == 0) {return res.status(400).send({ status: false, message: "Body is empty can't craeate data" })}
    
        let oldPlan = await planModel.findOne({name:data.name})
        if (oldPlan) {return res.status(400).send({status: false,message: "User already exist with this Plan"})}

        let createPlan = await planModel.create(data);
        res.status(201).send({ status: true, msg: "Plan created successfully",data:createPlan })
    
    }
    catch(err){res.status(500).send({ status: false, msg: err.message });}
}

module.exports = { createPlan };