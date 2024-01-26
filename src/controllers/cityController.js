const cityModel = require('../models/cityModel.js');


let getCitywithState = async function(req, res){
     
    try {
        // let Country = req.params.Country
        let data = await cityModel.find({state_name:req.params.city})    
        res.status(201).send(data);
    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}

let cityPlan = async function (req, res) {

    try {
        let data = req.body;

        if (Object.keys(data).length == 0) { return res.status(400).send({ status: false, message: "Body is empty can't craeate data" }) }

        let oldPlan = await cityModel.findOne({ name: data.name })
        if (oldPlan) { return res.status(400).send({ status: false, message: "City already exist City in this value" }) }

        let cityPlan = await cityModel.create(data);
        res.status(201).send({ status: true, msg: "City created successfully", data: cityPlan })

    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}


let getCity = async function (req, res) {

    try {

        let data = req.body;
        let getAreas = await areasModel.find({ _id: data.id }).populate("city_id")
        res.status(201).send({ status: true, msg: "All Areas successfully", data: getAreas })

    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}

let getcityPlan = async function (req, res) {

    try {
        let getCityPlan = await cityModel.find();

        if (getCityPlan.length == 0) { return res.status(400).send({ status: "false, message:NoData" }) }
        res.status(201).send({ status: true, msg: "Get All City successfully", data: getCityPlan })

    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}




module.exports = { cityPlan, getcityPlan, getCitywithState };