const express = require('express');
const router = express.Router();
const controller = require("./contractController");

router.get('/', controller.getContracts);
router.get('/:id', controller.getContractsDetails);




module.exports = router;