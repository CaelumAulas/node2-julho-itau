const mysql = require('mysql')

function connectionFactory() {
  return mysql.createConnection({
    user: 'root',
    password: '',
    database: 'payfast',
    host: 'localhost'
  })
}

module.exports = function() {
  return connectionFactory
}
