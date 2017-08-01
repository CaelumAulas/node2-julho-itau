const mysql = require('mysql')

class PagamentoDao {
  constructor() {
    this.connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'payfast'
    })
  }

  salva(pagamento, callback) {
    console.log(this.connection)
    this.connection.query('INSERT INTO pagamentos SET ?', pagamento, callback)

    connection.end()
  }

  lista(callback) {
    this.connection.query('SELECT * FROM pagamentos', callback)

    connection.end()
  }

  buscaPorId(id, callback) {
    this.connection.query('SELECT * FROM pagamentos WHERE id=?', [id], callback)

    connection.end()
  }
}3

module.exports = function() {
  return PagamentoDao
}
