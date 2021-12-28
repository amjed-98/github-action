const connection = require('../config/connection');

const postData = (data) => connection
  .query('INSERT INTO books (name, authors, category) Values ($1, $2, $3) RETURNING *', [data.name, data.author, data.category]);


module.exports = postData;
