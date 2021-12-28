const connection = require('../config/connection');

const reserveData = (data) => {
  return connection.query(`UPDATE books SET reserved =(CASE WHEN reserved= 'false' THEN 'true' WHEN reserved= 'true' THEN 'false' END) where id=${data.id} `);
};

module.exports = reserveData;
