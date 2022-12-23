const sql = require("mssql")
const config = require('../../dbConfig')

exports.mostSold = async (req, res) => {
    //example
    try {
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT TOP 12 * FROM THUCDON')
        //console.log(result)
        sql.close()
        res.json(result.recordset)
    }
    catch (error) {
        res.send(error.message)
    }
};
exports.foodType = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body && req.body["SL"] >= 0) {
        var SL = req.body["SL"]
        var MACN = req.body["MALAT"]
        try {
            let pool = await sql.connect(config)
            let result = await pool.request().
                input("SL", sql.Int, SL).
                input("MALAT", sql.VarChar(10), MALAT).
                execute("sp_MonAn_LoaiAmThuc")
            sql.close()
            var success = true
            var message = "Success Get"
            var foods = result.recordset
            res.json({ success, message, foods })
        }
        catch (error) {
            var success = false
            var message = "Failed To Get Food"
            var foods = {}
            res.json({ success, message, foods })
        }

    }
    else {
        var success = false
        var message = "null message "
        var foods = {}
        res.json({ success, message, foods })
    }
};
exports.supplier = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body && req.body["SL"] >= 0) {
        var SL = req.body["SL"]
        var MACN = req.body["MACN"]
        try {
            let pool = await sql.connect(config)
            let result = await pool.request().
                input("SL", sql.Int, SL).
                input("MACN", sql.VarChar(10), MACN).
                execute("sp_MonAn_ChiNhanh")
            sql.close()
            var success = true
            var message = "Success Get"
            var foods = result.recordset
            res.json({ success, message, foods })
        }
        catch (error) {
            var success = false
            var message = "Failed To Get Food"
            var foods = {}
            res.json({ success, message, foods })
        }

    }
    else {
        var success = false
        var message = "null message "
        var foods = {}
        res.json({ success, message, foods })
    }
};
exports.price = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body && req.body["SL"]) {
        var SL = req.body["SL"]
        var THUTU = req.body["THUTU"]
        try {
            let pool = await sql.connect(config)
            let result = await pool.request().
                input("SL", sql.Int, SL).
                input("THUTU", sql.VarChar(10), THUTU).
                execute("sp_MonAn_TheoGia")
            sql.close()
            var success = true
            var message = "Success Get"
            var foods = result.recordset
            res.json({ success, message, foods })
        }
        catch (error) {
            var success = false
            var message = "Failed To Get Food"
            var foods = {}
            res.json({ success, message, foods })
        }

    }
    else {
        var success = false
        var message = "null message "
        var foods = {}
        res.json({ success, message, foods })
    }
};
exports.type = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")

    try {
        let pool = await sql.connect(config)
        let result = await pool.request().
            query('SELECT * FROM LOAIAMTHUC')
        sql.close()
        var success = true
        var message = "Success Get"
        var types = result.recordsets[0]
        res.json({ success, message, types })
    }
    catch (error) {
        var success = false
        var message = "Failed To Get Food"
        res.json({ success, message })
    }

};
