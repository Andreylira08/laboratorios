const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'not_a_labo',
    password: '',
});

module.exports = pool.promise();
                    