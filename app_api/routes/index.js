var express = require('express');
var router = express.Router();

const tripsCtrl = require('../controllers/trips');

//Mistakenly wrote tripsList as the url link but it should have been just trips
router
    .route('/trips')
    .get(tripsCtrl.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsCtrl.tripsFindByCode);

    
module.exports = router;