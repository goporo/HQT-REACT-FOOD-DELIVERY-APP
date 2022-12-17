const sql = require("mssql")
const config = require('../../dbConfig')

exports.getSuppliers = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
     
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT * FROM DOITAC')

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

exports.getSuppliersDetails = async (req, res) => {

};