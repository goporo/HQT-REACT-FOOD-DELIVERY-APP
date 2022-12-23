const express = require('express');
const router = express.Router();
const controller = require("./userController");

router.post('/register/customer', controller.registerCustomer);
router.post('/register/shipper', controller.registerShipper);
router.post('/register/admin', controller.registerAdmin);
router.post('/register/employee', controller.registerEmployee);
router.post('/register/supplier', controller.registerSupplier);

//kh, dt, tx, cn
router.put('/profile/:usid', controller.getProfileUser);
router.put('/profile/:usid', controller.getProfileUser);
router.post('/login/:type', controller.login)
router.post('/profile/:usid', controller.updateProfileUser);


module.exports = router;