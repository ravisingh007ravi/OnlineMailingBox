const stateModel = require('../models/stateModels.js')

const Createstate = async function (req, res) {

    try {

        let data = req.body;
        let Createstate = await stateModel.create(data)
       
        res.status(201).send(Createstate);
    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }

}

const getDatastatewithcountry = async function (req, res) {

    try {
        let Country = req.params.state
        let data = await stateModel.find({country_name:Country})    
        res.status(201).send(data);
    }
    catch (err) { res.status(500).send({ status: false, msg: err.message }); }

}

module.exports = { getDatastatewithcountry, Createstate };

// {
//     "_id": "65afadc3d85bbbfc31484bfe",
//     "id": 3901,
//     "name": "Badakhshan",
//     "country_id": 1,
//     "country_code": "AF",
//     "country_name": "Afghanistan",
//     "state_code": "BDS"
// },