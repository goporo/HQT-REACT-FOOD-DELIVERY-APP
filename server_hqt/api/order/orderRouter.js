const express = require('express');
const router = express.Router();
const controller = require("./orderController");

router.put('/customer', controller.getOrdersCustomer);
router.put('/shipper', controller.getOrdersShipper);
router.put('/branch', controller.getOrdersBranch);
router.put('/supplier', controller.getOrdersSupplier);
router.put('/orderdetails', controller.getOrderDetails);
router.put('/:status', controller.getOrdersByStatus);

router.post('/place-order', controller.placeOrder);
router.post('/:type', controller.cancelOrder);




module.exports = router;