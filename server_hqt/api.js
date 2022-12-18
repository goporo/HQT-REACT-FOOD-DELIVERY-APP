const express = require('express')
const config = require('./dbConfig')
const sql = require("mssql")
const app = express()
var bodyParser = require('body-parser')
const foodRouter = require('./api/food/foodRouter');
const supplierRouter = require('./api/supplier/supplierRouter');
const orderRouter = require('./api/order/orderRouter');
const authRouter = require('./api/auth/authRouter');
const fs=require('fs')

var cors = require('cors')

app.use(cors())
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.options('*', cors())
async function test() {

  let pool = await sql.connect(config)
  let result = await pool.request().query('SELECT * FROM TAIKHOAN SELECT * FROM THUCDON')
  console.log(result)
  sql.close()
  return result

}


app.post('/picture',(req,res)=>{
  let formidable=require('formidable');
  var form= new formidable.IncomingForm()
  form.uploadDir="./pictures"
  form.keepExtensions=true;
  form.maxFieldSize=10*1024*1024
  form.parse(req,(err,fields,files)=>{
    if (err){
      res.json({
        success:false,
        message:"Khong the upload hinh",
        data:{}
      })
      return
    }
    var  arr=files[""]
    if (arr.length>0)
    {
      var filenames=[]
      arr.forEach((eachFile)=>{
        filenames.push(eachFile.path)
      })
      res.json({
        success:true,
        message:"Upload thanh cong",
        data:{}
      })
      return
    }
    else{
      res.json({
        success:false,
        message:"Upload that bai",
        data:{}
      })
      return
    }
  })
})
// respond with "hello world" when a GET request is made to the homepage
app.get('/picture/:url', (req, res) => {
  let image_name='./pictures/'+req.params.url
  fs.readFile(image_name,(err,ImageData)=>{
    if (err){
      res.json({
        success:false,
        message:"Khong the lay hinh",
        data:{}
      })
      return
    }
    res.writeHead(200,{'Content-Type':'image/jpeg'})
    res.end(ImageData)
  })
})
//const express= require('express');




app.post('/test', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    console.log(req.body)
    //console.log(req.body["TENTK"])
    //console.log(req.body["MATKHAUTK"])
   // console.log(req.body["LOAITK"])
    let pool = await sql.connect(config)
    let result = await pool.request().query('SELECT * FROM THUCDON')
    //console.log(result)
    sql.close()
    res.json(result.recordsets[0])
})
//   //const us_service=new UserService.UserManager(req.body["US_ACCOUNT"],req.body["US_PASSWORD"])
//   //const US_NEWPASS=""
//   try {
//     let pool = await sql.connect(config)
//     let result = await pool.request().query('SELECT TOP 10 * FROM THUCDON')
//     //console.log(result)
//     sql.close()
//     res.json(result.recordset)
//   }
//   catch (error) {
//     res.send(error.message)
//   }
// });

app.use('/food', foodRouter)
app.use('/supplier', supplierRouter)
app.use('/order', orderRouter)
app.use('/auth', authRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));