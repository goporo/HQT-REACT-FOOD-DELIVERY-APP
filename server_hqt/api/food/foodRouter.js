const express = require('express');
const router = express.Router();
const controller = require("./foodController");

router.get('/mostSold', controller.mostSold);
router.get('/foodType', controller.foodType);
router.get('/price', controller.price);
router.get('/supplier', controller.supplier);
router.get('/type', controller.type);

router.patch('/supplier', controller.supplier);
module.exports = router;