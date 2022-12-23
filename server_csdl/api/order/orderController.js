const sql = require("mssql")
const config = require('../../dbConfig')

exports.getOrdersCustomer = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MAKH = req.body["MAKH"]
        var TGBD = req.body["TGBD"]
        var TGBD = req.body["TGKT"]
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MAKH", sql.VarChar(10), MAKH).
            input("TGBD", sql.DateTime, new Date()).
            input("TGKT", sql.DateTime, new Date()).
            execute("sp_DonHang_KH")
        sql.close()
        var success = true
        var message = "Success Get"
        var data = result.recordsets[0]
        res.json({ success, message, data })
    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }
};
exports.getOrdersShipper = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MATX = req.body["MATX"]
        var TGBD = req.body["TGBD"]
        var TGBD = req.body["TGKT"]
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MATX", sql.VarChar(10), MATX).
            input("TGBD", sql.DateTime, new Date()).
            input("TGKT", sql.DateTime, new Date()).
            execute("sp_DonHang_TX")
        sql.close()
        var success = true
        var message = "Success Get"
        var data = result.recordsets[0]
        res.json({ success, message, data })
    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }

};
exports.getOrdersBranch = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MACN = req.body["MACN"]
        var TGBD = req.body["TGBD"]
        var TGKT = req.body["TGKT"]
        var TRANGTHAIDH = req.body["TRANGTHAIDH"]
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MACN", sql.VarChar(10), MACN).
            input("TGBD", sql.DateTime, TGBD).
            input("TGKT", sql.DateTime, TGKT).
            input("TRANGTHAIDH", sql.Char(20), TRANGTHAIDH).
            execute("sp_DonHang_CN")
        sql.close()
        var success = true
        var message = "Success Get"
        var Orders = result.recordsets[0]
        var Statics = result.recordsets[1]
        var data = { Orders, Statics }
        res.json({ success, message, data })
    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }
};
exports.getOrdersSupplier = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MADT = req.body["MADT"]
        var TGBD = req.body["TGBD"]
        var TGBD = req.body["TGKT"]
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MADT", sql.VarChar(10), MADT).
            input("TGBD", sql.DateTime, new Date()).
            input("TGKT", sql.DateTime, new Date()).
            execute("sp_DonHang_DT")
        sql.close()
        var success = true
        var message = "Success Get"
        var data = result.recordsets[0]
        res.json({ success, message, data })
    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }

};

exports.getOrderDetails = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MAKH = req.body["MAKH"]
        var MADH = req.body["MADH"]
        var USER_TYPE = req.body["USER_TYPE"]
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MAKH", sql.VarChar(10), MAKH).
            input("MADH", sql.VarChar(10), MADH).
            input("USER_TYPE", sql.VarChar(10), USER_TYPE).
            execute("sp_DonHang_ChiTiet")
        sql.close()
        var success = true
        var message = "Success Get"
        var data = result.recordsets[0]
        res.json({ success, message, data })
    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }
};

exports.placeOrder = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var HINHTHUCTT = req.body.HINHTHUCTT
        var MAKH = req.body.MAKH
        var MACN = req.body.MACN
        var MADCGH = req.body.MADCGH
        var MONAN = req.body.foods
        ///////////////////
        var list_MONAN = new sql.Table();
        list_MONAN.columns.add('STT', sql.Int)
        list_MONAN.columns.add('MAMONAN', sql.VarChar(10));
        list_MONAN.columns.add('SOLUONG', sql.Int);

        for (var i = 0; i < MONAN.length; i++) {
            list_MONAN.rows.add(i + 1, MONAN[i].MAMONAN, MONAN[i].SOLUONG)
        }

        ////////////////////////
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MAKH", sql.VarChar(10), MAKH).
            input("MACN", sql.VarChar(10), MACN).
            input("MADIACHI", sql.VarChar(10), MADCGH).
            input("HINHTHUCTT", sql.Char(20), HINHTHUCTT).
            input("PHIVANCHUYEN", sql.Int, 20000).
            input("list_MONAN", list_MONAN).
            execute("sp_Tao_DH")


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

};

exports.cancelOrder = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MAND = req.body.MAND
        var TRANGTHAIDH = req.body.TRANGTHAIDH
        var MADH = req.body.MADH
        let pool = await sql.connect(config)
        let result

        switch (req.params.type) {
            case '3':
                result = await pool.request().
                    input("MACN", sql.VarChar(10), MAND).
                    input("MADH", sql.VarChar(10), MADH).
                    input("TRANGTHAIDH", sql.Char(20), TRANGTHAIDH).
                    execute("sp_CapNhat_DH_CN");
                break;
            case '4':
                result = await pool.request().
                    input("MATX", sql.VarChar(10), MAND).
                    input("MADH", sql.VarChar(10), MADH).
                    input("TRANGTHAIDH", sql.Char(20), TRANGTHAIDH).
                    execute("sp_CapNhat_DH_TX");
                break;
            case '5':
                result = await pool.request().
                    input("MAKH", sql.VarChar(10), MAND).
                    input("MADH", sql.VarChar(10), MADH).
                    input("TRANGTHAIDH", sql.Char(20), TRANGTHAIDH).
                    execute("sp_CapNhat_DH_KH");
                break;
            default:
                var success = false
                var message = 'SAI LOAI NGUOI DUNG'
                var data = {}
                res.json({ success, message, data })
                return
        }
        sql.close()
        var success = true
        var message = 'CAP NHAT THANH CONG'
        var data = {}
        res.json({ success, message, data })
    } catch (error) {
        sql.close()
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }
};

exports.getOrdersByStatus = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var status = req.params.status
        let pool = await sql.connect(config)
        let result = await pool.request().query("SELECT * FROM DON_DH WHERE TRANGTHAIDH = " + '\'' + status + '\'')

        sql.close()
        var success = true
        var message = "Success Get"
        var data = result.recordsets[0]
        res.json({ success, message, data })
    } catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }
};