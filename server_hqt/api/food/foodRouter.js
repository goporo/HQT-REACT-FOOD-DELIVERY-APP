const express = require('express');
const router = express.Router();
const controller = require("./foodController");

router.put('/mostSold', controller.mostSold);
router.put('/foodType', controller.foodType);
router.put('/price', controller.price);
router.put('/supplier', controller.supplier);
router.put('/type', controller.type);

router.patch('/supplier', controller.supplier);
module.exports = router;