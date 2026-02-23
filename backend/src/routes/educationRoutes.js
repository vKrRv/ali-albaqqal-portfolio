const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

router.get('/', educationController.getEducations);

module.exports = router;