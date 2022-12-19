const express = require('express');
const router = express.Router();
const controller = require("./contractController");

router.get('/:type', controller.getContracts);
router.get('/:id', controller.getContractsDetails);
router.get('/new',controller.getNewContracts)
router.post('/:id',controller.postNewContracts)
router.post('/accept/:id',controller.postAccept)


module.exports = router;