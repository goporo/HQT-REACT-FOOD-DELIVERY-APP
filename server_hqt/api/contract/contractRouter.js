const express = require('express');
const router = express.Router();
const controller = require("./contractController");

router.get('/employee/:type', controller.getContracts);
router.get('/supplier/:id', controller.getSupplierContracts);
router.get('/new',controller.getNewContracts)
router.get('/:id', controller.getContractsDetails);
router.post('/accept',controller.postAccept)
router.post('/extend',controller.postExtendContracts)
router.post('/:id',controller.postNewContracts)



module.exports = router;