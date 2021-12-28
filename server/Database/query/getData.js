const { query } = require('../config/connection');
const connection = require('../config/connection');

const getData = () => connection.query('select * from books');

module.exports = getData;

