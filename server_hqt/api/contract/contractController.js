const sql = require("mssql")
const config = require('../../dbConfig')


// lay contract  nhan vien new là chưa được xác nhận, expiring là sắp hết hạn trong month tháng tới, all lấy tất cả
exports.getContracts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var type = req.params.type
        let pool = await sql.connect(config)
        let result //= await pool.request().query('SELECT *FROM THONGTIN_HOAHONG WHERE GETDATE() BETWEEN NGAYBD AND NGAYHH')
        if (type == 'new') {
            result = await pool.request().execute('sp_LayHopDong_ChuaXacNhan')
        }
        else if (type == 'expiring') {
            // sẽ hết hạn trong các tháng tới với số tháng = month
            var MONTH = req.body.MONTH
            result = await pool.request().input("THANG", sql.Int, MONTH).execute('sp_LayHopDong_SapHetHan')
        }
        else if (type = 'all') {
            result = await pool.request().query('SELECT * FROM HOPDONG HD JOIN THONGTIN_HOPDONG TTHD ON HD.MAHD=TTHD.MAHD')
        }
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
// lấy hợp đồng đối tác
exports.getBusinessContracts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MADT = req.params.id
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT *FROM THONGTIN_HOPDONG TTHD JOIN HOPDONG HD ON HD.MAHD=TTHD.MAHD WHERE HD.MADOITAC =' + MADT)

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
// lay constract mới để ký 
exports.getNewContracts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {

        var PHIKH = 1000000
        ////////////////////////

        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT *FROM THONGTIN_HOAHONG WHERE GETDATE() BETWEEN NGAYBD AND NGAYHH')
        sql.close()
        if (result.recordsets[0])//&& result.recordsets[0].length==1)
        {
            var success = true
            var message = "Success Get"
            var HOAHONG = result.recordsets[0]
            var data = { HOAHONG, PHIKH }
            res.json({ success, message, data })
            return
        }
        else {
            var success = false
            var message = 'Thông tin hoa hồng không hợp lệ'
            var data = {}
            res.json({ success, message, data })
        }
    }
    catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }

};
// ký hợp đồng
exports.postNewContracts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MADT = req.params.madoitac
        var THOIHAN = req.body.YEAR
        var PHIKH = 1000000
        var CHINHANH = req.body.SUPPLIERS

        ///////////////////
        var list_CHINHANH = new sql.Table();
        list_CHINHANH.columns.add('STT', sql.Int)
        list_CHINHANH.columns.add('MATKNGANHANG', sql.VarChar(10));
        list_CHINHANH.columns.add('MADIACHI', sql.VarChar(10));
        list_CHINHANH.columns.add('TENTK', sql.VarChar(50));
        list_CHINHANH.columns.add('MATKHAUTK', sql.VarChar(50));


        for (var i = 0; i < CHINHANH.length; i++) {
            list_CHINHANH.rows.add(i + 1, CHINHANH[i].MATKNGANHANG, CHINHANH[i].MADIACHI, CHINHANH[i].TENTK, CHINHANH[i].MATKHAUTK)
            console.log(i + 1, CHINHANH[i].MATKNGANHANG, CHINHANH[i].MADIACHI, CHINHANH[i].TENTK, CHINHANH[i].MATKHAUTK)
        }

        ////////////////////////
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MADOITAC", sql.VarChar(10), MADT).
            input("THOIHAN", sql.Int, THOIHAN).
            input("PHIKH", sql.Int, PHIKH).
            input("list_CHINHANH", list_CHINHANH).
            execute("sp_KyHopDong")
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
// Xác nhận hợp đôngf
exports.postAccept = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MAHD = req.body.MAHD
        var STT = req.body.STT
        var MANHANVIEN = req.body.MANHANVIEN
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MAHD", sql.VarChar(10), MAHD).
            input("STT", sql.Int, STT).
            input("MANV", sql.VarChar(10), MANHANVIEN).
            execute("sp_HopDong_XacNhan")
        sql.close()
        var success = true
        var message = "Success Get"
        var data = {}
        res.json({ success, message, data })
    } catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }
};
//thong tin doi tac, thong tin hop dong
exports.getContractsDetails = async (req, res) => {


};
exports.postExtendContracts = async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try {
        var MAHD = req.body.MAHD
        var THOIHAN = req.body.THOIHAN
        var MADT = req.body.MADT
        let pool = await sql.connect(config)
        let result = await pool.request().
            input("MADT", sql.VarChar(10), MADT).
            input("THOIHAN", sql.Int, THOIHAN).
            input("MAHD", sql.VarChar(10), MAHD).
            execute("sp_HopDong_YeuCauGiaHan")
        sql.close()
        var success = true
        var message = "Success Get"
        var data = {}
        res.json({ success, message, data })
    } catch (error) {
        var success = false
        var message = error.message
        var data = {}
        res.json({ success, message, data })
    }
};
