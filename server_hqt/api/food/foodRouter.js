const express = require('express');
const router = express.Router();
const controller = require("./foodController");

router.get('/mostSelled', controller.mostSelled);
router.get('/foodType', controller.foodType);
router.get('/price', controller.price);
router.get('/supplier', controller.supplier);




module.exports = router;