require('dotenv').config();
const { Pool } = require('pg');

let dbUrl = '';
const { NODE_ENV, DB_URL_TEST, DB_URL_DEV, DATABASE_URL } = process.env

if (NODE_ENV === 'test') {
  dbUrl = DB_URL_TEST;
} else if (NODE_ENV === 'development') {
  dbUrl = DB_URL_DEV;
} else {
  dbUrl = DATABASE_URL;
}
console.log(dbUrl, 'connection')
const option = {
  connectionString: dbUrl,
  ssl: NODE_ENV === "test" ? false :{ rejectUnauthorized: false },
};

module.exports = new Pool(option);
