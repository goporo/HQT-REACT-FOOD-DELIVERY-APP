

const express = require('express');
const router = express.Router();
const controller = require("./supplierController");

router.put('/', controller.getSuppliers);
router.put('/:id', controller.getSuppliersDetails);
router.post('/food/:id', controller.addFood)



module.exports = router;