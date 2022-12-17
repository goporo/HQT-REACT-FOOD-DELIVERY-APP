const express = require('express');
const router = express.Router();
const controller = require("./supplierController");

router.get('/', controller.getSuppliers);
router.get('/:id', controller.getSuppliersDetails);




module.exports = router;