const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "n91802ur_todos",
    password: "Ma1234",
    database: "n91802ur_todos"
});

module.exports = pool;
//https://free29.beget.com/phpMyAdmin/?pma_username=n91802ur_todos&pma_password=Ma1234&db=n91802ur_todos&server=1&uid=1712921961330