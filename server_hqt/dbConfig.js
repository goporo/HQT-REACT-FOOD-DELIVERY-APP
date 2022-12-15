
const sql = require("mssql")
const config = {
    server: "34.124.231.192",
    database: "QL_BANHANG",
    user: "admin",
    password: "admin",
    port: null,

    "options": {
        "encrypt": true,
        "enableArithAbort": true
    }
};

async function test() {

    let pool = await sql.connect(config)
    let result = await pool.request().query('SELECT * FROM TAIKHOAN')
    console.log(result)
    sql.close()


}

module.exports = config;