const sql = require("mssql")
const config = require('../../dbConfig')


// lay tat ca contract neu la nhan vien va chi lay contract da lap neu la doi tac
exports.getContracts = async (req, res) => {

};
// lay constract mới để ký 
exports.getNewContracts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try{
    
        var PHIKH=1000000  
        ////////////////////////
    
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT *FROM THONGTIN_HOAHONG WHERE GETDATE() BETWEEN NGAYBD AND NGAYHH')
        sql.close()
        if (result.recordsets[0] )//&& result.recordsets[0].length==1)
        {
        var success=true
        var message="Success Get"
        var HOAHONG=result.recordsets[0]
        var data={HOAHONG,PHIKH}
        res.json({success,message,data})
        return
        }
        else{
            var success=false
            var message='Thông tin hoa hồng không hợp lệ'
            var data={}
            res.json({success,message,data})
        }
        }
        catch (error)
        {
            var success=false
            var message=error.message
            var data={}
            res.json({success,message,data})
        }
    
};
// ký hợp đồng
exports.postNewContracts = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try{
    var MADT=req.params.id
    var THOIHAN=req.body.YEAR
    var PHIKH=1000000
    var CHINHANH=req.body.SUPPLIERS

    ///////////////////
    var list_CHINHANH = new sql.Table();  
    list_CHINHANH.columns.add('STT',sql.Int)
    list_CHINHANH.columns.add('MATKNGANHANG', sql.Char(10));  
    list_CHINHANH.columns.add('MADIACHI', sql.Char(10));  
    list_CHINHANH.columns.add('TENTK', sql.VarChar(50));  
    list_CHINHANH.columns.add('MATKHAUTK', sql.VarChar(50));  

    
    for (var i=0;i<CHINHANH.length;i++)
    {
        list_CHINHANH.rows.add(i+1,CHINHANH[i].MATKNGANHANG,CHINHANH[i].MADIACHI,CHINHANH[i].TENTK,CHINHANH[i].MATKHAUTK)
        console.log(i+1,CHINHANH[i].MATKNGANHANG,CHINHANH[i].MADIACHI,CHINHANH[i].TENTK,CHINHANH[i].MATKHAUTK)
    }
    
    ////////////////////////
    let pool = await sql.connect(config)
    let result = await pool.request().
        input("MADOITAC",sql.Char(10),MADT).
        input("THOIHAN",sql.Int,THOIHAN).
        input("PHIKH",sql.Int,PHIKH).
        input("list_CHINHANH",list_CHINHANH).
        execute("sp_KyHopDong")
    sql.close()
    var success=true
    var message="Success Get"
    var data={}
    res.json({success,message,data})
  
    }
    catch (error)
    {
        var success=false
        var message=error.message
        var data={}
        res.json({success,message,data})
    }

};
// Xác nhận hợp đôngf
exports.postAccept = async (req, res) => {

};
//thong tin doi tac, thong tin hop dong
exports.getContractsDetails = async (req, res) => {


};