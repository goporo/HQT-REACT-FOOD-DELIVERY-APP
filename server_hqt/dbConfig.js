
const sql = require("mssql")
const config = {
    server: "mssql-100484-0.cloudclusters.net",
    database: "QL_BANHANG",
    user: "Admin123",
    password: "Admin123",
    port: 10120,
};

async function test() {

    let pool = await sql.connect(config)
    let result = await pool.request().query('SELECT * FROM TAIKHOAN')
    console.log(result)
    sql.close()


}

module.exports = config;