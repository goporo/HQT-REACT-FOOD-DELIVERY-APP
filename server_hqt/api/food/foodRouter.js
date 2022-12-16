const express = require('express');
const router = express.Router();
const controller = require("./foodController");

router.get('/', controller.getAllFoods);


// router.post('/',controller.getAllFoods);
// router.get('/:id', controller.getAllFoods);
// router.put('/:id', controller.getAllFoods);
// router.delete('/:id', controller.getAllFoods);


module.exports = router;