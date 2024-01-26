const express = require("express")
const router = express.Router()
const { createPlan, getPlan } = require('../controllers/planControler.js');
const { createAreas, getCity } = require('../controllers/areasController.js');
const { cityPlan, getcityPlan, getCitywithState } = require('../controllers/cityController.js');
const { userCreted, getUserData } = require('../controllers/userController.js');

const {getcountryData} = require('../controllers/countryController.js')
const {getDatastatewithcountry, Createstate} = require('../controllers/stateController.js')

router.get("/Country", getcountryData);
router.post("/state", Createstate);
router.get("/Country/:state", getDatastatewithcountry);
router.get("/Country/state/:city", getCitywithState);

router.post("/createPlan", createPlan);
router.post("/createCity", cityPlan);
router.post("/createAreas", createAreas);
router.post("/createUser", userCreted);

router.get("/getPlan", getPlan);
router.get("/getAllCityPlan", getcityPlan);
router.post("/getCityWithAres", getCity);
router.get("/getUserData", getUserData);




module.exports = router;

