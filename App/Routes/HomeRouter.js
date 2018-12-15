const express = require('express');
const router = express.Router();

const homeController = require('../Controller/HomeController');

router.get( '/',  homeController.index );
router.get( '/test', homeController.test );

module.exports = router;
