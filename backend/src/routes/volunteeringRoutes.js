const express = require('express');
const router = express.Router();
const volunteeringController = require('../controllers/volunteeringController');

router.get('/', volunteeringController.getVolunteering);

module.exports = router;