const cityModel = require('../models/cityModel.js')

let cityPlan = async function(req, res){

    try{
        let data = req.body;

        if (Object.keys(data).length == 0) {return res.status(400).send({ status: false, message: "Body is empty can't craeate data" })}
    
        let oldPlan = await cityModel.findOne({name:data.name})
        if (oldPlan) {return res.status(400).send({status: false,message: "User already exist with this City"})}

        let cityPlan = await cityModel.create(data);
        res.status(201).send({ status: true, msg: "City created successfully",data:cityPlan })
    
    }
    catch(err){res.status(500).send({ status: false, msg: err.message });}
}

module.exports = { cityPlan };