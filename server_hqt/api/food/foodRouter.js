const express = require('express');
const router = express.Router();
const controller = require("./foodController");

router.get('/', controller.getFoods);




module.exports = router;