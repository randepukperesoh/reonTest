const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "",
    database: "Todos"
});

module.exports = pool;
