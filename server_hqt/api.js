const express = require('express')
const config = require('./dbConfig')
const sql = require("mssql")
const app = express()
var bodyParser = require('body-parser')
const foodRouter = require('./api/food/foodRouter');
const supplierRouter = require('./api/supplier/supplierRouter');
const orderRouter = require('./api/order/orderRouter');
const userRouter = require('./api/user/userRouter');
const contractRouter = require('./api/contract/contractRouter');
const fs = require('fs')

var cors = require('cors')

app.use(cors())
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.options('*', cors())


app.use('/food', foodRouter)
app.use('/supplier', supplierRouter)
app.use('/order', orderRouter)
app.use('/user', userRouter)
app.use('/contract', contractRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));