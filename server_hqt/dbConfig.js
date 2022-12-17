
const sql = require("mssql")
const config = {
    server: "localhost",
    database: "QL_BANHANG",
    user: "admin",
    password: "admin",
    port: null,

    "options": {
        "encrypt": true,
        "enableArithAbort": true
    }
};


module.exports = config;
