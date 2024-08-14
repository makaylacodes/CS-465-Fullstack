
var express = require('express');
const { expressjwt: jwt } = require("express-jwt");

var router = express.Router();

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ["HS256"],
});

const authController = require('../controllers/authentication');
const tripsCtrl = require('../controllers/trips');

//Mistakenly wrote tripsList as the url link but it should have been just trips
router
    .route('/trips')
    .get(tripsCtrl.tripsList)
    .post(auth, tripsCtrl.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsCtrl.tripsFindByCode)
    .post(auth, tripsCtrl.tripsUpdateTrip);

router  
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

    
module.exports = router;