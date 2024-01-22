const express=require("express")
const router=express.Router()
const {createPlan} = require('../controllers/planControler.js');
const {createAreas, getAreas} = require('../controllers/areasController.js');
const {cityPlan} = require('../controllers/cityController.js')

router.post("/createPlan", createPlan);
router.post("/createCity", cityPlan);
router.post("/createAreas", createAreas);
router.get("/getAreas", getAreas);




module.exports = router;