const express = require('express');
const router = express.Router();
const controller = require("./orderController");

router.get('/', controller.getOrders);
router.post('/place-order', controller.placeOrder);
router.post('/:id', controller.cancelOrder);




module.exports = router;