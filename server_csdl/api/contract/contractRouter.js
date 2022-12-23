const express = require('express');
const router = express.Router();
const controller = require("./contractController");

router.put('/employee/:type', controller.getContracts);
router.put('/business/:id', controller.getBusinessContracts);
router.put('/new', controller.getNewContracts)
router.put('/:id', controller.getContractsDetails);
router.post('/accept', controller.postAccept)
router.post('/extend', controller.postExtendContracts)
router.post('/:madoitac', controller.postNewContracts)



module.exports = router;