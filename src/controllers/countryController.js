const countryModel = require('../models/countryModel.js')

const getcountryData = async function(req, res){
     
    try{

        let data = await countryModel.find()
        res.status(201).send({ status: true, msg: data });
    }
    catch(err) { res.status(500).send({ status: false, msg: err.message }); }

}

const findcountryData = async function(req, res){
     
    try{

        let countryName = req.params.countryName;
        console.log(countryName)
        let data = await countryModel.find({name:countryName})
        res.status(201).send({ status: true, msg: data });
    }
    catch(err) { res.status(500).send({ status: false, msg: err.message }); }

}

module.exports = { getcountryData, findcountryData };