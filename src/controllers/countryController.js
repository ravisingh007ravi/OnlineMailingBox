const countryModel = require('../models/countryModel.js')

const getcountryData = async function(req, res){
     
    try{

        let data = await countryModel.find().select({_id: 1,id:1,name:1,iso3:1,iso2:1,numeric_code:1,phone_code:1,capital:1})

        // .select({_id: 1,id:1,name:1,state_id:1,state_code:1,state_name:1,country_id:1,country_code:1,country_name:1})
        res.status(201).send({ status: true, msg: data });
    }
    catch(err) { res.status(500).send({ status: false, msg: err.message }); }

}

module.exports = { getcountryData };