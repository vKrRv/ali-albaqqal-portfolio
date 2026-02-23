const express = require('express');
const router = express.Router();
const awardController = require('../controllers/awardController');

router.get('/', awardController.getAwards);

module.exports = router;