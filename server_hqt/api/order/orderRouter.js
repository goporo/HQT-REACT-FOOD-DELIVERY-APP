const express = require('express');
const router = express.Router();
const controller = require("./orderController");

router.get('/customer', controller.getOrdersCustomer);
router.get('/shipper', controller.getOrdersShipper);
router.get('/branch', controller.getOrdersBranch);
router.get('/supplier', controller.getOrdersSupplier);
router.post('/place-order', controller.placeOrder);
router.post('/:type', controller.cancelOrder);




module.exports = router;