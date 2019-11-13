const util = require('util');
const mysql = require('mysql');

let config;

if (process.env.HEROKU) {
  config = {
    host: process.env.CLEARDB_HOST,
    user: process.env.CLEARDB_USER,
    password: process.env.CLEARDB_PASSWORD,
    database: process.env.CLEARDB_DATABASE,
    multipleStatements: true,
    connectionLimit: 5,
  };
} else {
  config = {
    host: 'localhost',
    user: 'admin_sushi',
    password: 'sOJ8f8SRMoc5vyn',
    database: 'sushi_factory',
    multipleStatements: true,
  };
}

const pool = mysql.createPool(config);

pool.query = util.promisify(pool.query);

module.exports = pool;
