
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'mall_db'
    },
    console.log(`Connected to the mall database.`)
);

module.exports = db;