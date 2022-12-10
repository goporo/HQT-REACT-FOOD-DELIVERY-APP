const sql=require("mssql")
const config={
    server:"localhost\\TAI",
    database:"QL_BANHANG",
    user:"DBFood",
    password:"123456",
    port: 1433,

  
  
};

async function test(){
    
        let pool=await sql.connect(config)
        let result =await pool.request().query('SELECT * FROM TAIKHOAN')
        console.log(result)
        sql.close()
    
    
}
test();
module.exports=config;