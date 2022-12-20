const express = require('express');
const router = express.Router();
const controller = require("./supplierController");

router.get('/', controller.getSuppliers);
router.get('/:id', controller.getSuppliersDetails);
router.post('/food/:id', controller.addFood)
router.patch('/food', controller.updateFood)


module.exports = router;