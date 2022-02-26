const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');


router.get('/professional', mainController.getData);

module.exports = router;