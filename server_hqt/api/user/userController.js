const sql = require("mssql")
const config = require('../../dbConfig')

exports.registerCustomer = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body &&req.body["LOAITK"])
    {
        var LOAITK=req.body["LOAITK"]
        var TENTK=req.body["TENTK"]
        var MATKHAUTK=req.body["MATKHAUTK"]
        if(LOAITK&&LOAITK==5)
        {
             try {
                let pool = await sql.connect(config)
                let result = await pool.request().
                input("TENTK",sql.VarChar(50),TENTK).
                input("MATKHAUTK",sql.VarChar(50),MATKHAUTK).
                execute("sp_DANGKYKH")
                sql.close()
                var success=true
                var message="Success Registered"
                res.json({success,message})
                }
            catch(error){
                var success=false
                var message="Failed Registered"
                res.json({success,message})
                }
    }
    else{
        var success=false
        var message="Incorrect user's type "
        res.json({success,message})
        }
}  
else{
    var success=false
    var message="null message "
    res.json({success,message})
    }
};

exports.registerShipper = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body &&  req.body["LOAITK"])
    {
        
        var LOAITK=req.body["LOAITK"]
        var TENTK=req.body["TENTK"]
        var MATKHAUTK=req.body["MATKHAUTK"]
        var EMAIL=req.body["EMAIL"]
        var TEN=req.body["TEN"]
        var SDT=req.body["SDT"]
        var BIENSOXE=req.body["BIENSOXE"]
        var CMND=req.body["CMND"]
        if(LOAITK&&LOAITK==4)
        {
             try {
                let pool = await sql.connect(config)
                let result = await pool.request().
                input("TENTK",sql.VarChar(50),TENTK).
                input("MATKHAUTK",sql.VarChar(50),MATKHAUTK).
                input("EMAIL",sql.VarChar(50),EMAIL).
                input("TEN",sql.VarChar(50),TEN).
                input("SDT",sql.VarChar(10),SDT).
                input("BIENSOXE",sql.VarChar(10),BIENSOXE).
                input("CMND",sql.Char(12),CMND).
                execute("sp_DANGKYTX")
                sql.close()
                var success=true
                var message="Success Registered"
                res.json({success,message})
                }
            catch(error){
                var success=false
                var message="Failed Registered"
                res.json({success,message})
                }
    }
    else{
        var success=false
        var message="Incorrect user's type "
        res.json({success,message})
        }
}
else{
    var success=false
    var message="null message "
    res.json({success,message})
    }
};

exports.registerAdmin = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")

    if (req.body &&  req.body["LOAITK"]==0)
    {
        
        var LOAITK=req.body["LOAITK"]
        var TENTK=req.body["TENTK"]
        var MATKHAUTK=req.body["MATKHAUTK"]
        var EMAIL=req.body["EMAIL"]
        var TEN=req.body["TEN"]
        var SDT=req.body["SDT"]

        if(LOAITK==0)
        {
             try {
                let pool = await sql.connect(config)
                let result = await pool.request().
                input("TENTK",sql.VarChar(50),TENTK).
                input("MATKHAUTK",sql.VarChar(50),MATKHAUTK).
                input("EMAIL",sql.VarChar(50),EMAIL).
                input("TEN",sql.VarChar(50),TEN).
                input("SDT",sql.VarChar(10),SDT).
                execute("sp_DANGKYQTV")
                sql.close()
                var success=true
                var message="Success Registered"
                res.json({success,message})
                }
            catch(error){
                var success=false
                var message="Failed Registered"
                res.json({success,message})
                }
    }
    else{
        var success=false
        var message="Incorrect user's type "
        res.json({success,message})
        }
}
else{
    var success=false
    var message="null message "
    res.json({success,message})
    }
};
exports.registerEmployee = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body &&  req.body["LOAITK"])
    {
        
        var LOAITK=req.body["LOAITK"]
        var TENTK=req.body["TENTK"]
        var MATKHAUTK=req.body["MATKHAUTK"]
        var EMAIL=req.body["EMAIL"]
        var TEN=req.body["TEN"]
        var SDT=req.body["SDT"]

        if(LOAITK&&LOAITK==1)
        {
             try {
                let pool = await sql.connect(config)
                let result = await pool.request().
                input("TENTK",sql.VarChar(50),TENTK).
                input("MATKHAUTK",sql.VarChar(50),MATKHAUTK).
                input("EMAIL",sql.VarChar(50),EMAIL).
                input("TEN",sql.VarChar(50),TEN).
                input("SDT",sql.VarChar(10),SDT).
                execute("sp_DANGKYNV")
                sql.close()
                var success=true
                var message="Success Registered"
                res.json({success,message})
                }
            catch(error){
                var success=false
                var message="Failed Registered"
                res.json({success,message})
                }
    }
    else{
        var success=false
        var message="Incorrect user's type "
        res.json({success,message})
        }
}
else{
    var success=false
    var message="null message "
    res.json({success,message})
    }
};

exports.registerSupplier = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body &&  req.body["LOAITK"])
    {
        
        var LOAITK=req.body["LOAITK"]
        var TENTK=req.body["TENTK"]
        var MATKHAUTK=req.body["MATKHAUTK"]
        var EMAIL=req.body["EMAIL"]
        var TEN=req.body["TEN"]
        var SDT=req.body["SDT"]
        var MSTHUE= req.body["MSTHUE"]
        var MAIL_NDD=req.body["MAIL_NDD"] 
        var SLDUKIENMIN=req.body["SLDUKIENMIN"] 
        var SLDUKIENMAX=req.body["SLDUKIENMAX"] 
        if(LOAITK&&LOAITK==2)
        {
             try {
                let pool = await sql.connect(config)
                let result = await pool.request().
                input("TENTK",sql.VarChar(50),TENTK).
                input("MATKHAUTK",sql.VarChar(50),MATKHAUTK).
                input("EMAILDT",sql.VarChar(50),EMAIL).
                input("TENDT",sql.VarChar(50),TEN).
                input("SDTDT",sql.VarChar(10),SDT).
                input("MSTHUE",sql.VarChar(10),MSTHUE).
                input("MAIL_NDD",sql.VarChar(50),MAIL_NDD).
                input("SLDUKIENMIN",sql.Int,SLDUKIENMIN).
                input("SLDUKIENMAX",sql.Int,SLDUKIENMAX).
                execute("sp_DANGKYDT")
                sql.close()
                var success=true
                var message="Success Registered"
                res.json({success,message})
                }
            catch(error){
                var success=false
                var message="Failed Registered"
                res.json({success,message})
                }
    }
    else{
        var success=false
        var message="Incorrect user's type "
        res.json({success,message})
        }
}
else{
    var success=false
    var message="null message "
    res.json({success,message})
    }
};

exports.getProfileUser=async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body &&  req.body["LOAITK"])
    {
        
        var LOAITK=req.body["LOAITK"]
        var TENTK=req.body["TENTK"]
        var MATKHAUTK=req.body["MATKHAUTK"]
        var EMAIL=req.body["EMAIL"]
        var TEN=req.body["TEN"]
        var SDT=req.body["SDT"]
        var MSTHUE= req.body["MSTHUE"]
        var MAIL_NDD=req.body["MAIL_NDD"] 
        var SLDUKIENMIN=req.body["SLDUKIENMIN"] 
        var SLDUKIENMAX=req.body["SLDUKIENMAX"] 
        if(LOAITK&&LOAITK==2)
        {
             try {
                let pool = await sql.connect(config)
                let result = await pool.request().
                input("TENTK",sql.VarChar(50),TENTK).
                input("MATKHAUTK",sql.VarChar(50),MATKHAUTK).
                input("EMAILDT",sql.VarChar(50),EMAIL).
                input("TENDT",sql.VarChar(50),TEN).
                input("SDTDT",sql.VarChar(10),SDT).
                input("MSTHUE",sql.VarChar(10),MSTHUE).
                input("MAIL_NDD",sql.VarChar(50),MAIL_NDD).
                input("SLDUKIENMIN",sql.Int,SLDUKIENMIN).
                input("SLDUKIENMAX",sql.Int,SLDUKIENMAX).
                execute("sp_DANGKYDT")
                sql.close()
                var success=true
                var message="Success Registered"
                res.json({success,message})
                }
            catch(error){
                var success=false
                var message="Failed Registered"
                res.json({success,message})
                }
    }
    else{
        var success=false
        var message="Incorrect user's type "
        res.json({success,message})
        }
}
else{
    var success=false
    var message="null message "
    res.json({success,message})
    }
};
exports.updateProfileUser=async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " POST");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    if (req.body &&  req.body["LOAITK"])
    {
        
        var LOAITK=req.body["LOAITK"]
        var TENTK=req.body["TENTK"]
        var MATKHAUTK=req.body["MATKHAUTK"]
        var EMAIL=req.body["EMAIL"]
        var TEN=req.body["TEN"]
        var SDT=req.body["SDT"]
        var MSTHUE= req.body["MSTHUE"]
        var MAIL_NDD=req.body["MAIL_NDD"] 
        var SLDUKIENMIN=req.body["SLDUKIENMIN"] 
        var SLDUKIENMAX=req.body["SLDUKIENMAX"] 
        if(LOAITK&&LOAITK==2)
        {
             try {
                let pool = await sql.connect(config)
                let result = await pool.request().
                input("TENTK",sql.VarChar(50),TENTK).
                input("MATKHAUTK",sql.VarChar(50),MATKHAUTK).
                input("EMAILDT",sql.VarChar(50),EMAIL).
                input("TENDT",sql.VarChar(50),TEN).
                input("SDTDT",sql.VarChar(10),SDT).
                input("MSTHUE",sql.VarChar(10),MSTHUE).
                input("MAIL_NDD",sql.VarChar(50),MAIL_NDD).
                input("SLDUKIENMIN",sql.Int,SLDUKIENMIN).
                input("SLDUKIENMAX",sql.Int,SLDUKIENMAX).
                execute("sp_DANGKYDT")
                sql.close()
                var success=true
                var message="Success Registered"
                res.json({success,message})
                }
            catch(error){
                var success=false
                var message="Failed Registered"
                res.json({success,message})
                }
    }
    else{
        var success=false
        var message="Incorrect user's type "
        res.json({success,message})
        }
}
else{
    var success=false
    var message="null message "
    res.json({success,message})
    }
};
exports.login=async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", " GET");
    res.header("Access-Control-Allow-Headers", "Content-Type")
    try{
        
        var LOAITK=req.params.type
        var TENTK=req.body["TENTK"]
        var MATKHAUTK=req.body["MATKHAUTK"]

        
                let pool = await sql.connect(config)
                let result = await pool.request().
                input("TENTK",sql.VarChar(50),TENTK).
                input("MATKHAUTK",sql.VarChar(50),MATKHAUTK).
                input("LOAITK",sql.VarChar(50),LOAITK).
                execute("sp_DANGNHAP")
                sql.close()
                var success=true
                var message="Succes"
                var data=result.recordsets[0]
                res.json({success,message,data})
                
          
  
}
catch (error){
    var success=false
    var message=error.message
    var data={}
    res.json({success,message,data})
    }
};
