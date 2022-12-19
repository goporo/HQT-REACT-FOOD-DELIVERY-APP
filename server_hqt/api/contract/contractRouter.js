const express = require('express');
const router = express.Router();
const controller = require("./contractController");

router.get('/list/:type', controller.getContracts);
router.get('/new',controller.getNewContracts)
router.get('/:id', controller.getContractsDetails);

router.post('/:id',controller.postNewContracts)
router.post('/accept/:id',controller.postAccept)


module.exports = router;