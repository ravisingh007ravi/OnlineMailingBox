const userModel = require('../models/userMode');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");



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

const userLogIn = async function (req, res) {
    try {
        let author = req.body;

        let { email, password } = author;

        // if (email.trim().length === 0 || password.trim().length === 0) return res.status(400).send({ status: false, msg: "please provide login details" });

        if (!email) return res.status(400).send({ msg: " email is required " })
        if (!password) return res.status(400).send({ msg: "  password is required " })

        let loggedAuthor = await userModel.findOne({ email: email })
        if (!loggedAuthor) return res.status(400).send({ msg: "Email is Incorrect!" })


        const checkpasword = await bcrypt.compare(password.trim(), loggedAuthor.password);
        if (!checkpasword) return res.status(400).send({ msg: "password is Incorrect!" });

        let token = jwt.sign(
            {
                authorId: loggedAuthor._id.toString(),
                project: "MailBox"
            },
            "Enter_here_Sectrect_key", { expiresIn: '12h' }
        )

        const UserId = loggedAuthor['_id'];

        return res.status(201).send({ msg: "User logged in successfully!", loggedAuthor, token, UserId })
    } catch (error) {
        return res.status(500).send({ msg: error.message })
    }
}

const getUserData = async function (req, res) {
    try {

        // let { city_id, area_id, plan_id } = req.body;
        // console.log(city_id, area_id, plan_id)

        let data = await userModel.find()

        res.status(201).send({ status: true, msg: data })
    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }
}

module.exports = { userCreted, getUserData, userLogIn }