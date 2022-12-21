const sql = require("mssql")
const config = require('../../dbConfig')

exports.getSuppliers = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {

        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT * FROM CHINHANH CN JOIN CUAHANG CH ON CH.MACN = CN.MACN')

        sql.close()
        var success = true
        var message = "Success Get"
        var data = result.recordset
        res.json({ success, message, data })
    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }


};

exports.getSuppliersDetails = async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MACN = req.params.id

        let pool = await sql.connect(config)
        let result = await pool.request().input("MACN", sql.VarChar(10), MACN).execute("sp_Lay_CN")

        sql.close()
        var success = true
        var message = "Success Get"
        var supplier = result.recordsets[0]
        var foods = result.recordsets[1]
        var data = { supplier, foods }
        res.json({ success, message, data })
    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }
};
exports.addFood = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MACN = req.params.id
        var TENMONAN = req.body.TENMONAN
        var MOTA = req.body.MOTA
        var GIA = req.body.GIA
        var HINHANHTD = req.body.HINHANHTD
        var DIACHIHINHANHTD = req.body.DIACHIHINHANHTD
        var MALAT = req.body.MALAT
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("TENMONAN", sql.VarChar(100), TENMONAN).
            input("MACN", sql.VarChar(10), MACN).
            input("MOTA", sql.Char(100), MOTA).
            input("GIA", sql.Int, GIA).
            input("HINHANHTD", sql.Bit, HINHANHTD).
            input("DIACHIHINHANHTD", sql.VarChar(sql.MAX), DIACHIHINHANHTD).
            input("MALAT", sql.VarChar(10), MALAT).
            execute("sp_ThemThucDon")

        console.log(result);

        sql.close()
        var success = true
        var message = "Success Get"
        var data = {}
        res.json({ success, message, data })

    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }




}
exports.updateFood = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " PATCH");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MACN = req.body.MACN
        var TENMONAN = req.body.TENMONAN
        var MOTA = req.body.MOTA
        var GIA = req.body.GIA
        var HINHANHTD = req.body.HINHANHTD
        var DIACHIHINHANHTD = req.body.DIACHIHINHANHTD
        var MALAT = req.body.MALAT
        var TINHTRANG = req.body.TINHTRANG
        var MAMONAN = req.body.MAMONAN
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("TENMONAN", sql.VarChar(100), TENMONAN).
            input("MACN", sql.VarChar(10), MACN).
            input("MOTA", sql.Char(100), MOTA).
            input("GIA", sql.Int, GIA).
            input("HINHANHTD", sql.Bit, HINHANHTD).
            input("DIACHIHINHANHTD", sql.VarChar(sql.MAX), DIACHIHINHANHTD).
            input("MALAT", sql.VarChar(10), MALAT).
            input("MAMONAN", sql.VarChar(10), MAMONAN).
            input("TINHTRANGTd", sql.Char(20), TINHTRANG).
            execute("sp_CapNhatThucDon")

        console.log(result);

        sql.close()
        var success = true
        var message = "Success Get"
        var data = {}
        res.json({ success, message, data })

    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }




}