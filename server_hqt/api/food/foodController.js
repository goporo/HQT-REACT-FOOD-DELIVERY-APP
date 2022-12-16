const sql = require("mssql")
const config = require('../../dbConfig')

exports.getAllFoods = async (req, res) => {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request().query('SELECT TOP 10 * FROM THUCDON')
        //console.log(result)
        sql.close()
        res.json(result.recordset)
    }
    catch (error) {
        res.send(error.message)
    }
};