const sql = require("mssql")
const config = require('../../dbConfig')

exports.getOrdersCustomer = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MAKH=req.body["MAKH"]
        var TGBD=req.body["TGBD"]
        var TGBD=req.body["TGKT"]
        let pool = await sql.connect(config)
        let result = await pool.request().
        input("MAKH",sql.Char(10),MAKH).
        input("TGBD",sql.DateTime,new Date()).
        input("TGKT",sql.DateTime,new Date()).
        execute("sp_DonHang_KH")
        sql.close()
        var success=true
        var message="Success Get"
        var data=result.recordset
        res.json({success,message,data})
    }
    catch (error){
        var success=false
        var message=error.message
        var data={}
        res.json({success,message,data})
    }
};
exports.getOrdersShipper = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MATX=req.body["MATX"]
        var TGBD=req.body["TGBD"]
        var TGBD=req.body["TGKT"]
        let pool = await sql.connect(config)
        let result = await pool.request().
        input("MATX",sql.Char(10),MATX).
        input("TGBD",sql.DateTime,new Date()).
        input("TGKT",sql.DateTime,new Date()).
        execute("sp_DonHang_TX")
        sql.close()
        var success=true
        var message="Success Get"
        var data=result.recordset
        res.json({success,message,data})
    }
    catch (error){
        var success=false
        var message=error.message
        var data={}
        res.json({success,message,data})
    }

};
exports.getOrdersBranch = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MACN=req.body["MACN"]
        var TGBD=req.body["TGBD"]
        var TGBD=req.body["TGKT"]
        let pool = await sql.connect(config)
        let result = await pool.request().
        input("MACN",sql.Char(10),MACN).
        input("TGBD",sql.DateTime,new Date()).
        input("TGKT",sql.DateTime,new Date()).
        execute("sp_DonHang_CN")
        sql.close()
        var success=true
        var message="Success Get"
        var data=result.recordset
        res.json({success,message,data})
    }
    catch (error){
        var success=false
        var message=error.message
        var data={}
        res.json({success,message,data})
    }
};
exports.getOrdersSupplier = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MADT=req.body["MADT"]
        var TGBD=req.body["TGBD"]
        var TGBD=req.body["TGKT"]
        let pool = await sql.connect(config)
        let result = await pool.request().
        input("MADT",sql.Char(10),MADT).
        input("TGBD",sql.DateTime,new Date()).
        input("TGKT",sql.DateTime,new Date()).
        execute("sp_DonHang_DT")
        sql.close()
        var success=true
        var message="Success Get"
        var data=result.recordset
        res.json({success,message,data})
    }
    catch (error){
        var success=false
        var message=error.message
        var data={}
        res.json({success,message,data})
    }

};
exports.placeOrder = async (req, res) => {

};

exports.cancelOrder = async (req, res) => {

};