const express = require('express');
const router = express.Router();
const controller = require("./authController");

router.post('/register/customer',  controller.registerCustomer);
router.post('/register/shipper',  controller.registerShipper);
router.post('/register/admin',  controller.registerAdmin);
router.post('/register/employee',  controller.registerEmployee);
router.post('/register/supplier',  controller.registerSupplier);

module.exports = router;