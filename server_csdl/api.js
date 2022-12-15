const express = require('express')
const config = require('./dbConfig')
const sql = require("mssql")
const app = express()

require('dotenv').config()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
//const express= require('express');

var cors = require('cors')
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.options('*', cors())
app.get('/test', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", " POST");
  res.header("Access-Control-Allow-Headers", "Content-Type")
  //const us_service=new UserService.UserManager(req.body["US_ACCOUNT"],req.body["US_PASSWORD"])
  //const US_NEWPASS=""
  try {
    let pool = await sql.connect(config)
    let result = await pool.request().query('SELECT TOP 10 * FROM THUCDON')
    //console.log(result)
    sql.close()
    res.json(result)
  }
  catch (error) {
    res.send(error.message)
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));