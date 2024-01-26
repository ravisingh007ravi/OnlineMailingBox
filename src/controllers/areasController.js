const areasModel = require('../models/areasModel.js')

let createAreas = async function (req, res) {

    try {
        let data = req.body;

        if (Object.keys(data).length == 0) { return res.status(400).send({ status: false, message: "Body is empty can't craeate data" }) }

        let oldPlan = await areasModel.findOne({ value: data.value })
        if (oldPlan) { return res.status(400).send({ status: false, message: "User already exist Area in this value" }) }

        let createAreas = await areasModel.create(data);
        res.status(201).send({ status: true, msg: "Plan created successfully", data: createAreas })

    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}

let getCity = async function (req, res) {

    try {

        let data = req.body.id;
        let getAreas = await areasModel.find({ _id: data }).populate("city_id")
        res.status(201).send({ status: true, msg: "All Areas successfully", data: getAreas })

    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}

module.exports = { createAreas,getCity };