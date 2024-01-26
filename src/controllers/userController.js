const userModel = require('../models/userMode');
const bcrypt = require("bcrypt")

const userCreted = async function (req, res) {

    try {
        let data = req.body;

        if (Object.keys(data).length == 0) { return res.status(400).send({ status: false, message: "Body is empty can't craeate data" }) }

        let oldPlan = await userModel.findOne({ email: data.email })
        if (oldPlan) { return res.status(400).send({ status: false, message: "User already exist with this Areas" }) }

        if (data.password !== data.confirm_pass) { return res.status(400).send({ status: false, message: "Passord mismatch" }) }
        data.password = await bcrypt.hash(data.password, 10)
        data.confirm_pass = data.password

        // let getAreas = await areasModel.find({ _id: data.id }).populate("city_id")
        let createUser = await userModel.create(data);
        res.status(201).send({ status: true, msg: "User created successfully", data: createUser })

    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}

const getUserData = async function (req, res) {
    try {

        // let { city_id, area_id, plan_id } = req.body;
        // console.log(city_id, area_id, plan_id)

        let data = await userModel.find()

        res.status(201).send({status:true,msg:data})
        }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}

module.exports = { userCreted, getUserData }